import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import psycopg2
from datetime import datetime

def handler(event: dict, context) -> dict:
    '''Обработка заявок с формы: сохранение в БД и отправка email'''
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
        name = body.get('name', '')
        phone = body.get('phone', '')
        message = body.get('message', '')
        
        if not name or not phone:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Имя и телефон обязательны'})
            }
        
        # Сохранение заявки в базу данных
        database_url = os.environ.get('DATABASE_URL')
        conn = None
        application_id = None
        
        try:
            conn = psycopg2.connect(database_url)
            cursor = conn.cursor()
            
            cursor.execute(
                "INSERT INTO applications (name, phone, message, created_at, status) VALUES (%s, %s, %s, %s, %s) RETURNING id",
                (name, phone, message, datetime.now(), 'new')
            )
            application_id = cursor.fetchone()[0]
            conn.commit()
            cursor.close()
        except Exception as db_error:
            if conn:
                conn.rollback()
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': f'Ошибка сохранения в БД: {str(db_error)}'})
            }
        finally:
            if conn:
                conn.close()
        
        recipient_email = os.environ.get('RECIPIENT_EMAIL')
        smtp_host = os.environ.get('SMTP_HOST')
        smtp_port = int(os.environ.get('SMTP_PORT', 587))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        
        msg = MIMEMultipart()
        msg['From'] = smtp_user
        msg['To'] = recipient_email
        msg['Subject'] = f'Новая заявка #{application_id} - {name}'
        
        html_body = f'''
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
                    <h2 style="color: #2d6a4f; border-bottom: 2px solid #2d6a4f; padding-bottom: 10px;">Новая заявка с сайта</h2>
                    <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
                        <p><strong>Номер заявки:</strong> #{application_id}</p>
                        <p><strong>Имя:</strong> {name}</p>
                        <p><strong>Телефон:</strong> {phone}</p>
                        <p><strong>Сообщение:</strong></p>
                        <p style="background: #f5f5f5; padding: 15px; border-left: 3px solid #2d6a4f;">{message if message else '<em>Не указано</em>'}</p>
                        <p style="color: #666; font-size: 12px; margin-top: 20px;">Дата: {datetime.now().strftime('%d.%m.%Y %H:%M')}</p>
                    </div>
                </div>
            </body>
        </html>
        '''
        
        msg.attach(MIMEText(html_body, 'html'))
        
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': True, 'message': 'Заявка успешно отправлена', 'applicationId': application_id})
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Ошибка отправки: {str(e)}'})
        }
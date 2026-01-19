import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full border-2 shadow-xl">
        <CardContent className="p-12 text-center">
          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckCircle" className="text-green-600" size={56} />
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Заявка успешно отправлена!
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Наш специалист свяжется с вами в ближайшее время для консультации
          </p>

          <div className="bg-primary/5 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Icon name="Clock" className="text-primary" size={24} />
              <p className="font-semibold text-lg">Обычно отвечаем в течение 15 минут</p>
            </div>
            <p className="text-muted-foreground">
              В рабочее время с 9:00 до 18:00
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/')}
              className="gap-2"
            >
              <Icon name="Home" size={20} />
              Вернуться на главную
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.location.href = 'tel:88007008909'}
              className="gap-2"
            >
              <Icon name="Phone" size={20} />
              Позвонить сейчас
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-muted-foreground mb-4">
              Если у вас срочный вопрос, свяжитесь с нами напрямую:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a 
                href="tel:88007008909" 
                className="font-semibold hover:text-primary flex items-center justify-center gap-2"
              >
                <Icon name="Phone" size={16} />
                8 (800) 700-89-09
              </a>
              <a 
                href="mailto:info@sll-expert.ru" 
                className="font-semibold hover:text-primary flex items-center justify-center gap-2"
              >
                <Icon name="Mail" size={16} />
                info@sll-expert.ru
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Success;

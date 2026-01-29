import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const ContactAndFooter = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setEmailError('Введите корректный email');
      return;
    }
    setEmailError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/a732bd0b-978a-4cf6-86d7-0b39c86f16e2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/success');
      } else {
        toast({
          title: 'Ошибка отправки',
          description: data.error || 'Попробуйте позже или позвоните нам',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка сети',
        description: 'Проверьте подключение к интернету',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5" id="faq">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in-up">Часто задаваемые вопросы</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg animate-fade-in-up animation-delay-100">
              Ответы на популярные вопросы о земельных сертификатах
            </p>
            <Accordion type="single" collapsible className="space-y-4 animate-fade-in animation-delay-200">
              <AccordionItem value="item-1" className="bg-white rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Что такое земельный сертификат?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Земельный сертификат — это государственный документ, дающий право на получение
                  земельного участка или средств для покупки/строительства недвижимости. Мы
                  помогаем быстро и легко реализовать это право.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Как быстро можно получить средства?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  В среднем процесс занимает от 2 до 4 недель с момента обращения. Мы берем на себя
                  всю работу с документами и согласованиями, что значительно ускоряет процесс.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Какие документы необходимы?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Базовый пакет: паспорт, земельный сертификат, свидетельство о браке (при наличии).
                  Полный список зависит от вашей ситуации — мы подскажем на бесплатной консультации.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Есть ли скрытые платежи?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Нет, мы работаем полностью прозрачно. Стоимость услуг обсуждается заранее и
                  фиксируется в договоре. Никаких дополнительных платежей не возникнет.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Оставьте заявку</h2>
              <p className="text-muted-foreground text-lg animate-fade-in-up animation-delay-100">
                Мы свяжемся с вами в течение 15 минут и ответим на все вопросы
              </p>
            </div>

            <Card className="border-2" id="contact-form">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Ваше имя <span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Телефон <span className="text-red-500">*</span>
                    </label>
                    <InputMask
                      mask="+7 (999) 999-99-99"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    >
                      {(inputProps: any) => (
                        <Input
                          {...inputProps}
                          type="tel"
                          placeholder="+7 (999) 999-99-99"
                          className="h-12"
                        />
                      )}
                    </InputMask>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="example@mail.ru"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (emailError) setEmailError('');
                      }}
                      required
                      className={`h-12 ${emailError ? 'border-red-500' : ''}`}
                    />
                    {emailError && (
                      <p className="text-red-500 text-sm mt-1">{emailError}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о вашей ситуации..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg gap-2 bg-gradient-to-r from-[hsl(145,70%,35%)] via-primary to-[hsl(145,60%,55%)] hover:from-[hsl(145,70%,32%)] hover:via-[hsl(145,63%,39%)] hover:to-[hsl(145,60%,52%)] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105" disabled={isSubmitting}>
                    <Icon name="Send" size={20} />
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 grid md:grid-cols-2 gap-6 animate-fade-in animation-delay-300">
              <Card className="border-2 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl shadow-md shadow-primary/20">
                    <Icon name="Phone" className="text-primary drop-shadow-[0_2px_4px_rgba(50,205,50,0.3)]" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Телефон</p>
                    <a href="tel:88007008909" className="font-bold text-lg hover:text-primary transition-colors">
                      8 (800) 700-89-09
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl shadow-md shadow-primary/20">
                    <Icon name="Mail" className="text-primary drop-shadow-[0_2px_4px_rgba(50,205,50,0.3)]" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:info@sll-expert.ru"
                      className="font-bold text-lg hover:text-primary transition-colors"
                    >
                      info@sll-expert.ru
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12" role="contentinfo" itemScope itemType="https://schema.org/Organization">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="BadgeCheck" size={32} />
              <span className="text-2xl font-bold" itemProp="name">Эксперт Финанс</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto" itemProp="description">
              Профессиональная помощь в реализации земельных сертификатов и программ
              государственной поддержки
            </p>
            <div className="flex justify-center gap-6 text-sm text-primary-foreground/80">
              <span>© 2024 Эксперт Финанс</span>
              <span>•</span>
              <span>Все права защищены</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactAndFooter;
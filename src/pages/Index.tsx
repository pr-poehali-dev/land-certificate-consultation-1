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

const Index = () => {
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
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="BadgeCheck" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">Эксперт Финанс</span>
          </div>
          <a href="tel:88007008909">
            <Button size="lg" className="gap-2">
              <Icon name="Phone" size={20} />
              8 (800) 700-89-09
            </Button>
          </a>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Реализуйте земельный сертификат{' '}
                <span className="text-primary">легко и быстро</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Получите средства на покупку или строительство недвижимости под земельный
                сертификат с помощью профессионалов
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 gap-2"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="MessageCircle" size={20} />
                  Получить консультацию
                </Button>
                <a href="tel:88007008909">
                  <Button size="lg" variant="outline" className="text-lg px-8 gap-2">
                    <Icon name="Phone" size={20} />
                    Позвонить
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <Icon name="FileCheck" size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Быстрое оформление</h3>
                      <p className="text-white/90">Минимум документов, максимум результата</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <Icon name="Shield" size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Безопасно</h3>
                      <p className="text-white/90">Полное юридическое сопровождение</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <Icon name="TrendingUp" size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Выгодно</h3>
                      <p className="text-white/90">Оптимальные условия реализации</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in-up">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Комплексное сопровождение процесса получения средств по программам государственной поддержки многодетных семей
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="border-4 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 duration-300 overflow-hidden group animate-slide-in-left animation-delay-200">
              <CardContent className="p-10 bg-gradient-to-br from-primary/5 to-primary/10 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="bg-primary text-primary-foreground w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <Icon name="MapPin" size={40} />
                  </div>
                  <h3 className="text-3xl font-extrabold mb-3 text-primary">Земельный сертификат</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Получите средства на покупку жилой недвижимости или строительство дома
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-accent/20 hover:border-accent/40 transition-all hover:scale-105 duration-300 overflow-hidden group animate-slide-in-right animation-delay-200">
              <CardContent className="p-10 bg-gradient-to-br from-accent/5 to-accent/10 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="bg-accent text-accent-foreground w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <Icon name="Baby" size={40} />
                  </div>
                  <h3 className="text-3xl font-extrabold mb-3 text-accent">Региональный материнский капитал</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Реализация регионального маткапитала на улучшение жилищных условий
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'HandCoins',
                title: 'Получение средств',
                description:
                  'Помогаем получить деньги под земельный сертификат на выгодных условиях',
              },
              {
                icon: 'Home',
                title: 'Покупка недвижимости',
                description: 'Консультации по использованию средств для приобретения жилья',
              },
              {
                icon: 'Hammer',
                title: 'Строительство',
                description: 'Поддержка в реализации сертификата на строительство дома',
              },
              {
                icon: 'FileText',
                title: 'Оформление документов',
                description: 'Помощь в сборе и подготовке всех необходимых документов',
              },
              {
                icon: 'Scale',
                title: 'Юридическое сопровождение',
                description: 'Полное юридическое сопровождение на всех этапах',
              },
              {
                icon: 'Users',
                title: 'Индивидуальный подход',
                description: 'Персональное решение для каждого клиента',
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s`, opacity: 0 }}
              >
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in-up">Почему выбирают нас</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg animate-fade-in-up animation-delay-100">
              Эксперт Финанс — лидер в реализации программ государственной поддержки
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 animate-scale-in animation-delay-200">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-xl">
                      <Icon name="Award" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">10+ лет</h3>
                      <p className="text-muted-foreground">
                        Огромный опыт работы с программами господдержки
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded-xl">
                      <Icon name="Users" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">5000+</h3>
                      <p className="text-muted-foreground">Довольных клиентов по всей России</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 animate-scale-in animation-delay-400">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-xl">
                      <Icon name="Heart" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Многодетным семьям</h3>
                      <p className="text-muted-foreground">
                        Специальные программы для семей с детьми
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 animate-scale-in animation-delay-500">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded-xl">
                      <Icon name="CheckCircle" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">98%</h3>
                      <p className="text-muted-foreground">Успешных сделок и одобрений</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in-up">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg animate-fade-in-up animation-delay-100">
            Истории успеха наших клиентов
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Мария Андреева',
                city: 'Шахты',
                text: 'Спасибо Эксперт Финанс! Помогли быстро получить средства под земельный сертификат. Всего за 2 недели мы смогли начать строительство дома для нашей семьи.',
                rating: 5,
              },
              {
                name: 'Александр Шевченко',
                city: 'Ростов-на-Дону',
                text: 'Отличная команда профессионалов! Весь процесс прошел гладко, все документы оформили за нас. Очень довольны результатом и скоростью работы.',
                rating: 5,
              },
              {
                name: 'Екатерина Смирнова',
                city: 'Семикаракорск',
                text: 'Как многодетная семья, мы долго искали компанию, которая поможет реализовать наш земельный сертификат. Эксперт Финанс справились на отлично!',
                rating: 5,
              },
            ].map((review, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.15}s`, opacity: 0 }}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.city}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
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
                  Минимальный пакет: паспорт, земельный сертификат, свидетельство о браке (если
                  есть), документы на приобретаемую недвижимость. Наши специалисты помогут собрать и правильно оформить все необходимые
                  документы.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">
                    Можно ли использовать средства земельного сертификата вместе с Региональным материнским капиталом?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Да, средства земельного сертификата можно объединить вместе с Региональным материнским капиталом и направить на покупку недвижимости или строительство индивидуального жилого дома.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Сколько стоят ваши услуги?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Стоимость зависит от конкретной ситуации и объема работ. Первая консультация
                  бесплатна! Позвоните нам, и мы рассчитаем стоимость именно для вашего случая.
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

            <Card className="border-2">
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
                  <Button type="submit" size="lg" className="w-full text-lg gap-2" disabled={isSubmitting}>
                    <Icon name="Send" size={20} />
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 grid md:grid-cols-2 gap-6 animate-fade-in animation-delay-300">
              <Card className="border-2">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Телефон</p>
                    <a href="tel:88007008909" className="font-bold text-lg hover:text-primary">
                      8 (800) 700-89-09
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:info@sll-expert.ru"
                      className="font-bold text-lg hover:text-primary"
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

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="BadgeCheck" size={32} />
              <span className="text-2xl font-bold">Эксперт Финанс</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
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
    </div>
  );
};

export default Index;
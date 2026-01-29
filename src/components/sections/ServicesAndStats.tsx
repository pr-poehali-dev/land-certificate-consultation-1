import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesAndStats = () => {
  return (
    <>
      <section className="py-20 bg-white" id="services">
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

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5" id="about">
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

      <section className="py-20 bg-white" id="reviews">
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
    </>
  );
};

export default ServicesAndStats;

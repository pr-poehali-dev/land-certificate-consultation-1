import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight" itemProp="headline">
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
  );
};

export default HeroSection;

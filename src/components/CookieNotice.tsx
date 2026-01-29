import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <Card className="max-w-4xl mx-auto bg-white border-2 border-primary/20 shadow-2xl shadow-primary/20">
        <div className="p-6 flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="bg-primary/10 p-3 rounded-xl shadow-md shadow-primary/20">
              <Icon name="Cookie" className="text-primary drop-shadow-[0_2px_4px_rgba(50,205,50,0.3)]" size={28} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Мы используем файлы Cookie</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Этот сайт использует файлы cookie для улучшения работы и анализа посещаемости. 
                Продолжая использовать сайт, вы соглашаетесь с использованием cookie.
              </p>
            </div>
          </div>
          <Button 
            onClick={handleAccept}
            className="bg-gradient-to-r from-[hsl(145,70%,35%)] via-primary to-[hsl(145,60%,55%)] hover:from-[hsl(145,70%,32%)] hover:via-[hsl(145,63%,39%)] hover:to-[hsl(145,60%,52%)] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 whitespace-nowrap"
          >
            <Icon name="Check" size={18} className="mr-2" />
            Принять
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CookieNotice;
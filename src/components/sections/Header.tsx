import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50" role="banner">
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
  );
};

export default Header;

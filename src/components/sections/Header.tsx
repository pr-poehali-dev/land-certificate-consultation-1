import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50" role="banner">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="BadgeCheck" className="text-primary drop-shadow-[0_2px_6px_rgba(50,205,50,0.4)]" size={32} />
          <span className="text-2xl font-bold text-primary drop-shadow-[0_2px_4px_rgba(50,205,50,0.3)]">Эксперт Финанс</span>
        </div>
        <a href="tel:88007008909">
          <Button size="lg" className="gap-2 shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 transition-all duration-300">
            <Icon name="Phone" size={20} />
            8 (800) 700-89-09
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
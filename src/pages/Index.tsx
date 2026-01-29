import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import ServicesAndStats from '@/components/sections/ServicesAndStats';
import ContactAndFooter from '@/components/sections/ContactAndFooter';
import CookieNotice from '@/components/CookieNotice';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesAndStats />
      <ContactAndFooter />
      <CookieNotice />
    </div>
  );
};

export default Index;
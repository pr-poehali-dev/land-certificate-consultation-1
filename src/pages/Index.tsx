import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import ServicesAndStats from '@/components/sections/ServicesAndStats';
import ContactAndFooter from '@/components/sections/ContactAndFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesAndStats />
      <ContactAndFooter />
    </div>
  );
};

export default Index;

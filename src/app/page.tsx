import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoWeHelp from '@/components/WhoWeHelp';
import Services from '@/components/Services';
import Therapist from '@/components/Therapist';
import FeesAndRebates from '@/components/FeesAndRebates';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoWeHelp />
      <Services />
      <Therapist />
      <FeesAndRebates />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

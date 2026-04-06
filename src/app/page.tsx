import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhoWeHelp from '@/components/WhoWeHelp';
import Therapist from '@/components/Therapist';
import FeesAndRebates from '@/components/FeesAndRebates';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageSkeleton from '@/components/PageSkeleton';

export default function Home() {
  return (
    <>
      <PageSkeleton />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhoWeHelp />
        <Therapist />
        <FeesAndRebates />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

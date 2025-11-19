import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/layout/Hero';
import { FeatureSection } from '@/components/layout/FeatureSection';
import { RewardsSection } from '@/components/layout/RewardsSection';
import { ArchitectureSection } from '@/components/layout/ArchitectureSection';
import { FAQSection } from '@/components/layout/FAQSection';
import { Footer } from '@/components/layout/Footer';
import { TableSection } from '@/components/sections/TableSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-blue-500/30">
      <Navbar />

      <Hero />

      {/* App Preview Section - Starts below Hero */}
      <section className="relative z-10 px-4 py-20 mx-auto max-w-7xl">
        <TableSection />
      </section>

      <FeatureSection />
      <RewardsSection />
      <ArchitectureSection />
      <FAQSection />

      <Footer />
    </main>
  );
}

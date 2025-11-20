import dynamic from 'next/dynamic';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/layout/Hero';
import { TableSection } from '@/components/sections/TableSection';

// Lazy load below-the-fold components for better performance
const FeatureSection = dynamic(() => import('@/components/layout/FeatureSection').then(mod => ({ default: mod.FeatureSection })), {
  loading: () => <div className="h-96" />, // Prevent layout shift
});

const RewardsSection = dynamic(() => import('@/components/layout/RewardsSection').then(mod => ({ default: mod.RewardsSection })), {
  loading: () => <div className="h-96" />,
});

const ArchitectureSection = dynamic(() => import('@/components/layout/ArchitectureSection').then(mod => ({ default: mod.ArchitectureSection })), {
  loading: () => <div className="h-96" />,
});

const FAQSection = dynamic(() => import('@/components/layout/FAQSection').then(mod => ({ default: mod.FAQSection })), {
  loading: () => <div className="h-96" />,
});

const Footer = dynamic(() => import('@/components/layout/Footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="h-32" />,
});

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

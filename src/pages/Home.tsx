import React, { Suspense, lazy } from 'react';
import useActiveSection from '../hooks/useActiveSection';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import { SECTION_IDS } from '../constants';

// Lazy loaded components for maximum performance and optimized Lighthouse score
const About = lazy(() => import('../components/About'));
const Projects = lazy(() => import('../components/Projects'));
const LearningJourney = lazy(() => import('../components/LearningJourney'));
const Skills = lazy(() => import('../components/Skills'));
const Timeline = lazy(() => import('../components/Timeline'));
const Research = lazy(() => import('../components/Research'));
const Certifications = lazy(() => import('../components/Certifications'));
const Github = lazy(() => import('../components/Github'));
const Footer = lazy(() => import('../components/Footer'));

// Modern minimal Skeleton component to provide a beautiful loading state
function SectionFallback() {
  return (
    <div className="py-24 max-w-5xl mx-auto px-6 animate-pulse space-y-6">
      <div className="h-4 w-24 bg-surface-base rounded" />
      <div className="h-8 w-48 bg-surface-base rounded" />
      <div className="h-32 w-full bg-surface-base rounded-2xl" />
    </div>
  );
}

export default function Home() {
  // Custom hook for active navigation tracking
  const activeSection = useActiveSection(SECTION_IDS, 120);

  return (
    <div className="bg-background-base text-white min-h-screen relative selection:bg-accent-primary/20 selection:text-white scroll-smooth">
      {/* Absolute background grid pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0" />

      {/* Drifting Background Blobs for Liquid Glass effect */}
      <div className="absolute top-[10%] right-[15%] w-[450px] h-[450px] rounded-full bg-accent-primary opacity-[0.08] dark:opacity-[0.05] blur-[120px] pointer-events-none z-0 animate-blob-1" />
      <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-accent-secondary opacity-[0.08] dark:opacity-[0.05] blur-[120px] pointer-events-none z-0 animate-blob-2" />

      {/* Floating glass navigation */}
      <Navigation activeSection={activeSection} />

      <main className="relative z-10">
        {/* Hero Section (Loaded instantly for LCP optimization) */}
        <div id="hero">
          <Hero />
        </div>

        {/* Lazy loaded sections wrapped in elegant Suspense boundaries */}
        <Suspense fallback={<SectionFallback />}>
          <div id="about">
            <About />
          </div>

          <div id="work">
            <Projects />
          </div>

          <div id="learning">
            <LearningJourney />
          </div>

          <div id="capabilities">
            <Skills />
          </div>

          <div id="journey">
            <Timeline />
          </div>

          <div id="research">
            <Research />
          </div>


          <div id="certifications">
            <Certifications />
          </div>

          <div id="github">
            <Github />
          </div>

          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

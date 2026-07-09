import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Mail, Sparkles, Cpu, Activity, TrendingUp } from 'lucide-react';
import Button from './Button';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scrollDown = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 max-w-5xl mx-auto overflow-hidden">
      {/* Background Soft Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent-primary/5 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] rounded-full bg-accent-secondary/5 blur-[100px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10"
      >
        {/* Left text column */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          {/* Opportunities Badge */}
          <motion.div variants={itemVariants} className="w-fit">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-base border border-border-subtle shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-text-secondary">
                Open to Opportunities
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-[54px] font-serif font-light leading-[1.1] text-white tracking-tight"
          >
            Building intelligent software,{' '}
            <span className="italic font-normal font-serif text-accent-primary block md:inline">
              AI systems,
            </span>{' '}
            and quantitative solutions.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-text-secondary leading-relaxed max-w-xl font-light"
          >
            Software Engineer specializing in scalable backend systems, machine learning, Linux,
            cloud technologies and quantitative finance.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-4">
            <Button
              as="a"
              href="#work"
              onClick={(e) => scrollDown(e, '#work')}
              variant="primary"
              size="md"
            >
              View Projects
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
            <Button
              as="a"
              href="#contact"
              onClick={(e) => scrollDown(e, '#contact')}
              variant="secondary"
              size="md"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact Me
            </Button>
          </motion.div>
        </div>

        {/* Right portrait/visual column */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            variants={itemVariants}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px] rounded-2xl border border-border-subtle bg-surface-base p-1"
          >
            {/* Visual Portrait Card */}
            <div className="relative w-full h-full rounded-xl bg-card-base overflow-hidden border border-border-subtle flex flex-col justify-center items-center p-6 text-center select-none group">
              {/* Geometric math-art simulation */}
              <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="0.5" />
                  <line x1="10" y1="50" x2="90" y2="50" stroke="white" strokeWidth="0.5" />
                  <line x1="50" y1="10" x2="50" y2="90" stroke="white" strokeWidth="0.5" />
                  <path d="M15 15 L85 85" stroke="white" strokeWidth="0.2" />
                  <path d="M15 85 L85 15" stroke="white" strokeWidth="0.2" />
                </svg>
              </div>

              {/* Dynamic Orbital Center Circle */}
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border border-border-subtle bg-background-base flex items-center justify-center shadow-inner group-hover:border-accent-primary/40 transition-colors duration-700">
                {/* Floating system icons around the core */}
                <span className="absolute text-[9px] font-mono tracking-widest text-text-secondary top-4">ST</span>
                
                {/* Neural net node symbols inside */}
                <div className="flex flex-col items-center gap-1.5 z-10">
                  <Cpu className="w-6 h-6 text-accent-primary group-hover:scale-110 transition-transform duration-500" />
                  <span className="text-[9px] font-mono text-text-secondary uppercase tracking-widest">QUANT-AI</span>
                </div>

                {/* Orbit path rings with pulse effect */}
                <div className="absolute -inset-2 rounded-full border border-dashed border-border-subtle/30 animate-[spin_30s_linear_infinite]" />
                <div className="absolute -inset-4 rounded-full border border-border-subtle/10 animate-[spin_40s_linear_infinite_reverse]" />
              </div>

              {/* Subtle tech statistics tags */}
              <div className="mt-6 flex flex-col gap-1 items-center z-10">
                <span className="text-[11px] font-mono tracking-wide text-white uppercase font-semibold">
                  SHWET TIWARI
                </span>
                <span className="text-[10px] font-mono text-text-secondary">
                  RESEARCH ENG // SYSTEM ARCH
                </span>
              </div>

              {/* Status display panel resembling Linear / Apple UI */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-surface-base/50 border border-border-subtle px-3 py-1.5 rounded-lg">
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-3 h-3 text-accent-secondary" />
                  <span className="text-[9px] font-mono text-text-secondary">P_MAX_MODEL: 98.4%</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                  <span className="text-[9px] font-mono text-text-secondary">SERVER OK</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

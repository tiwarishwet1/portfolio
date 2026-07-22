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
            Designing intelligent software,{' '}
            <span className="italic font-normal font-serif text-accent-primary block md:inline">
              AI systems,
            </span>{' '}
            and high-throughput backends.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-text-secondary leading-relaxed max-w-xl font-light"
          >
            Software Engineer specializing in scalable API development, machine learning pipelines,
            and containerized cloud infrastructure.
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
              href="/Tiwari_Shwet.pdf"
              download="Tiwari_Shwet.pdf"
              variant="outline"
              size="md"
            >
              <Download className="w-3.5 h-3.5" />
              Download Resume
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
            className="relative w-full max-w-[360px] aspect-[4/5] rounded-2xl liquid-glass p-6 flex flex-col justify-between select-none group"
          >
            {/* Dashboard Header */}
            <div className="flex justify-between items-center pb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-text-secondary uppercase">
                  pipeline status: active
                </span>
              </div>
              <span className="text-[9px] font-mono text-accent-primary bg-accent-primary/10 border border-accent-primary/20 px-2 py-0.5 rounded">
                SAHAI_ENGINE
              </span>
            </div>

            {/* Pipeline Visual Flow */}
            <div className="flex-grow flex flex-col justify-center gap-6 my-6">
              <span className="text-[9px] font-mono tracking-wider text-text-secondary uppercase">
                Cross-Modal Fusion Pipeline
              </span>

              <div className="space-y-4">
                {/* Audio Waveform Input */}
                <div className="flex items-center gap-3">
                  <div className="w-16 text-[9px] font-mono text-text-secondary">Audio Wave</div>
                  <div className="flex-grow flex items-center gap-0.5 h-6 bg-white/5 rounded px-2 border border-white/5">
                    <span className="w-1 h-3 bg-accent-primary rounded-full animate-[pulse_1.5s_infinite_100ms]" />
                    <span className="w-1 h-4 bg-accent-primary rounded-full animate-[pulse_1.5s_infinite_200ms]" />
                    <span className="w-1 h-2 bg-accent-primary rounded-full animate-[pulse_1.5s_infinite_300ms]" />
                    <span className="w-1 h-5 bg-accent-primary rounded-full animate-[pulse_1.5s_infinite_400ms]" />
                    <span className="w-1 h-3 bg-accent-primary rounded-full animate-[pulse_1.5s_infinite_500ms]" />
                    <span className="w-1 h-1 bg-accent-primary rounded-full" />
                    <span className="w-1 h-2 bg-accent-primary rounded-full animate-[pulse_1.5s_infinite_200ms]" />
                    <span className="w-1 h-4 bg-accent-primary rounded-full animate-[pulse_1.5s_infinite_100ms]" />
                  </div>
                </div>

                {/* Facial Landmarks Input */}
                <div className="flex items-center gap-3">
                  <div className="w-16 text-[9px] font-mono text-text-secondary">Facial Grid</div>
                  <div className="flex-grow flex items-center justify-between h-6 bg-white/5 rounded px-2 border border-white/5 text-[9px] font-mono text-text-secondary">
                    <span>GRID_X: [24fps]</span>
                    <span className="text-accent-secondary animate-pulse">● TRACKING</span>
                  </div>
                </div>

                {/* Text Tokenizer Input */}
                <div className="flex items-center gap-3">
                  <div className="w-16 text-[9px] font-mono text-text-secondary">Text Token</div>
                  <div className="flex-grow flex items-center gap-1 h-6 bg-white/5 rounded px-2 border border-white/5 text-[8px] font-mono">
                    <span className="bg-white/10 px-1 py-0.5 rounded text-white">[I]</span>
                    <span className="bg-white/10 px-1 py-0.5 rounded text-white">[feel]</span>
                    <span className="bg-accent-primary/20 border border-accent-primary/30 px-1 py-0.5 rounded text-accent-primary font-bold">[heavy]</span>
                  </div>
                </div>
              </div>

              {/* Central Fusion Node Indicator */}
              <div className="relative py-2 flex items-center justify-center">
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="relative z-10 px-4 py-1.5 rounded-full bg-background-base border border-white/10 text-[9px] font-mono text-white tracking-widest uppercase">
                  Attention Fusion Node
                </div>
              </div>

              {/* Accuracy Output */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[9px] font-mono text-text-secondary">
                  <span>CLASSIFICATION ACCURACY</span>
                  <span className="text-white font-bold">98.46%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-accent-primary rounded-full w-[98.46%] shadow-[0_0_8px_#00d2be]" />
                </div>
              </div>
            </div>

            {/* Dashboard Footer Metrics */}
            <div className="pt-4 border-t border-white/5 grid grid-cols-3 gap-2 text-center">
              <div className="bg-white/5 rounded p-2 border border-white/5">
                <span className="block text-[8px] font-mono text-text-secondary uppercase">API Uptime</span>
                <span className="text-xs font-semibold text-white font-mono">99.9%</span>
              </div>
              <div className="bg-white/5 rounded p-2 border border-white/5">
                <span className="block text-[8px] font-mono text-text-secondary uppercase">Latency</span>
                <span className="text-xs font-semibold text-white font-mono">-94%</span>
              </div>
              <div className="bg-white/5 rounded p-2 border border-white/5">
                <span className="block text-[8px] font-mono text-text-secondary uppercase">Throughput</span>
                <span className="text-xs font-semibold text-white font-mono">8.5k/s</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

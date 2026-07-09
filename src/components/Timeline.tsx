import { motion } from 'motion/react';
import { timelineEvents } from '../data';
import { Cpu, Brain, FileText, Server, Terminal, Cloud, TrendingUp } from 'lucide-react';
import Section from './Section';
import Card from './Card';

const iconMap: Record<string, any> = {
  Cpu: Cpu,
  Brain: Brain,
  FileText: FileText,
  Server: Server,
  Terminal: Terminal,
  Cloud: Cloud,
  TrendingUp: TrendingUp,
};

export default function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Section
      id="journey"
      preTitle="Career Evolution"
      title="Engineering Journey"
      description="The linear progression of my technical research, systems mastery, and financial disciplines over time."
    >
      <div className="relative">
        {/* Continuous central line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-1.5 bottom-1.5 w-[1px] bg-gradient-to-b from-border-subtle via-border-subtle/80 to-transparent pointer-events-none" />

        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-12"
        >
          {timelineEvents.map((event, idx) => {
            const Icon = iconMap[event.iconName] || Terminal;
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={event.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Node indicator */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-1 z-10">
                  <div className="w-10 h-10 rounded-full bg-card-base border border-border-subtle hover:border-accent-primary flex items-center justify-center transition-colors shadow-lg">
                    <Icon className="w-4.5 h-4.5 text-accent-primary" />
                  </div>
                </div>

                {/* Left empty space for balancing */}
                <div className="hidden md:block w-1/2" />

                {/* Content Box */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12">
                  <Card className="hover:border-white/12 transition-all p-5 group">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-primary">
                        {event.tag}
                      </span>
                    </div>

                    <h3 className="text-sm font-semibold text-white tracking-tight group-hover:text-accent-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-xs text-text-secondary mt-2 font-light leading-relaxed">
                      {event.description}
                    </p>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}

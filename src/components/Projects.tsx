import { motion } from 'motion/react';
import { projectsData } from '../data';
import {
  TrendingUp,
  Brain,
  Zap,
  Terminal,
  Cpu,
} from 'lucide-react';
import Section from './Section';
import ProjectCard from './ProjectCard';

const iconMap: Record<string, any> = {
  TrendingUp: TrendingUp,
  Brain: Brain,
  Zap: Zap,
  Terminal: Terminal,
  Cpu: Cpu,
};

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Section
      id="work"
      preTitle="Selected Engineering Portfolio"
      title="Featured Work"
      description="Deep dives into real systems, statistical algorithms, and production architectures that solve complex engineering bottlenecks."
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col gap-12"
      >
        {projectsData.map((project, idx) => {
          const Icon = iconMap[project.imageSymbol] || Cpu;
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={project.id}
              variants={projectVariants}
            >
              <ProjectCard
                project={project}
                isEven={isEven}
                icon={Icon}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

import { motion } from 'motion/react';
import { skillCategories } from '../data';
import {
  Terminal,
  Brain,
  Cloud,
  Layers,
  TrendingUp,
  Database,
  Code,
  Wrench,
} from 'lucide-react';
import Section from './Section';
import SkillCard from './SkillCard';

const iconMap: Record<string, any> = {
  Backend: Layers,
  'Backend Engineering': Layers,
  'Artificial Intelligence': Brain,
  Cloud: Cloud,
  Linux: Terminal,
  'Systems & DevOps': Terminal,
  Finance: TrendingUp,
  Mathematics: TrendingUp,
  Databases: Database,
  Programming: Code,
  Tools: Wrench,
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Section
      id="capabilities"
      preTitle="Technical Capabilities"
      title="Core Capabilities"
      description="A granular list of standard practices, systems, database systems, and methodologies across math and computer science."
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {skillCategories.map((category) => {
          const Icon = iconMap[category.name] || Code;
          return (
            <motion.div key={category.name} variants={cardVariants}>
              <SkillCard
                categoryName={category.name}
                skills={category.skills}
                icon={Icon}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

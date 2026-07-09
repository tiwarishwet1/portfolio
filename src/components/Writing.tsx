import { motion } from 'motion/react';
import { writingArticles } from '../data';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import Section from './Section';
import Card from './Card';

export default function Writing() {
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
      id="writing"
      preTitle="Technical Articles"
      title="Selected Writing"
      description="Systems architecture deconstructions, algorithmic journals, and tutorials exploring systems mechanics and quantitative models."
    >
      <div className="flex justify-end mb-4 -mt-8">
        <a
          href="https://medium.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-mono text-text-secondary hover:text-white transition-colors"
        >
          <span>VIEW BLOG INDEX</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-text-secondary" />
        </a>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {writingArticles.map((article) => (
          <motion.div key={article.id} variants={itemVariants}>
            <a
              href={article.link}
              className="group block h-full"
            >
              <Card className="hover:border-white/12 transition-all flex flex-col justify-between h-full p-5">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-2.5 py-0.5 rounded bg-surface-base border border-border-subtle text-[9px] font-mono text-white uppercase font-medium">
                      {article.platform}
                    </span>
                    <span className="text-[10px] font-mono text-text-secondary flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-white tracking-tight group-hover:text-accent-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-text-secondary mt-2.5 font-light leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-border-subtle/30 pt-4 mt-6 text-[10px] font-mono text-text-secondary">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-accent-secondary" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-0.5 text-white group-hover:text-accent-primary transition-colors font-medium">
                    READ ARTICLE
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </Card>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

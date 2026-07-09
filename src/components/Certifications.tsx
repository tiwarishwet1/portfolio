import { motion } from 'motion/react';
import { certificationsData } from '../data';
import { Award, Calendar, ArrowUpRight } from 'lucide-react';
import Section from './Section';
import Card from './Card';

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Section
      id="certifications"
      preTitle="Credentials & Verifications"
      title="Certifications"
      description="Verified academic and professional indicators certifying computational and financial competence."
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {certificationsData.map((cert) => {
          const isInProgress = cert.status === 'In Progress';
          return (
            <motion.div key={cert.id} variants={itemVariants}>
              <Card className="hover:border-white/12 transition-all flex flex-col justify-between h-full p-5">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-2 rounded-lg bg-surface-base border border-border-subtle text-accent-primary">
                      <Award className="w-4.5 h-4.5" />
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded text-[9px] font-mono border ${
                        isInProgress
                          ? 'text-amber-400 bg-amber-400/10 border-amber-400/20'
                          : 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-white tracking-tight group-hover:text-accent-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-text-secondary mt-0.5 font-light">{cert.issuer}</p>

                  <p className="text-xs text-text-secondary mt-3 font-light leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-5 pt-3 border-t border-border-subtle/30 text-[10px] font-mono text-text-secondary">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-accent-secondary" />
                    <span>{cert.date}</span>
                  </div>
                  {cert.verificationUrl && cert.verificationUrl !== '#' && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-0.5 text-white hover:text-accent-primary transition-colors"
                    >
                      <span>VERIFY</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

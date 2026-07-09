import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { researchPapers } from '../data';
import { FileText, ChevronDown, ChevronUp, Quote } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import Button from './Button';

export default function Research() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <Section
      id="research"
      preTitle="Academic Publications"
      title="Academic Research"
      description="Formal peer-reviewed papers published in international symposiums, focusing on deep multimodal synthesis and diagnostics."
    >
      <div className="flex flex-col gap-6">
        {researchPapers.map((paper) => {
          const isExpanded = expandedId === paper.id;
          return (
            <div key={paper.id}>
              <Card
                className="hover:border-white/12 transition-all p-6 md:p-8 h-auto"
                hoverEffect={false}
              >
              <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-accent-primary/10 border border-accent-primary/20 text-[10px] font-mono text-accent-primary uppercase font-semibold">
                      IEEE Publication
                    </span>
                    <span className="text-xs text-text-secondary font-mono">{paper.status}</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-serif font-normal text-white tracking-tight mb-2">
                    {paper.title}
                  </h3>

                  <p className="text-xs font-sans text-text-secondary mb-1">
                    Written by <span className="text-white font-medium">{paper.authors}</span>
                  </p>
                  <p className="text-xs font-mono text-text-secondary uppercase tracking-wider">
                    {paper.publication} — {paper.conference}
                  </p>
                </div>

                {/* PDF link button */}
                <div className="flex items-center gap-2 self-start">
                  <Button
                    as="a"
                    href={paper.pdfUrl}
                    variant="outline"
                    className="w-10 h-10 rounded-full p-0 flex items-center justify-center hover:border-white/20"
                    title="Download Full Paper"
                  >
                    <FileText className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Keywords badges */}
              <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
                {paper.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-2 py-0.5 rounded-md bg-surface-base border border-border-subtle/50 text-[10px] font-mono text-text-secondary"
                  >
                    #{kw}
                  </span>
                ))}
              </div>

              {/* Expand Abstract Button */}
              <button
                onClick={() => toggleExpand(paper.id)}
                className="flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-white transition-colors pt-2 cursor-pointer"
              >
                {isExpanded ? (
                  <>
                    <span>Hide Research Abstract</span>
                    <ChevronUp className="w-3.5 h-3.5" />
                  </>
                ) : (
                  <>
                    <span>Read Research Abstract</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              {/* Expandable abstract text */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 pt-5 border-t border-border-subtle/50 text-xs md:text-sm text-text-secondary font-light leading-relaxed flex gap-3 bg-surface-base/40 p-4 rounded-xl border border-border-subtle/30">
                      <Quote className="w-5 h-5 text-accent-primary/50 shrink-0 transform rotate-180" />
                      <p>{paper.abstract}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

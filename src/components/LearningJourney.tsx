import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { learningJourneyData } from '../data';
import { BookOpen, Calendar, Target, Search } from 'lucide-react';
import Section from './Section';
import Card from './Card';

export default function LearningJourney() {
  const [filter, setFilter] = useState<'All' | 'Active' | 'Completed' | 'Research' | 'Scaling'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = learningJourneyData.filter((item) => {
    const matchesFilter = filter === 'All' || item.status === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.currentFocus.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'text-accent-primary bg-accent-primary/10 border-accent-primary/20';
      case 'Advanced':
      case 'Completed':
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'Scaling':
        return 'text-accent-secondary bg-accent-secondary/10 border-accent-secondary/20';
      case 'Research':
        return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      default:
        return 'text-text-secondary bg-white/5 border-white/10';
    }
  };

  return (
    <Section
      id="learning"
      preTitle="Knowledge Acquisition"
      title="Current Learning Journey"
      description="Sleek tracker of systems architecture certifications, research projects, mathematical models, and quantitative standards currently being acquired or mastered."
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 -mt-6">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {(['All', 'Active', 'Completed', 'Research', 'Scaling'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                filter === tab
                  ? 'bg-white text-background-base font-semibold border border-white'
                  : 'bg-surface-base border border-border-subtle text-text-secondary hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Live Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
          <input
            type="text"
            placeholder="Search syllabus..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface-base border border-border-subtle rounded-xl py-2 pl-10 pr-4 text-xs text-white placeholder-text-secondary focus:border-accent-primary focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Learning Cards Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={item.id}
            >
              <Card className="hover:border-white/15 transition-all flex flex-col justify-between h-full p-5 group">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-4">
                    <h3 className="text-sm font-semibold text-white tracking-tight group-hover:text-accent-primary transition-colors">
                      {item.title}
                    </h3>
                    <span
                      className={`px-2 py-0.5 rounded text-[9px] font-mono border ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Progress bar info */}
                  <div className="mb-4">
                    <div className="flex justify-between text-[10px] font-mono text-text-secondary mb-1.5">
                      <span>Mastery Progress</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="w-full h-1 bg-surface-base rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className={`h-full rounded-full ${
                          item.status === 'Completed' ? 'bg-emerald-500' : 'bg-accent-primary'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Focus Area */}
                  <div className="bg-surface-base/50 rounded-lg p-3 border border-border-subtle/40 mb-4">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-text-secondary mb-1">
                      <Target className="w-3.5 h-3.5 text-accent-primary" />
                      <span>CURRENT FOCUS</span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed font-light">
                      {item.currentFocus}
                    </p>
                  </div>
                </div>

                {/* Completion date info */}
                <div className="flex items-center justify-between border-t border-border-subtle/30 pt-3 mt-2 text-[10px] font-mono text-text-secondary">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-accent-secondary" />
                    <span>COMPLETION:</span>
                  </div>
                  <span className="text-white">{item.estimatedCompletion}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 border border-dashed border-border-subtle rounded-2xl">
          <BookOpen className="w-8 h-8 text-text-secondary mx-auto mb-3" />
          <p className="text-sm text-text-secondary">No current modules found matching the criteria.</p>
        </div>
      )}
    </Section>
  );
}

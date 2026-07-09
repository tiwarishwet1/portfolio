import React, { useMemo } from 'react';
import { githubRepos } from '../data';
import { Github, Star, GitFork, BookOpen } from 'lucide-react';
import Section from './Section';
import Card from './Card';

export default function GithubSection() {
  const rows = 7;
  const cols = 42;
  const contributionGrid = useMemo(() => {
    return Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => {
        const rand = Math.random();
        if (rand < 0.4) return 0;
        if (rand < 0.7) return 1;
        if (rand < 0.9) return 2;
        return 3;
      })
    );
  }, [rows, cols]);

  const getIntensityColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-accent-primary/20 border-accent-primary/10';
      case 2:
        return 'bg-accent-primary/50 border-accent-primary/20';
      case 3:
        return 'bg-accent-primary border-white/20';
      default:
        return 'bg-surface-base border-border-subtle/40';
    }
  };

  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

  return (
    <Section
      id="github"
      preTitle="Continuous Integration"
      title="Open Source & Version Control"
      description="Continuous integration streams, algorithmic repositories, and modular libraries managed under transparent version control."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Contribution Calendar Visualizer */}
        <Card className="lg:col-span-7 flex flex-col justify-between p-6 h-full" hoverEffect={false}>
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-accent-primary" />
                <span className="text-xs font-mono text-white">CONTRIBUTIONS_GRID (365d)</span>
              </div>
              <span className="text-[10px] font-mono text-text-secondary">INDEXED_HOURLY</span>
            </div>

            {/* Grid Container */}
            <div className="overflow-x-auto pb-2 scrollbar-thin">
              <div className="min-w-[620px]">
                {/* Month headers */}
                <div className="flex pl-8 mb-1.5 text-[9px] font-mono text-text-secondary gap-9">
                  {monthLabels.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {/* Day labels column */}
                  <div className="flex flex-col justify-between py-1 text-[9px] font-mono text-text-secondary h-24 w-6 select-none">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                  </div>

                  {/* Calendar columns */}
                  <div className="flex gap-[3.5px]">
                    {Array.from({ length: cols }).map((_, cIdx) => (
                      <div key={cIdx} className="flex flex-col gap-[3.5px]">
                        {Array.from({ length: rows }).map((_, rIdx) => {
                          const intensity = contributionGrid[rIdx][cIdx];
                          return (
                            <div
                              key={rIdx}
                              className={`w-[11px] h-[11px] rounded-sm border transition-all ${getIntensityColor(
                                intensity
                              )} hover:scale-125 hover:border-white/45 duration-100 cursor-pointer`}
                              title={`Contribution intensity: ${intensity}`}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-border-subtle/30 pt-4 mt-6 text-[10px] font-mono text-text-secondary">
            <span className="text-emerald-400">● Live Synchronization Active</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="w-[11px] h-[11px] rounded-sm bg-surface-base border border-border-subtle/40" />
              <div className="w-[11px] h-[11px] rounded-sm bg-accent-primary/20 border border-accent-primary/10" />
              <div className="w-[11px] h-[11px] rounded-sm bg-accent-primary/50 border border-accent-primary/20" />
              <div className="w-[11px] h-[11px] rounded-sm bg-accent-primary border border-white/20" />
              <span>More</span>
            </div>
          </div>
        </Card>

        {/* Right Side: Pinned Repositories List */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest pl-1">
            Pinned Repositories
          </span>

          {githubRepos.map((repo) => (
            <a
              key={repo.id}
              href={repo.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="hover:border-white/12 transition-all p-4 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-text-secondary" />
                      <h3 className="text-xs font-semibold text-white tracking-tight group-hover:text-accent-primary transition-colors">
                        {repo.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[11.5px] text-text-secondary font-light leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-4 text-[10px] font-mono text-text-secondary">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-accent-primary" />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-text-secondary group-hover:text-amber-400 transition-colors" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-text-secondary" />
                    {repo.forks}
                  </span>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

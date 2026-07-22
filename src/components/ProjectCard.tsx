import React from 'react';
import { LucideIcon, Cpu, Github, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../data/types';
import Button from './Button';

interface ProjectCardProps {
  project: ProjectItem;
  isEven?: boolean;
  icon?: LucideIcon;
}

export default function ProjectCard({ project, isEven = true, icon: Icon = Cpu }: ProjectCardProps) {
  return (
    <div className="bg-card-base border border-border-subtle rounded-2xl p-6 md:p-10 hover:border-white/12 transition-all group">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Text Block */}
        <div
          className={`lg:col-span-7 flex flex-col justify-between h-full order-2 ${
            isEven ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div>
            <span className="text-[10px] font-mono tracking-widest text-accent-primary uppercase font-bold">
              {project.category}
            </span>
            <h3 className="text-xl md:text-2xl font-serif font-normal text-white tracking-tight mt-1 mb-4 group-hover:text-accent-primary transition-colors">
              {project.title}
            </h3>

            {/* Problem / Solution / Impact stack */}
            <div className="space-y-4 text-xs md:text-sm">
              <div>
                <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest block mb-1">
                  The Problem
                </span>
                <p className="text-text-secondary font-light leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest block mb-1">
                  The Solution
                </span>
                <p className="text-text-secondary font-light leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest block mb-1">
                  The Impact
                </span>
                <p className="text-white font-medium leading-relaxed">{project.impact}</p>
              </div>
            </div>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 mt-6 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-surface-base border border-border-subtle text-[10px] font-mono text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-3">
            {project.githubUrl && (
              <Button
                as="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                className="hover:border-white/20"
              >
                <Github className="w-3.5 h-3.5 text-text-secondary" />
                View Repository
                <ArrowUpRight className="w-3 h-3 text-text-secondary" />
              </Button>
            )}
            {project.researchUrl && (
              <Button
                as="a"
                href={project.researchUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                className="hover:border-white/20"
              >
                View Report / Certificate
                <ArrowUpRight className="w-3 h-3 text-text-secondary" />
              </Button>
            )}
          </div>
        </div>

        {/* Visual Badge/Illustration Block */}
        <div
          className={`lg:col-span-5 flex justify-center order-1 ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div className="relative w-full aspect-square max-w-[260px] md:max-w-[300px] flex items-center justify-center bg-surface-base border border-border-subtle rounded-2xl group-hover:border-white/12 transition-all duration-300">
            {/* Minimal grid lines background */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id={`grid-${project.id}`}
                    width="12"
                    height="12"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M 12 0 L 0 0 0 12" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
              </svg>
            </div>

            {/* Glowing orb accent */}
            <div className="absolute w-36 h-36 rounded-full bg-accent-primary/5 blur-[50px] group-hover:bg-accent-primary/10 transition-all duration-500" />

            <div className="relative flex flex-col items-center text-center p-6 space-y-3 z-10">
              <div className="p-4 rounded-2xl bg-card-base border border-border-subtle text-accent-primary group-hover:text-white group-hover:border-accent-primary/30 transition-all duration-500 group-hover:scale-105 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                <Icon className="w-10 h-10 stroke-[1.2]" />
              </div>
              <div>
                <span className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest">
                  MODULE_ID
                </span>
                <span className="text-xs font-mono text-white bg-white/5 border border-white/5 px-2 py-0.5 rounded mt-1 inline-block">
                  {project.id.toUpperCase().replace(/-/g, '_')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

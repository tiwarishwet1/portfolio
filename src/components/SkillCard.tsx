import React from 'react';
import { LucideIcon, Code } from 'lucide-react';
import Card from './Card';

interface SkillCardProps {
  categoryName: string;
  skills: string[];
  icon?: LucideIcon;
}

export default function SkillCard({ categoryName, skills, icon: Icon = Code }: SkillCardProps) {
  return (
    <Card className="flex flex-col justify-between hover:border-white/12 transition-all p-5 h-full">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 rounded-lg bg-surface-base border border-border-subtle text-accent-primary">
            <Icon className="w-4 h-4" />
          </div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
            {categoryName}
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 rounded-lg bg-surface-base border border-border-subtle/60 text-[10.5px] text-text-secondary hover:text-white hover:border-white/20 transition-all duration-150 font-sans cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}

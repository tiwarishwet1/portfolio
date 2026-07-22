import React from 'react';
import { Code2, Cpu, Wrench, ShieldCheck } from 'lucide-react';
import Card from './Card';

export default function About() {
  const stats = [
    { label: 'SAHAI ML Accuracy', value: '98.46%', detail: 'Multimodal Fusion Model' },
    { label: 'API Latency Reduc.', value: '-94%', detail: 'FastAPI microservices' },
    { label: 'Database Optimization', value: '-98%', detail: 'MS SQL Server queries' },
    { label: 'AI Validation Pipeline', value: '-92%', detail: 'Regression reduction' },
  ];

  return (
    <section id="about" className="py-24 border-t border-border-subtle max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Headline and Bio */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-accent-primary uppercase font-semibold">
              Professional Brief
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight mt-2">
              About Shwet Tiwari
            </h2>
          </div>

          <div className="space-y-4 text-sm md:text-base text-text-secondary font-light leading-relaxed">
            <p>
              I am an <strong className="text-white font-medium">AI & Backend Engineer</strong> dedicated to building robust system architectures, highly concurrent backend APIs, and predictive machine learning models. My approach combines rigorous software engineering principles with data-driven AI systems to deliver stable, high-throughput software systems.
            </p>
            <p>
              My professional focus is divided between constructing scalable backend frameworks (primarily using{' '}
              <span className="text-white font-mono text-xs bg-surface-base px-1.5 py-0.5 rounded border border-border-subtle">
                FastAPI
              </span>{' '}
              and{' '}
              <span className="text-white font-mono text-xs bg-surface-base px-1.5 py-0.5 rounded border border-border-subtle">
                ASP.NET / C#
              </span>
              ), provisioning clean containerized infrastructure via{' '}
              <span className="text-white font-mono text-xs bg-surface-base px-1.5 py-0.5 rounded border border-border-subtle">
                Docker & AWS
              </span>
              , and deploying machine learning pipelines (such as cross-modal transformers and sequence models) into production.
            </p>
            <p>
              Whether orchestrating LLMs to build agentic pipelines, optimizing MS SQL stored procedures for sub-millisecond querying, or configuring CI/CD container workflows, I aim for absolute execution clarity, clean modular codebases, and high performance.
            </p>
          </div>

          {/* Mini Specializations */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <Card className="p-4" hoverEffect={true}>
              <Code2 className="w-5 h-5 text-accent-primary mb-2" />
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                Backend Dev
              </h4>
              <p className="text-[11px] text-text-secondary leading-normal">
                Asynchronous event loops, connection pooling, and multi-threaded WebSockets.
              </p>
            </Card>

            <Card className="p-4" hoverEffect={true}>
              <Cpu className="w-5 h-5 text-accent-secondary mb-2" />
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                AI Engineer
              </h4>
              <p className="text-[11px] text-text-secondary leading-normal">
                Multimodal classification neural networks, LSTM time-series, and computer vision.
              </p>
            </Card>

            <Card className="p-4" hoverEffect={true}>
              <Wrench className="w-5 h-5 text-amber-400 mb-2" />
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                Systems & MLOps
              </h4>
              <p className="text-[11px] text-text-secondary leading-normal">
                CI/CD workflows, Docker containerization, cloud systems admin, and script automation.
              </p>
            </Card>
          </div>
        </div>

        {/* Right Column: Key Stats and Metrics Grid */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6 relative overflow-hidden" hoverEffect={false}>
            {/* Visual background lines */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="about-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d="M 16 0 L 0 0 0 16" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#about-grid)" />
              </svg>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono text-white tracking-wider uppercase">
                ENGINEERING_METRICS_LOG
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-surface-base/60 border border-border-subtle/80 rounded-xl p-4 flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono text-text-secondary uppercase">
                    {stat.label}
                  </span>
                  <div className="mt-2">
                    <span className="text-2xl font-serif font-normal text-white">{stat.value}</span>
                    <span className="block text-[9px] font-mono text-text-secondary mt-0.5">
                      {stat.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border-subtle/30 flex items-center justify-between text-[10px] font-mono text-text-secondary">
              <span>IBM SKILLSBUILD PROGRAM</span>
              <span className="text-emerald-400">STATUS: OPTIMIZED</span>
            </div>
          </Card>

          {/* Quick Summary Card */}
          <div className="border border-dashed border-border-subtle rounded-2xl p-5 bg-background-base/50">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2">
              Philosophical Stance
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed font-light">
              "Simple architectures scale. Complicated designs fail. Prioritize type safety, direct system APIs, optimized memory lookups, and clear database indexing over unnecessary abstraction layers."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

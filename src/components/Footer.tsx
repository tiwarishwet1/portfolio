import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Send, ArrowUp } from 'lucide-react';
import Button from './Button';
import Card from './Card';

// Custom simple inline icons for Hugging Face and Kaggle to avoid package issues
function BrainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M12 6v12" />
      <path d="M8 10h8" />
      <path d="M8 14h8" />
    </svg>
  );
}

function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/tiwarishwet1', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/tiwarishwet1', icon: Linkedin },
  { name: 'Docker Hub', href: 'https://hub.docker.com', icon: Github }, // Fallback to Github icon or direct text
  { name: 'Hugging Face', href: 'https://huggingface.co', icon: BrainIcon },
  { name: 'Kaggle', href: 'https://kaggle.com', icon: DatabaseIcon },
];

export default function Footer() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="border-t border-border-subtle bg-surface-base pt-24 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Left Column: Contact Form */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-widest text-accent-primary uppercase font-semibold">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight mt-2 mb-6">
                Let's discuss systems & AI/ML pipelines.
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-text-secondary uppercase mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Alan Turing"
                      className="w-full bg-background-base border border-border-subtle rounded-xl py-2.5 px-4 text-xs text-white focus:border-accent-primary focus:outline-none transition-all placeholder-text-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-text-secondary uppercase mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="turing@princeton.edu"
                      className="w-full bg-background-base border border-border-subtle rounded-xl py-2.5 px-4 text-xs text-white focus:border-accent-primary focus:outline-none transition-all placeholder-text-secondary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-text-secondary uppercase mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your architecture bottlenecks or AI/ML research requirements..."
                    className="w-full bg-background-base border border-border-subtle rounded-xl py-2.5 px-4 text-xs text-white focus:border-accent-primary focus:outline-none transition-all placeholder-text-secondary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <span>Transmitting...</span>
                  ) : submitted ? (
                    <span>Transmission Successful ✓</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column: Platform Links */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-widest text-accent-primary uppercase font-semibold">
                NETWORKS
              </span>
              <h3 className="text-sm font-semibold text-white tracking-tight mt-2 mb-6">
                Professional Indexing Directories
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <Card className="flex items-center gap-2 p-3 text-text-secondary group-hover:text-white transition-all text-xs border-border-subtle hover:border-white/12 h-full">
                        <Icon className="w-4 h-4 text-accent-secondary animate-pulse" />
                        <span>{link.name}</span>
                      </Card>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Email card */}
            <div className="mt-8 p-4 rounded-xl border border-dashed border-border-subtle/80 bg-background-base/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-primary" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-text-secondary uppercase">
                    DIRECT DISPATCH
                  </span>
                  <a
                    href="mailto:tiwarishwet30@gmail.com"
                    className="text-xs text-white hover:text-accent-primary transition-colors font-medium"
                  >
                    tiwarishwet30@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-card-base border border-border-subtle hover:text-accent-primary text-text-secondary transition-colors"
                title="Scroll To Top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom footer bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-border-subtle/50 pt-8 mt-12 text-[11px] font-mono text-text-secondary gap-4">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="text-white font-serif text-xs font-semibold">Shwet Tiwari</span>
            <span>© 2026. Engineered with absolute mathematical precision.</span>
          </div>
          <div className="flex items-center gap-6">
            <span>SECURE SHELL (v2.0)</span>
            <span>PING: 14ms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

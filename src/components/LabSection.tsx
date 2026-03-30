import { Experiment } from "../types";
import { Code, Lightbulb, Terminal, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export function LabSection({ topic }: { topic: { title: string; experiments: Experiment[] } }) {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-serif italic text-neutral-900">{topic.title}</h2>
        <div className="h-px flex-1 bg-neutral-200" />
      </div>
      
      <div className="grid gap-6">
        {topic.experiments.map((exp) => (
          <ExperimentCard key={exp.id} experiment={exp} />
        ))}
      </div>
    </section>
  );
}

function ExperimentCard({ experiment }: { experiment: Experiment }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group border border-neutral-200 rounded-2xl bg-white hover:border-neutral-400 transition-all overflow-hidden shadow-sm hover:shadow-md">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-6 flex items-start justify-between gap-4"
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Exp {experiment.id}</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${experiment.type === 'mysql' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'}`}>
              {experiment.type}
            </span>
          </div>
          <h3 className="text-xl font-medium text-neutral-900 group-hover:text-black transition-colors">{experiment.title}</h3>
          <p className="text-sm text-neutral-500 line-clamp-1">{experiment.aim}</p>
        </div>
        <div className={`p-2 rounded-full bg-neutral-50 text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white transition-all ${isExpanded ? 'rotate-180' : ''}`}>
          <ChevronDown size={20} />
        </div>
      </button>

      {isExpanded && (
        <div className="px-6 pb-8 space-y-8 animate-in fade-in slide-in-from-top-2 duration-300">
          {/* Code Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              <Code size={14} />
              <span>Implementation</span>
            </div>
            <div className="relative">
              <pre className="p-4 bg-neutral-900 text-neutral-100 rounded-xl overflow-x-auto font-mono text-sm leading-relaxed">
                <code>{experiment.content}</code>
              </pre>
            </div>
          </div>

          {/* Breakdown & Analogy */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                <Terminal size={14} />
                <span>Breakdown</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">{experiment.explanation}</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider text-amber-600">
                <Lightbulb size={14} />
                <span>Analogy</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed italic">"{experiment.analogy}"</p>
            </div>
          </div>

          {/* Commands Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              <ChevronRight size={14} />
              <span>Command Overview</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {experiment.commands.map((cmd, i) => (
                <div key={i} className="p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                  <div className="font-mono text-xs font-bold text-neutral-900 mb-1">{cmd.name}</div>
                  <div className="text-[11px] text-neutral-500 leading-tight">{cmd.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

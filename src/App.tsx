import { BookOpen, Database, GraduationCap, Github, ExternalLink } from "lucide-react";
import { AIAssistant } from "./components/AIAssistant";
import { LabSection } from "./components/LabSection";
import { LAB_DATA } from "./constants";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-neutral-900 font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#F5F5F0]/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white">
              <Database size={18} />
            </div>
            <span className="font-bold tracking-tight text-lg">ADBMS Hub</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
            <a href="#mysql" className="hover:text-black transition-colors">MySQL</a>
            <a href="#mongodb" className="hover:text-black transition-colors">MongoDB</a>
            <a href="#resources" className="hover:text-black transition-colors">Resources</a>
          </div>
          <button className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:scale-105 transition-transform active:scale-95">
            Start Learning
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-[10px] font-bold uppercase tracking-widest text-neutral-600">
              <GraduationCap size={12} />
              <span>20MCA134 • Advanced DBMS Lab</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif italic leading-[0.9] tracking-tighter text-neutral-900">
              Master the <br />
              <span className="not-italic font-sans font-black uppercase">Database</span>
            </h1>
            <p className="text-xl text-neutral-500 max-w-xl leading-relaxed">
              A world-class study companion for your ADBMS lab exams. 
              Interactive breakdowns, AI-powered assistance, and simplified analogies for MySQL and MongoDB.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-neutral-200 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm font-medium">MySQL Ready</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-neutral-200 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium">MongoDB Ready</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 border-[40px] border-black rounded-full" />
          <div className="absolute bottom-10 right-40 w-64 h-64 border-[1px] border-dashed border-black rounded-full animate-spin-slow" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pb-32 space-y-24">
        {/* MySQL Section */}
        <div id="mysql">
          <LabSection topic={LAB_DATA[0]} />
        </div>

        {/* MongoDB Section */}
        <div id="mongodb">
          <LabSection topic={LAB_DATA[1]} />
        </div>

        {/* Quick Tips / Analogy Section */}
        <section id="resources" className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 p-12 bg-neutral-900 rounded-[40px] text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif italic">Why analogies matter?</h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Databases can feel abstract. By comparing complex SQL joins to social gatherings or MongoDB collections to flexible folders, we bridge the gap between code and logic.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <BookOpen size={20} />
                </div>
                <h4 className="font-bold">Structured Logic</h4>
                <p className="text-xs text-neutral-500">MySQL is your rigid blueprint. Perfect for complex relationships and financial data.</p>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <Database size={20} />
                </div>
                <h4 className="font-bold">Flexible Growth</h4>
                <p className="text-xs text-neutral-500">MongoDB is your evolving folder. Ideal for rapid scaling and diverse data types.</p>
              </div>
            </div>
          </div>

          <div className="p-12 bg-white rounded-[40px] border border-neutral-200 space-y-8">
            <h3 className="text-2xl font-bold tracking-tight">Exam Checklist</h3>
            <ul className="space-y-4">
              {[
                "Understand ACID properties",
                "Master Aggregate functions",
                "Practice Nested Queries",
                "Explain Triggers vs Procedures",
                "MongoDB Aggregation Pipeline"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-neutral-600">
                  <div className="w-5 h-5 rounded-full border border-neutral-300 flex items-center justify-center text-[10px] font-bold">
                    {i + 1}
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <button className="w-full py-4 bg-neutral-100 rounded-2xl text-sm font-bold hover:bg-neutral-200 transition-colors">
                Download PDF Record
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="font-bold text-lg">ADBMS Lab Study Hub</div>
            <p className="text-xs text-neutral-400">Designed for MCA Students • College of Engineering Vatakara</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="p-2 text-neutral-400 hover:text-black transition-colors"><Github size={20} /></a>
            <a href="#" className="p-2 text-neutral-400 hover:text-black transition-colors"><ExternalLink size={20} /></a>
          </div>
          <div className="text-[10px] uppercase tracking-widest font-bold text-neutral-300">
            © 2026 Study Hub
          </div>
        </div>
      </footer>

      {/* AI Assistant FAB */}
      <AIAssistant />
    </div>
  );
}

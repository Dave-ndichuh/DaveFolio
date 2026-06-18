import { Code2, Cpu, Network } from "lucide-react";

const ventures = [
  {
    name: "BomaLink OS",
    description: "An offline-first, marine-grade operating system designed for managing smart, sustainable off-grid ecosystems in Africa.",
    tags: ["IoT", "Edge Computing", "Sustainability"],
    status: "Active"
  },
  {
    name: "Active Shifts",
    description: "A modern, full-stack workforce management platform streamlining complex operations for the US staffing agency market.",
    tags: ["SaaS", "Workforce", "Full-Stack"],
    status: "Scaling"
  },
  {
    name: "UniPost",
    description: "A sophisticated social media management platform powered by multi-agent swarms to automate content creation and distribution.",
    tags: ["AI Swarms", "Social Media", "Automation"],
    status: "Beta"
  },
  {
    name: "BriteSpot",
    description: "Specialized billing and hotspot management software engineered specifically for Internet Service Providers.",
    tags: ["ISP", "FinTech", "Networking"],
    status: "Active"
  }
];

export default function NexusPage() {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative px-6 py-24 text-center sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900"></div>
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
            Engineering Agentic Systems & <span className="text-cyan-400">Smart Infrastructure.</span>
          </h1>
          <p className="text-lg leading-8 text-slate-300 mb-10 max-w-2xl mx-auto">
            The central intelligence hub for Nexus Group. We build, scale, and manage ventures spanning AI automation, off-grid technology, and enterprise workforce solutions.
          </p>
          <a
            href="mailto:contact@nexusgroup.com"
            className="inline-block rounded-full bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-cyan-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            Initiate a Project
          </a>
        </div>
      </section>

      {/* Ventures Directory */}
      <section id="ventures" className="px-6 py-16 sm:py-24 mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ventures Directory</h2>
          <p className="mt-4 text-lg text-slate-400">A portfolio of our active and scaling technology products.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ventures.map((venture) => (
            <div key={venture.name} className="flex flex-col rounded-2xl bg-slate-800 p-8 border border-slate-700 hover:bg-slate-800/80 transition-colors shadow-lg shadow-slate-900/20">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{venture.name}</h3>
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  venture.status === 'Active' ? 'bg-green-400/10 text-green-400 border border-green-400/20' :
                  venture.status === 'Scaling' ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20' :
                  'bg-amber-400/10 text-amber-400 border border-amber-400/20'
                }`}>
                  {venture.status}
                </span>
              </div>
              <p className="text-slate-300 mb-6 flex-grow">{venture.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {venture.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-md bg-slate-700/50 px-2 py-1 text-xs font-medium text-slate-300 ring-1 ring-inset ring-slate-600/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="solutions" className="px-6 py-16 mx-auto max-w-6xl border-t border-slate-800/50">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Core Capabilities</h2>
          <p className="mt-4 text-lg text-slate-400">The foundational engineering solutions driving our ventures.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-slate-800/50 p-6 border border-slate-700/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 mb-6">
              <Network className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">System Architecture</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building resilient, scalable full-stack SaaS platforms and internal operational tools designed for high availability.
            </p>
          </div>
          <div className="rounded-xl bg-slate-800/50 p-6 border border-slate-700/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 mb-6">
              <Cpu className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Agentic AI Development</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Designing autonomous multi-agent swarms and integrating LLMs into existing business workflows to eliminate manual bottlenecks.
            </p>
          </div>
          <div className="rounded-xl bg-slate-800/50 p-6 border border-slate-700/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 mb-6">
              <Code2 className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Smart Infrastructure</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Engineering localized, offline-first systems and hardware integrations for remote and off-grid environments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

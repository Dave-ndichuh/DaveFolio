import "./nexus-globals.css";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import NexusAssistantWidget from "@/components/NexusAssistantWidget";

export const metadata = {
  title: "Nexus Group | Enterprise Hub",
};

export default function NexusLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-cyan-500/30">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/nexus" className="text-xl font-bold tracking-tighter text-cyan-400">
            Nexus Group
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="#ventures" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Ventures
            </Link>
            <Link href="#solutions" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Solutions
            </Link>
            <Link 
              href="/" 
              className="group flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-500 hover:bg-slate-800/50"
            >
              <ArrowLeft size={16} className="text-slate-400 transition-transform group-hover:-translate-x-1" />
              Return to Portfolio
            </Link>
          </nav>
        </div>
      </header>
      <main className="relative">
        {children}
        <NexusAssistantWidget />
      </main>
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Nexus Group. Building resilient digital infrastructure.</p>
      </footer>
    </div>
  );
}

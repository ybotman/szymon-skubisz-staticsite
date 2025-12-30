import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Built By | HDTS LLC",
  description: "This website was designed and developed by HDTS LLC, Toby Balsley, and YbotMan. Professional web development services.",
  robots: "index, follow",
};

export default function BuiltBy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16">
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Built By</h1>
        <p className="text-xl text-slate-300 mb-12">
          This website was designed and developed for Szymon Skubisz by:
        </p>

        <div className="space-y-6">
          {/* HDTS LLC */}
          <a
            href="https://htdsllc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-all group"
          >
            <h2 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
              HDTS LLC
            </h2>
            <p className="text-slate-300 mb-3">
              Technology consulting and software development services. Specializing in modern web applications,
              AI integration, and custom software solutions.
            </p>
            <p className="text-blue-400">htdsllc.com &rarr;</p>
          </a>

          {/* Toby Balsley */}
          <a
            href="https://tobybalsley.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-all group"
          >
            <h2 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
              Toby Balsley
            </h2>
            <p className="text-slate-300 mb-3">
              Full-stack developer and technology consultant with expertise in React, Next.js,
              and cloud architecture.
            </p>
            <p className="text-blue-400">tobybalsley.com &rarr;</p>
          </a>

          {/* YbotMan */}
          <a
            href="https://ybotman.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-all group"
          >
            <h2 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
              YbotMan
            </h2>
            <p className="text-slate-300 mb-3">
              AI-powered development workflows and automation. Building the future of software engineering
              with intelligent agents.
            </p>
            <p className="text-blue-400">ybotman.com &rarr;</p>
          </a>
        </div>

        <div className="mt-12 p-6 bg-slate-800/30 rounded-xl border border-slate-700 text-center">
          <p className="text-slate-400 mb-4">
            Need a professional website for your career or business?
          </p>
          <p className="text-white">
            Contact us at <a href="mailto:contact@htdsllc.com" className="text-blue-400 hover:underline">contact@htdsllc.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}

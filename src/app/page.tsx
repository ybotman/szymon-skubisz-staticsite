export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Szymon Skubisz
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Design Engineer
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Transforming ideas into innovative products through engineering excellence and creative design.
          </p>
        </section>

        {/* Quick Links */}
        <section className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href="/portfolio"
            className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-all"
          >
            <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400">
              Portfolio
            </h2>
            <p className="text-slate-400">
              View my engineering projects and design work.
            </p>
          </a>

          <a
            href="/resume"
            className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-all"
          >
            <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400">
              Resume
            </h2>
            <p className="text-slate-400">
              Professional experience and qualifications.
            </p>
          </a>

          <a
            href="/contact"
            className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-all"
          >
            <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400">
              Contact
            </h2>
            <p className="text-slate-400">
              Get in touch for opportunities.
            </p>
          </a>
        </section>
      </div>
    </main>
  );
}

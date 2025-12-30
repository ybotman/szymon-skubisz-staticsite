import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Szymon Skubisz - Design Engineer",
  description: "Get in touch with Szymon Skubisz for engineering opportunities, collaborations, or inquiries.",
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16">
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
        <p className="text-xl text-slate-300 mb-12">
          Interested in discussing engineering opportunities or collaborations? I'd love to hear from you.
        </p>

        <div className="space-y-6">
          {/* Email */}
          <a
            href="mailto:szymon.skubisz@gmail.com"
            className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-all group"
          >
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Email</p>
              <p className="text-white group-hover:text-blue-400 transition-colors">szymon.skubisz@gmail.com</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:860-837-3150"
            className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-all group"
          >
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Phone</p>
              <p className="text-white group-hover:text-blue-400 transition-colors">860-837-3150</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/szy-skubisz-s6159"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-all group"
          >
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div>
              <p className="text-slate-400 text-sm">LinkedIn</p>
              <p className="text-white group-hover:text-blue-400 transition-colors">linkedin.com/in/szy-skubisz-s6159</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
            <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Location</p>
              <p className="text-white">Connecticut / Massachusetts Area</p>
            </div>
          </div>
        </div>

        {/* Downloads Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Downloads</h2>
          <div className="space-y-4">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-all group"
            >
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <div>
                <p className="text-white group-hover:text-blue-400 transition-colors font-medium">Resume (PDF)</p>
                <p className="text-slate-400 text-sm">Full professional resume</p>
              </div>
            </a>

            <a
              href="/portfolio.pdf"
              download
              className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-all group"
            >
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <div>
                <p className="text-white group-hover:text-blue-400 transition-colors font-medium">Engineering Portfolio (PDF)</p>
                <p className="text-slate-400 text-sm">Detailed project portfolio - NDA Safe</p>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-12 p-6 bg-slate-800/30 rounded-xl border border-slate-700">
          <p className="text-slate-400 text-center">
            <span className="text-white font-medium">U.S. Citizen</span> • Available for full-time opportunities in aerospace, precision instrumentation, and manufacturing engineering.
          </p>
        </div>
      </div>
    </main>
  );
}

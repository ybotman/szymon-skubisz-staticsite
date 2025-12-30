import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Szymon Skubisz - Design Engineer",
  description: "Engineering portfolio showcasing aerospace, precision instrumentation, and manufacturing projects by Szymon Skubisz.",
};

const projects = [
  {
    title: "Spacecraft Thermal Management Subsystem",
    company: "Collins Aerospace",
    description: "Designed and qualified a spacecraft thermal management subsystem ensuring structural integrity under launch and orbital vibration profiles. Collaborated with design engineering to refine heat exchangers, pumps, valves, and sublimators.",
    highlights: [
      "Led critical failure investigation of spacecraft cooling systems",
      "Determined contamination root cause and provided design modifications",
      "Developed CAD models and engineering drawings for production release",
    ],
    tags: ["Aerospace", "Thermal Systems", "CAD", "Failure Analysis"],
  },
  {
    title: "Precision Vibration Isolation Platforms",
    company: "TMC - AMETEK",
    description: "Developed precision vibration isolation platforms for analytical instrumentation operating in extreme environments. Optimized epoxy bonding processes and improved consistency for nanometer-level isolation.",
    highlights: [
      "10% reduction in epoxy usage through process optimization",
      "40% fewer defects with improved manufacturing consistency",
      "Eliminated 4 hours of labor per part on sheet-metal components",
    ],
    tags: ["Precision Instrumentation", "DFMA", "Process Optimization", "Lean"],
  },
  {
    title: "Aerospace Airdrop Systems",
    company: "Capewell Aerial Systems",
    description: "Led design and prototyping of aerospace airdrop systems including strut support systems, pressure valves, and timed-release mechanisms meeting stringent reliability and manufacturability requirements.",
    highlights: [
      "Created 3D models, assemblies, and functional prototypes",
      "Drove iterative design reviews with cross-functional teams",
      "Delivered designs meeting stringent aerospace standards",
    ],
    tags: ["Aerospace", "Prototyping", "Mechanical Design", "AS9100"],
  },
  {
    title: "Aircraft Engine Sensors",
    company: "Harcosemco",
    description: "Designed and developed aircraft engine sensors including Oil Temperature RTD Sensors and Air Flow Sensors, performing calculations, 3D modeling, and tolerance analysis.",
    highlights: [
      "Supervised off-site product testing",
      "Integrated test results into design improvements",
      "Aligned product design with manufacturing capabilities",
    ],
    tags: ["Sensors", "Aircraft", "Tolerance Analysis", "Testing"],
  },
  {
    title: "Gamma Detector Manufacturing",
    company: "Mirion Technologies",
    description: "Designed and optimized seal plate manufacturing process for gamma detectors, significantly improving production efficiency and quality.",
    highlights: [
      "50% improvement in throughput",
      "80% reduction in defects",
      "Authored updated assembly drawings and documentation",
    ],
    tags: ["Instrumentation", "Process Design", "Quality", "Documentation"],
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Portfolio</h1>
        <p className="text-xl text-slate-300 mb-12 max-w-3xl">
          Selected engineering projects spanning aerospace, precision instrumentation, and manufacturing optimization.
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article key={index} className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                  <p className="text-blue-400">{project.company}</p>
                </div>
              </div>

              <p className="text-slate-300 mb-4">{project.description}</p>

              <ul className="list-disc list-inside text-slate-400 mb-4 space-y-1">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

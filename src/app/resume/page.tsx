import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Szymon Skubisz - Design Engineer",
  description: "Professional resume of Szymon Skubisz, Mechanical Engineer with 13+ years experience in aerospace and precision instrumentation.",
};

const experience = [
  {
    company: "TMC - AMETEK",
    title: "Manufacturing Engineer",
    location: "Peabody, MA",
    period: "May 2025 – Present",
    bullets: [
      "Lead process development and product design improvements for precision vibration isolation and analytical instrumentation, applying DFMA and Lean principles",
      "Partner with design and operations teams to optimize component geometry and material selection",
      "Document and refine manufacturing processes, resulting in 10% reduction in epoxy usage and 40% fewer defects",
      "Develop standardized work instructions for 50+ processes ensuring ISO 9001 compliance",
      "Redefined large sheet-metal component design to eliminate 4 hours of labor per part",
    ],
  },
  {
    company: "Collins Aerospace",
    title: "Manufacturing Engineer – Space Systems",
    location: "Windsor Locks, CT",
    period: "June 2022 – May 2025",
    bullets: [
      "Collaborated with design engineering to refine spacecraft thermal management hardware",
      "Led critical failure investigation of spacecraft cooling systems; determined contamination root cause",
      "Developed and updated CAD models and engineering drawings for production release",
      "Authored detailed documentation in SAP and supported configuration management",
    ],
  },
  {
    company: "Colt's Manufacturing Company",
    title: "Manufacturing Engineer",
    location: "West Hartford, CT",
    period: "Sept 2021 – Feb 2022",
    bullets: [
      "Supported design-for-assembly improvements across rifle production lines",
      "Reduced assembly time by 15% through tooling and process redesign",
    ],
  },
  {
    company: "Mirion Technologies (Canberra)",
    title: "Detector Engineer",
    location: "Meriden, CT",
    period: "Feb 2021 – Sept 2021",
    bullets: [
      "Designed and optimized seal plate manufacturing process for gamma detectors",
      "Improved throughput by 50% and reduced defects by 80%",
    ],
  },
  {
    company: "Harcosemco, LLC",
    title: "Mechanical Design Engineer",
    location: "Branford, CT",
    period: "2020 – 2021 (Contract)",
    bullets: [
      "Designed aircraft engine sensors (Oil Temperature RTD, Air Flow Sensor)",
      "Performed calculations, 3D modeling, and tolerance analysis",
    ],
  },
  {
    company: "Capewell Aerial Systems",
    title: "Mechanical Design Engineer",
    location: "South Windsor, CT",
    period: "Nov 2018 – Oct 2019 (Contract)",
    bullets: [
      "Led design and prototyping of aerospace airdrop systems",
      "Created 3D models, assemblies, and prototypes for strut support systems and pressure valves",
    ],
  },
];

const skills = {
  software: [
    "Autodesk Inventor", "Siemens NX", "SolidWorks", "AutoCAD", "Creo",
    "SAP", "Epicor", "Teamcenter", "Windchill PDM",
    "ANSYS", "SolidWorks FEA", "Ultimaker Cura",
  ],
  technical: [
    "3D Modeling & Assembly Design", "DFMA", "GD&T (ASME Y14.5)",
    "Finite Element Analysis", "Tolerance Stack-Up", "Root Cause Analysis",
    "Lean Manufacturing", "ISO 9001", "AS9100", "Additive Manufacturing",
  ],
};

const education = [
  {
    school: "Central Connecticut State University",
    location: "New Britain, CT",
    degree: "Bachelor of Science in Mechanical Engineering",
    minor: "Minor in Mathematics",
    year: "May 2017",
  },
  {
    school: "Clark University",
    location: "Worcester, MA",
    degree: "Bachelor of Arts in English",
    minor: "Minor in Spanish",
    year: "May 2009",
  },
];

export default function Resume() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Szymon Skubisz</h1>
          <p className="text-xl text-blue-400 mb-4">Design Engineer | U.S. Citizen</p>
          <p className="text-slate-300 max-w-3xl">
            Creative and detail-oriented Mechanical Engineer with 13+ years of experience spanning design,
            analysis, and manufacturing of aerospace and precision instrumentation components. Expert in
            CAD modeling, DFMA, and cross-functional collaboration from concept to production.
          </p>
        </header>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Work Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index}>
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                    <p className="text-blue-400">{job.company}</p>
                  </div>
                  <div className="text-right text-slate-400">
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Software</h3>
              <div className="flex flex-wrap gap-2">
                {skills.software.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Technical</h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                  <p className="text-blue-400">{edu.school}, {edu.location}</p>
                  <p className="text-slate-400">{edu.minor}</p>
                </div>
                <p className="text-slate-400">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Certifications & Awards</h2>
          <ul className="text-slate-300 space-y-2">
            <li>GeoTol GD&T Fundamentals Certification</li>
            <li>Six Raytheon Excellence Awards for exceeding customer expectations</li>
            <li>Foreign Object Damage Prevention • Environmental Health & Safety • Global Trade Fundamentals</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

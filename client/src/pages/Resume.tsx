import { motion } from "framer-motion";
import { ArrowLeft, Printer, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Link } from "wouter";

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-8 px-4 sm:px-6 lg:px-8 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Top Navigation Bar - Hidden on print */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
        <Link href="/">
          <a className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </a>
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
          >
            <Printer className="w-4 h-4" /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-2xl print:shadow-none print:p-0 print:m-0 print:max-w-none print:w-full print:rounded-none"
        id="resume-content"
      >
        {/* Header */}
        <header className="border-b-2 border-slate-200 pb-6 mb-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/profile.jpg"
                alt="MANJU D"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-[center_15%] border-2 border-cyan-500 shadow-md"
              />
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 uppercase">MANJU D</h1>
                <p className="text-lg sm:text-xl font-semibold text-cyan-700 mt-0.5">Software Engineering Aspirant</p>
              </div>
            </div>
            <div className="text-xs text-slate-500 font-medium sm:text-right mt-2 sm:mt-0">
              <p>DOB: 2005-06-13</p>
              <p>Nationality: Indian</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-6 text-sm text-slate-600 font-medium">
            <a href="mailto:Manju539550560@gmail.com" className="flex items-center gap-1.5 hover:text-cyan-600">
              <Mail className="w-4 h-4 text-cyan-600" /> Manju539550560@gmail.com
            </a>
            <a href="tel:+919741308634" className="flex items-center gap-1.5 hover:text-cyan-600">
              <Phone className="w-4 h-4 text-cyan-600" /> +91 9741308634
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-600" /> India, Mysore
            </span>
            <a href="https://linkedin.com/in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-600">
              <Linkedin className="w-4 h-4 text-cyan-600" /> linkedin.com/in
            </a>
            <a href="https://github.com/manju-17-ctrl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-600">
              <Github className="w-4 h-4 text-cyan-600" /> github.com/manju-17-ctrl
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-3 text-cyan-800">
            Professional Summary
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Computer Science and Engineering student seeking an entry-level software development opportunity. Passionate about learning, problem-solving, and building practical projects. Quick learner with a positive attitude and willingness to grow.
          </p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-3 text-cyan-800">
            Education
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">Bachelor of Engineering, COMPUTER SCIENCE & ENGINEERING</h3>
                <p className="text-sm text-slate-600 italic">Maharaja Institute of Technology, Mysore</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">7th SEMESTER CGPA: 8.3</p>
              </div>
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded mt-1 sm:mt-0 w-max">
                2023 – 2025
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">PUC (Pre-University Course)</h3>
                <p className="text-sm text-slate-600 italic">MASVS GURUKULA PRE UNIVERSITY COLLEGE MYSORE</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">Percentage: 93.2%</p>
              </div>
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded mt-1 sm:mt-0 w-max">
                2022 – 2023
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">S.S.L.C</h3>
                <p className="text-sm text-slate-600 italic">Vivekananda English Medium School, Bannur</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">Percentage: 87%</p>
              </div>
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded mt-1 sm:mt-0 w-max">
                2021
              </span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-3 text-cyan-800">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div>
              <span className="font-bold text-slate-900">Programming Languages: </span>
              <span className="text-slate-700">Python, SQL, HTML, CSS</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">Frontend: </span>
              <span className="text-slate-700">React.js, HTML5, Bootstrap</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">Backend: </span>
              <span className="text-slate-700">Java, Flask</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">Tools: </span>
              <span className="text-slate-700">Git, GitHub, VS Code</span>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-3 text-cyan-800">
            Certifications (Coursera)
          </h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
            <li><strong className="text-slate-900">Programming with JavaScript</strong> – Meta (Coursera)</li>
            <li><strong className="text-slate-900">Blockchain Basics</strong> – University at Buffalo (SUNY)</li>
            <li><strong className="text-slate-900">Developing Front-End Apps with React</strong> – IBM</li>
            <li><strong className="text-slate-900">Cyber Security Technologies</strong> – Illinois Tech</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-3 text-cyan-800">
            Projects
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Event Management System</h3>
              <p className="text-sm text-slate-700 leading-relaxed mt-1">
                Developed a web-based Event Management System to simplify event planning and management. The system allows users to register, browse events, and book tickets, while administrators can create events, manage users, and generate reports.
              </p>
              <p className="text-xs text-slate-600 mt-1 font-mono">
                <strong>Tech Stack:</strong> Python Flask, SQLite, HTML, CSS, JavaScript, Bootstrap, SQLAlchemy, Firebase Authentication.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900">AegisFlow: Autonomous observability framework for industrial and software system</h3>
              <p className="text-sm text-slate-700 leading-relaxed mt-1">
                AI-powered observability platform that monitors both software systems and industrial machines in real time. It collects live system metrics, detects anomalies using AI agents, sends alerts, and performs automatic recovery actions. Provides a single dashboard for monitoring and helps reduce system downtime.
              </p>
              <p className="text-xs text-slate-600 mt-1 font-mono">
                <strong>Tech Stack:</strong> Python, Django, Django REST Framework, React, HTML, CSS, JavaScript, SQLite, psutil.
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

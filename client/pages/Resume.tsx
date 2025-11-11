import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";

export default function Resume() {
  return (
    <div className="min-h-screen bg-background paper-texture">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="portfolio-container">
          <div className="flex items-center justify-between flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-primary mb-4">
                <span className="text-sm font-semibold fine-stroke">
                  PROFESSIONAL
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground fine-stroke">
                Resume & CV
              </h1>
              <p className="text-lg text-foreground font-medium max-w-2xl">
                Comprehensive overview of education, experience, skills, and
                professional achievements.
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1LukwWFOGqg79u1uoS8s-yhcxCY0Br0cK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex paper-button-outline gap-2"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding border-b border-border">
        <div className="portfolio-container">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Contact */}
                <div>
                  <h3 className="font-bold text-lg mb-4 text-foreground fine-stroke">
                    Contact
                  </h3>
                  <div className="folded-note p-4 space-y-2 text-sm text-foreground font-medium paper-corner paper-texture">
                    <p>
                      <span className="font-bold block text-foreground">
                        Email:
                      </span>
                      shlok.modasa@gmail.com
                    </p>
                    <p>
                      <span className="font-bold block text-foreground">
                        Phone:
                      </span>
                      +91 7990431911
                    </p>
                    <p>
                      <span className="font-bold block text-foreground">
                        LinkedIn:
                      </span>
                      Shlok Patel
                    </p>
                    <p>
                      <span className="font-bold block text-foreground">
                        GitHub:
                      </span>
                      shl0kpatel
                    </p>
                  </div>
                </div>

                {/* Programming Languages */}
                <div>
                  <h3 className="font-bold text-lg mb-4 text-foreground fine-stroke">
                    Languages
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "Python", level: 90 },
                      { name: "Java", level: 85 },
                      { name: "JavaScript", level: 88 },
                      { name: "SQL", level: 85 },
                      { name: "C", level: 80 },
                    ].map((lang) => (
                      <div key={lang.name}>
                        <p className="text-sm font-bold mb-1 text-foreground fine-stroke">
                          {lang.name}
                        </p>
                        <div className="w-full bg-muted h-2 rounded-full overflow-hidden fold-shadow-1">
                          <div
                            className="h-full bg-primary transition-all rounded-full"
                            style={{ width: `${lang.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="font-bold text-lg mb-4 text-foreground fine-stroke">
                    Achievements
                  </h3>
                  <div className="folded-note p-4 space-y-2 text-sm text-foreground font-medium paper-corner paper-texture">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">★</span>
                      <span>JPMC Code for Good 2025 Winner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">★</span>
                      <span>Top 300 in Odoo India Hackathon 2025</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">★</span>
                      <span>IOQM Qualifier (Grades 11 & 12)</span>
                    </li>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Education */}
              <div>
                <h2 className="text-3xl font-bold mb-6 pb-3 border-b border-border text-foreground fine-stroke">
                  Education
                </h2>
                <div className="space-y-6">
                  <div className="folded-note p-6 fold-shadow-2 paper-corner paper-texture">
                    <h3 className="font-bold text-lg text-foreground fine-stroke">
                      Bachelor of Technology (B.Tech)
                    </h3>
                    <p className="text-primary font-semibold mt-1 fine-stroke">
                      Pandit Deendayal Energy University
                    </p>
                    <p className="text-sm text-foreground font-medium mt-1">
                      Computer Science and Engineering | 2021 - 2025 (Expected
                      June 2025)
                    </p>
                    <p className="text-foreground font-medium mt-2">
                      CGPA: 9.91 / 10.00 | Relevant Coursework: Data Structures,
                      Object-Oriented Programming, Database Management Systems,
                      Web Development
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Projects */}
              <div>
                <h2 className="text-3xl font-bold mb-6 pb-3 border-b border-border text-foreground fine-stroke">
                  Technical Projects
                </h2>
                <div className="space-y-6">
                  <div className="folded-note p-6 fold-shadow-2 paper-corner paper-texture hover:fold-shadow-deep transition-all">
                    <h3 className="font-bold text-lg text-foreground fine-stroke">
                      Milestone Tracker – JPMC Code for Good 2025
                    </h3>
                    <p className="text-primary font-semibold mt-1 fine-stroke">
                      Winner Project
                    </p>
                    <p className="text-sm text-foreground font-medium mt-1">
                      24-Hour Hackathon | React, Node.js, Cloud Storage
                    </p>
                    <ul className="mt-3 space-y-1 text-foreground font-medium text-sm">
                      <li>
                        • Built milestone tracking web app for SpacECE NGO with
                        AI chatbot integration
                      </li>
                      <li>
                        • Integrated Botpress-based chatbot for FAQ and
                        real-time queries
                      </li>
                      <li>
                        • Implemented multilingual support and voice guidance
                        for accessibility
                      </li>
                      <li>
                        • Served 20+ stakeholders during product demo;
                        recognized for teamwork
                      </li>
                    </ul>
                  </div>
                  <div className="folded-note p-6 fold-shadow-2 paper-corner paper-texture hover:fold-shadow-deep transition-all">
                    <h3 className="font-bold text-lg text-foreground fine-stroke">
                      Exercise Tracking System
                    </h3>
                    <p className="text-primary font-semibold mt-1 fine-stroke">
                      Personal Project
                    </p>
                    <p className="text-sm text-foreground font-medium mt-1">
                      Flask, SQLite, User Authentication
                    </p>
                    <ul className="mt-3 space-y-1 text-foreground font-medium text-sm">
                      <li>
                        • Developed Flask-based fitness tracker with secure
                        registration
                      </li>
                      <li>
                        • Implemented personalized dashboards for exercise
                        logging and history
                      </li>
                      <li>
                        • Validated with 50+ concurrent test accounts using
                        SQLite
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-3xl font-bold mb-6 pb-3 border-b border-border text-foreground fine-stroke">
                  Technical Skills
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      category: "Languages",
                      skills: [
                        "Python",
                        "Java",
                        "C",
                        "JavaScript",
                        "SQL",
                        "MongoDB",
                      ],
                    },
                    {
                      category: "Web Frameworks",
                      skills: [
                        "React.js",
                        "Next.js",
                        "Flask",
                        "Django",
                        "Node.js",
                      ],
                    },
                    {
                      category: "Tools & Platforms",
                      skills: ["Git", "GitHub", "Cloud Storage", "HTML/CSS"],
                    },
                  ].map((skill) => (
                    <div
                      key={skill.category}
                      className="folded-note p-4 paper-corner paper-texture fold-shadow-1"
                    >
                      <p className="font-semibold text-foreground mb-3 fine-stroke">
                        {skill.category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skill.skills.map((s) => (
                          <span
                            key={s}
                            className="px-2 py-1 bg-accent/10 text-primary text-xs rounded-md font-semibold"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h2 className="text-3xl font-bold mb-6 pb-3 border-b border-border text-foreground fine-stroke">
                  Soft Skills & Competencies
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Rapid Prototyping",
                    "Teamwork & Collaboration",
                    "Problem Solving",
                    "Analytical Thinking",
                    "Time Management",
                    "Adaptability",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="folded-note p-4 paper-corner paper-texture fold-shadow-1"
                    >
                      <span className="text-foreground font-semibold fine-stroke">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary/5 border-b border-border">
        <div className="portfolio-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground fine-stroke">
                Explore My Work
              </h2>
              <p className="text-muted-foreground font-medium">
                Check out my projects and research endeavors
              </p>
            </div>
            <Link to="/projects" className="paper-button">
              View Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

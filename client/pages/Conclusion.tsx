import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Conclusion() {
  return (
    <div className="min-h-screen bg-background paper-texture">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="portfolio-container">
          <div className="flex items-center gap-2 text-primary mb-4">
            <span className="text-sm font-semibold fine-stroke">📊 CONCLUSION</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground fine-stroke">
            Conclusion & Self-Assessment
          </h1>
          <p className="text-lg text-foreground font-medium max-w-2xl">
            A summary of my journey, achievements, lessons learned, and honest reflection on where I stand and where I'm headed.
          </p>
        </div>
      </section>

      {/* Achievements Summary */}
      <section className="section-padding border-b border-border">
        <div className="portfolio-container">
          <h2 className="section-title">Journey Summary</h2>
          <p className="section-subtitle">
            Key milestones and accomplishments across my academic and professional development
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="folded-note p-8 fold-shadow-2 paper-corner paper-texture">
              <h3 className="text-2xl font-bold mb-6 text-foreground fine-stroke">
                Academic Excellence
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">★</span>
                  <span className="text-foreground font-medium">
                    Maintained CGPA of 9.91/10.00 throughout B.Tech program at Pandit Deendayal Energy University
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">★</span>
                  <span className="text-foreground font-medium">
                    Strong foundation in Data Structures, Algorithms, Database Management, and Web Technologies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">★</span>
                  <span className="text-foreground font-medium">
                    Demonstrated consistent learning mindset and mastery across diverse technical domains
                  </span>
                </li>
              </ul>
            </div>

            <div className="folded-note p-8 fold-shadow-2 paper-corner paper-texture">
              <h3 className="text-2xl font-bold mb-6 text-foreground fine-stroke">
                Professional & Competitive Achievement
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg">🏆</span>
                  <span className="text-foreground font-medium">
                    Won JPMC Code for Good 2025, selected among top 400 of 60,000+ participants
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg">🏆</span>
                  <span className="text-foreground font-medium">
                    Reached top 300 in Odoo India Hackathon 2025 out of 6,000+ teams
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg">🏆</span>
                  <span className="text-foreground font-medium">
                    IOQM (Indian Olympiad Qualifier in Mathematics) Qualifier – 2 consecutive years
                  </span>
                </li>
              </ul>
            </div>

            <div className="folded-note p-8 fold-shadow-2 paper-corner paper-texture">
              <h3 className="text-2xl font-bold mb-6 text-foreground fine-stroke">
                Practical Technical Experience
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold text-lg">✓</span>
                  <span className="text-foreground font-medium">
                    Built multiple full-stack applications (Flask, React, Next.js)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold text-lg">✓</span>
                  <span className="text-foreground font-medium">
                    Hands-on experience with database design, API development, and cloud deployment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold text-lg">✓</span>
                  <span className="text-foreground font-medium">
                    Integrated advanced technologies: AI chatbots, multilingual support, accessibility features
                  </span>
                </li>
              </ul>
            </div>

            <div className="folded-note p-8 fold-shadow-2 paper-corner paper-texture">
              <h3 className="text-2xl font-bold mb-6 text-foreground fine-stroke">
                Soft Skills & Character
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground font-bold text-lg">→</span>
                  <span className="text-foreground font-medium">
                    Demonstrated teamwork, leadership, and collaboration in competitive environments
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground font-bold text-lg">→</span>
                  <span className="text-foreground font-medium">
                    Mentored peers; strong communication and presentation skills
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground font-bold text-lg">→</span>
                  <span className="text-foreground font-medium">
                    Ethical mindset; active advocate for responsible technology development
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Lessons Learned */}
      <section className="py-12 md:py-16 bg-background border-b border-border">
        <div className="portfolio-container">
          <h2 className="section-title">Lessons Learned</h2>
          <p className="section-subtitle">
            Insights from my journey that shaped my approach and mindset
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Learning is a Continuous Journey",
                insight:
                  "Academic grades and competitive achievements matter, but continuous learning across diverse domains is more valuable. Each project, failure, and success teaches something irreplaceable.",
              },
              {
                title: "Theory Meets Practice",
                insight:
                  "Theoretical knowledge becomes powerful only when applied to real problems. Hackathons and projects bridge this gap, revealing gaps in understanding and deepening mastery.",
              },
              {
                title: "Collaboration Amplifies Impact",
                insight:
                  "Individual brilliance is valuable, but collaborative problem-solving creates better solutions. Diverse perspectives, open communication, and shared ownership drive superior outcomes.",
              },
              {
                title: "Ethics is Not Separate from Excellence",
                insight:
                  "Building ethical systems requires thoughtful design, not just good intentions. Privacy, accessibility, and bias considerations should be integral to every system, not afterthoughts.",
              },
              {
                title: "Resilience & Adaptability Matter",
                insight:
                  "Challenges and failures are inevitable. The ability to adapt, learn from setbacks, and keep moving forward is more important than avoiding difficulties.",
              },
              {
                title: "Communication Bridges Technical & Human Worlds",
                insight:
                  "Technical brilliance without clear communication has limited impact. Explaining complex ideas simply and listening actively are as crucial as technical skills.",
              },
            ].map((lesson, idx) => (
              <div
                key={idx}
                className="folded-note p-8 hover:fold-shadow-2 transition-all paper-corner paper-texture"
              >
                <h3 className="text-xl font-bold mb-3 text-foreground fine-stroke">{lesson.title}</h3>
                <p className="text-foreground font-medium leading-relaxed">{lesson.insight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SWOT Analysis */}
      <section className="section-padding border-b border-border">
        <div className="portfolio-container">
          <h2 className="section-title">SWOT Analysis</h2>
          <p className="section-subtitle">
            Honest assessment of my current position and future potential
          </p>

          {/* 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Strengths */}
            <div className="folded-note p-8 fold-shadow-2 paper-corner paper-texture border-l-4 border-accent">
              <h3 className="text-2xl font-bold mb-6 text-foreground fine-stroke">Strengths</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">+</span>
                  <span className="text-foreground font-medium">
                    Strong technical foundation and rapid learning capability
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">+</span>
                  <span className="text-foreground font-medium">
                    Proven ability to deliver under pressure (hackathon winners)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">+</span>
                  <span className="text-foreground font-medium">
                    Full-stack development skills across multiple frameworks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">+</span>
                  <span className="text-foreground font-medium">
                    Strong problem-solving and analytical thinking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">+</span>
                  <span className="text-foreground font-medium">
                    Excellent academic performance (CGPA 9.91)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">+</span>
                  <span className="text-foreground font-medium">
                    Ethical mindset and commitment to responsible technology
                  </span>
                </li>
              </ul>
            </div>

            {/* Weaknesses */}
            <div className="folded-note p-8 fold-shadow-2 paper-corner paper-texture border-l-4 border-orange-400">
              <h3 className="text-2xl font-bold mb-6 text-foreground fine-stroke">Weaknesses</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">-</span>
                  <span className="text-foreground font-medium">
                    Limited professional experience (still completing B.Tech)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">-</span>
                  <span className="text-foreground font-medium">
                    Perfectionism can sometimes slow down decision-making and shipping
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">-</span>
                  <span className="text-foreground font-medium">
                    Limited experience with large-scale distributed systems in production
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">-</span>
                  <span className="text-foreground font-medium">
                    Could strengthen skills in specific domains (ML, advanced DevOps)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">-</span>
                  <span className="text-foreground font-medium">
                    Limited mentorship from senior engineers in a professional setting
                  </span>
                </li>
              </ul>
            </div>

            {/* Opportunities */}
            <div className="folded-note p-8 fold-shadow-2 paper-corner paper-texture border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-6 text-foreground fine-stroke">Opportunities</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">◆</span>
                  <span className="text-foreground font-medium">
                    High demand for software engineers; strong market for data engineering roles
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">◆</span>
                  <span className="text-foreground font-medium">
                    Growing focus on ethical AI and responsible tech creates opportunities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">��</span>
                  <span className="text-foreground font-medium">
                    Open-source communities and mentorship from industry experts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">◆</span>
                  <span className="text-foreground font-medium">
                    Growing climate tech and impact-focused startup ecosystems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">◆</span>
                  <span className="text-foreground font-medium">
                    International tech opportunities; remote work normalcy
                  </span>
                </li>
              </ul>
            </div>

            {/* Threats */}
            <div className="folded-note p-8 fold-shadow-2 paper-corner paper-texture border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-6 text-foreground fine-stroke">Threats</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">△</span>
                  <span className="text-foreground font-medium">
                    Competitive job market; many talented engineers seeking roles
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">△</span>
                  <span className="text-foreground font-medium">
                    Rapid tech change requires constant upskilling to stay relevant
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">△</span>
                  <span className="text-foreground font-medium">
                    Economic downturns can impact hiring and growth opportunities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">△</span>
                  <span className="text-foreground font-medium">
                    Risk of being pigeon-holed in narrow specializations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">△</span>
                  <span className="text-foreground font-medium">
                    Pressure to prioritize short-term gains over long-term learning
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Reflection */}
      <section className="py-12 md:py-16 bg-primary/5 border-b border-border">
        <div className="portfolio-container">
          <div className="letter-container">
            <h2 className="letter-title">Final Reflection</h2>
            <div className="relative z-10 space-y-4 text-foreground leading-relaxed font-medium">
              <p>
                Standing at the threshold of my career, I'm grateful for the journey that brought me here. My path has been marked by strong academic performance, competitive achievements, and hands-on experience solving real problems. But beyond metrics and accomplishments, I've developed a philosophy about technology and professional growth.
              </p>

              <p>
                I've learned that technical excellence is necessary but insufficient. How we build, what we build, and whom we serve matter as much as the elegance of our code. I'm committed to being an engineer who solves hard problems with integrity, who mentors others, and who advocates for responsible technology development.
              </p>

              <p>
                Looking ahead, I'm excited and humbled. Excited by the technical challenges I'll tackle, the projects I'll build, and the impact I hope to create. Humbled by how much I still have to learn and the responsibility that comes with building systems others depend on.
              </p>

              <p>
                My next chapter will be written through deliberate action, continuous learning, and unwavering commitment to my values. I'm ready to contribute meaningfully to teams and organizations that share my vision of building technology that matters.
              </p>

              <p className="pt-4 italic text-sm">
                — Shlok Patel, June 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-background border-b border-border">
        <div className="portfolio-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground fine-stroke">
                Hear What Others Say
              </h2>
              <p className="text-muted-foreground font-medium">
                Testimonials from mentors, professors, and colleagues
              </p>
            </div>
            <Link
              to="/testimonials"
              className="paper-button"
            >
              View Testimonials
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-background/50">
        <div className="portfolio-container text-center">
          <p className="text-muted-foreground text-sm font-medium">
            © 2025 Shlok Patel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

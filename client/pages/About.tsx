import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background paper-texture">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="portfolio-container">
          <div className="flex items-center gap-2 text-primary mb-4">
            <span className="text-sm font-semibold fine-stroke">
              LEARNING PHILOSOPHY
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground fine-stroke">
            My Personal Journey
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl font-medium">
            Understanding the philosophy and values that guide my academic
            pursuits and intellectual growth.
          </p>
        </div>
      </section>

      {/* Main Content - Handwritten Letter Style */}
      <section className="section-padding border-b border-border relative">
        <div className="portfolio-container">
          {/* Origami illustrations removed for professional design */}

          {/* Letter container */}
          <div className="letter-container">
            <h2 className="letter-title">My Journey</h2>

            <div className="relative z-10 space-y-4 text-foreground leading-relaxed font-medium">
              <p>
                My academic journey at Pandit Deendayal Energy University has
                been driven by curiosity and a passion for solving real-world
                problems through technology. With a strong foundation in Data
                Structures, Object-Oriented Programming, and Database Management
                Systems, I've consistently maintained a CGPA of 9.91/10.00.
              </p>

              <p>
                What sets my approach apart is my hands-on engagement with
                product-oriented solutions. Rather than limiting myself to
                theoretical learning, I actively participate in hackathons and
                real-world projects. From winning JPMC Code for Good 2025 to
                participating in the Odoo India Hackathon, I've developed a
                strong practical understanding of software development, system
                design, and team collaboration.
              </p>

              <p>
                I believe that effective learning bridges theory and practice.
                My interest in Data Science, combined with experience in
                full-stack development, has shaped my approach to tackling
                complex problems. I view each challenge as an opportunity to
                learn, innovate, and create meaningful impact.
              </p>

              <p>
                This philosophy is evident in how I engage with projects.
                Whether it's building a fitness tracker with robust user
                authentication or developing an AI-integrated milestone tracker
                during a hackathon, I prioritize both technical excellence and
                user-centric design.
              </p>

              <p>
                I'm actively seeking software engineering internships or project
                roles focused on product-oriented solutions. My goal is to work
                on projects that have measurable impact—whether through
                data-driven insights, scalable systems, or innovative
                applications that solve real problems.
              </p>

              <p className="pt-4 italic text-sm">— Shlok</p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground fine-stroke">
                Core Values
              </h3>
              <div className="space-y-4">
                {["Continuous Learning", "Critical Thinking", "Innovation"].map(
                  (value) => (
                    <div
                      key={value}
                      className="folded-note p-3 hover:fold-shadow-2 transition-all paper-corner paper-texture"
                    >
                      <p className="text-sm font-semibold text-foreground fine-stroke">
                        {value}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground fine-stroke">
                Principles
              </h3>
              <div className="space-y-4">
                {["Collaboration", "Integrity", "Excellence"].map((value) => (
                  <div
                    key={value}
                    className="folded-note p-3 hover:fold-shadow-2 transition-all paper-corner paper-texture"
                  >
                    <p className="text-sm font-semibold text-foreground fine-stroke">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground fine-stroke">
                Vision
              </h3>
              <div className="folded-note p-4 hover:fold-shadow-deep transition-all paper-corner paper-texture">
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  To create technology that solves real problems and makes
                  meaningful impact on people's lives.
                </p>
              </div>
            </div>
          </div>

          {/* Milestones */}
          <div className="mt-16 pt-12 border-t border-border">
            <h2 className="section-title">Academic Milestones</h2>
            <p className="section-subtitle">
              Key moments in my educational journey
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  year: "2023",
                  title: "B.Tech Began",
                  description:
                    "Started journey at Pandit Deendayal Energy University",
                },
                {
                  year: "2025",
                  title: "Hackathon Success",
                  description:
                    "Participated and won JPMC Code for Good competition",
                },

                {
                  year: "2027",
                  title: "Graduation Ready",
                  description:
                    "Pursuing internship opportunities and professional growth",
                },
              ].map((milestone) => (
                <div
                  key={milestone.year}
                  className="folded-note p-6 hover:fold-shadow-2 transition-all paper-corner paper-texture"
                >
                  <div className="text-sm font-bold text-primary mb-2 fine-stroke">
                    {milestone.year}
                  </div>
                  <h3 className="font-bold text-foreground mb-2 fine-stroke">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-foreground font-medium">
                    {milestone.description}
                  </p>
                </div>
              ))}
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
                Explore More
              </h2>
              <p className="text-muted-foreground font-medium">
                Discover my resume and professional qualifications
              </p>
            </div>
            <Link to="/resume" className="paper-button">
              View Resume
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-background/50">
        <div className="portfolio-container text-center">
          <p className="text-muted-foreground text-sm font-medium">
            © 2024 My Digital Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

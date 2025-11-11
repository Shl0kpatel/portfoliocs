import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Milestone Tracker – JPMC Code for Good 2025",
    category: "Winner Project (24-Hour Hackathon)",
    description:
      "Built a comprehensive milestone tracking web application for SpacECE NGO to measure and track organizational impact. Integrated AI-powered chatbot for real-time assistance and implemented accessibility features for diverse users.",
    outcomes:
      "Selected among top 400 from 60,000+ applicants, Served 20+ stakeholders during product demo, Recognized for teamwork and technical impact",
    technologies: [
      "React",
      "Node.js",
      "Botpress AI",
      "Cloud Storage",
      "Multilingual Support",
    ],
    image: "I",
    githubLink: "https://github.com/Shl0kpatel/milestonetracker.git",
  },
  {
    title: "Exercise Tracking System",
    category: "Full-Stack Development",
    description:
      "Developed a Flask-based fitness tracking application with secure user authentication and personalized dashboard for logging exercises. Implemented robust backend with SQLite for data persistence and validated with multiple concurrent users.",
    outcomes:
      "Secure user registration and authentication, Personalized dashboards for exercise tracking, Supported 50+ concurrent test accounts",
    technologies: [
      "Flask",
      "SQLite",
      "Python",
      "User Authentication",
      "HTML/CSS",
    ],
    image: "II",
    githubLink: "https://github.com/Shl0kpatel/exercise-tracker.git",
  },
  {
    title: "Odoo India Hackathon 2025",
    category: "Enterprise Solutions",
    description:
      "Participated in competitive hackathon focusing on ERP integration and automation use-cases. Contributed to a shortlisted project demonstrating practical understanding of enterprise systems and automation workflows.",
    outcomes:
      "Selected among top 300 teams out of 6,000+ participating teams, Shortlisted project for practical ERP implementation",
    technologies: [
      "Odoo ERP",
      "System Integration",
      "Automation",
      "Problem Solving",
    ],
    image: "III",
    githubLink: "https://github.com/AnujSharma-05/stackit_odoo.git",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background paper-texture">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="portfolio-container">
          <div className="flex items-center gap-2 text-primary mb-4">
            <span className="text-sm font-semibold fine-stroke">PROJECTS</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground fine-stroke">
            Interdisciplinary Projects & Research
          </h1>
          <p className="text-lg text-foreground font-medium max-w-2xl">
            Projects that showcase problem-solving capabilities and technical
            expertise through real-world applications.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding border-b border-border">
        <div className="portfolio-container">
          <div className="space-y-12">
            {projects.map((project, idx) => (
              <div key={idx} className="project-envelope group">
                {/* Title Section */}
                <div className="project-tape">
                  <h3 className="text-xl font-bold text-foreground fine-stroke relative z-10">
                    {project.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-3 gap-6 p-8 md:p-10">
                  {/* Visual Identifier */}
                  <div className="flex items-center justify-center bg-accent/5 rounded-lg min-h-64 md:min-h-auto fold-shadow-1">
                    <div className="text-6xl font-bold text-primary">
                      {project.image}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="md:col-span-2">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-accent/10 text-primary text-xs font-semibold rounded-md fine-stroke">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-foreground mb-6 leading-relaxed font-medium">
                      {project.description}
                    </p>

                    <div className="mb-6 pb-6 border-b border-border">
                      <h4 className="font-bold text-foreground mb-2 fine-stroke">
                        Outcomes & Impact
                      </h4>
                      <p className="text-foreground text-sm font-medium">
                        {project.outcomes}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-foreground mb-3 text-sm fine-stroke">
                          Technologies & Methodologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-md font-semibold"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors text-sm fine-stroke"
                      >
                        View on GitHub
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Visual Separator */}
                <div className="h-6 bg-gradient-to-b from-transparent via-black/2 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding border-b border-border">
        <div className="portfolio-container">
          <h2 className="section-title">Problem-Solving Approach</h2>
          <p className="section-subtitle">
            Strategic methodology for tackling complex challenges
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="folded-note p-8 hover:fold-shadow-2 transition-all paper-corner paper-texture">
              <h3 className="text-xl font-bold mb-4 text-foreground fine-stroke">
                Challenge Analysis
              </h3>
              <p className="text-foreground leading-relaxed font-medium">
                In each project, I identify multi-faceted challenges that
                require interdisciplinary understanding. Rather than isolated
                problems, I view them as opportunities to synthesize knowledge
                across domains and create comprehensive solutions.
              </p>
            </div>

            <div className="folded-note p-8 hover:fold-shadow-2 transition-all paper-corner paper-texture">
              <h3 className="text-xl font-bold mb-4 text-foreground fine-stroke">
                Solution Implementation
              </h3>
              <p className="text-foreground leading-relaxed font-medium">
                My approach combines rigorous research methodology with creative
                innovation. I prototype early, test iteratively, and incorporate
                feedback to refine solutions that are both theoretically sound
                and practically effective.
              </p>
            </div>

            <div className="folded-note p-8 hover:fold-shadow-2 transition-all paper-corner paper-texture">
              <h3 className="text-xl font-bold mb-4 text-foreground fine-stroke">
                Evidence-Based Validation
              </h3>
              <p className="text-foreground leading-relaxed font-medium">
                All projects are grounded in evidence and measurable outcomes. I
                employ robust analytical frameworks to validate hypotheses,
                measure impact, and demonstrate the effectiveness of proposed
                solutions.
              </p>
            </div>

            <div className="folded-note p-8 hover:fold-shadow-2 transition-all paper-corner paper-texture">
              <h3 className="text-xl font-bold mb-4 text-foreground fine-stroke">
                Cross-Disciplinary Integration
              </h3>
              <p className="text-foreground leading-relaxed font-medium">
                I actively seek insights from multiple disciplines, believing
                that breakthrough innovations emerge at the intersection of
                fields. This approach has led to novel methodologies and
                solutions.
              </p>
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
                Discover My Skills
              </h2>
              <p className="text-muted-foreground font-medium">
                Explore the technical and soft skills developed through these
                projects
              </p>
            </div>
            <Link to="/skills" className="paper-button">
              View Skills
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

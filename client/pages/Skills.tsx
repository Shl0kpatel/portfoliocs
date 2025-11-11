import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Users, Palette } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Proficiencies",
    icon: Code,
    skills: [
      {
        name: "Full-Stack Web Development",
        level: 88,
        description: "React.js, Next.js, Node.js, Flask, Django",
        color: "skill-mint",
      },
      {
        name: "Programming Languages",
        level: 85,
        description: "Python, Java, JavaScript, C, SQL, MongoDB",
        color: "skill-pink",
      },
      {
        name: "Database Design",
        level: 80,
        description: "SQL, SQLite, MongoDB, Data Persistence",
        color: "skill-yellow",
      },
      {
        name: "Cloud & Tools",
        level: 75,
        description: "Cloud Storage, Git, GitHub, API Development",
        color: "skill-blue",
      },
    ],
  },
  {
    title: "Professional & Soft Skills",
    icon: Users,
    skills: [
      {
        name: "Rapid Prototyping",
        level: 90,
        description: "Hackathon Experience, Quick MVP Development",
        color: "skill-lavender",
      },
      {
        name: "Teamwork & Collaboration",
        level: 88,
        description: "Cross-functional Teams, JPMC Code for Good Winner",
        color: "skill-mint",
      },
      {
        name: "Problem Solving",
        level: 85,
        description: "Analytical Thinking, Algorithm Design, Critical Analysis",
        color: "skill-pink",
      },
      {
        name: "Communication",
        level: 82,
        description: "Presentation Skills, Technical Writing, Stakeholder Engagement",
        color: "skill-yellow",
      },
    ],
  },
  {
    title: "Areas of Interest & Growth",
    icon: Zap,
    skills: [
      {
        name: "Data Science",
        level: 80,
        description: "Analytics, Data Structures, Problem Solving",
        color: "skill-blue",
      },
      {
        name: "AI/ML Integration",
        level: 75,
        description: "Chatbot Integration (Botpress), ML Applications",
        color: "skill-lavender",
      },
      {
        name: "Product Development",
        level: 85,
        description: "User-Centric Design, Accessibility, Feature Implementation",
        color: "skill-mint",
      },
      {
        name: "Enterprise Systems",
        level: 70,
        description: "ERP Integration, Odoo Platform, Automation",
        color: "skill-pink",
      },
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-background paper-texture">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="portfolio-container">
          <div className="flex items-center gap-2 text-primary mb-4">
            <span className="text-sm font-semibold fine-stroke">⚡ EXPERTISE</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground fine-stroke">
            Advanced Skill Development
          </h1>
          <p className="text-lg text-foreground font-medium max-w-2xl">
            Skills organized like sticky notes on a corkboard — a collection of expertise developed through hands-on experience.
          </p>
        </div>
      </section>

      {/* Skills Grid - Sticky Notes Style */}
      <section className="section-padding border-b border-border">
        <div className="portfolio-container space-y-16">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 paper-fold bg-accent/10 rounded-lg flex items-center justify-center fold-shadow-1">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground fine-stroke">{category.title}</h2>
                </div>

                {/* Sticky notes grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skill.name}
                      className={`skill-tag ${skill.color} paper-texture group`}
                    >
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-sm uppercase leading-tight pr-2 fine-stroke">
                            {skill.name}
                          </h3>
                          <span className="text-xs font-bold whitespace-nowrap flex-shrink-0 fine-stroke">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="w-full bg-black/10 h-1.5 rounded-full overflow-hidden mb-2">
                          <div
                            className="h-full bg-black/40 rounded-full transition-all"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>

                        <p className="text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Artifacts & Evidence */}
      <section className="py-12 md:py-16 bg-background border-b border-border">
        <div className="portfolio-container">
          <h2 className="section-title">Evidence of Mastery</h2>
          <p className="section-subtitle">
            Tangible artifacts demonstrating skill acquisition and application
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Code Repositories",
                description:
                  "GitHub projects showcasing clean code, best practices, and architectural decisions",
                icon: "📁",
              },
              {
                title: "Publications & Papers",
                description:
                  "Peer-reviewed research papers demonstrating academic rigor and domain expertise",
                icon: "📚",
              },
              {
                title: "Design Portfolio",
                description:
                  "UX/UI case studies and design artifacts from completed projects",
                icon: "🎨",
              },
              {
                title: "Certifications",
                description:
                  "Professional certifications and completed advanced courses",
                icon: "🏆",
              },
              {
                title: "Speaking Engagements",
                description:
                  "Conference presentations, workshops, and webinar sessions",
                icon: "🎤",
              },
              {
                title: "Performance Reviews",
                description:
                  "Feedback from managers and colleagues validating skill development",
                icon: "⭐",
              },
            ].map((artifact) => (
              <div
                key={artifact.title}
                className="folded-note p-6 hover:fold-shadow-2 hover:-translate-y-1 transition-all paper-corner paper-texture"
              >
                <div className="text-4xl mb-4">{artifact.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-foreground fine-stroke">{artifact.title}</h3>
                <p className="text-foreground text-sm font-medium">{artifact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey */}
    

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary/5 border-b border-border">
        <div className="portfolio-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground fine-stroke">
                Explore Leadership
              </h2>
              <p className="text-muted-foreground font-medium">
                See how I apply these skills in team settings
              </p>
            </div>
            <Link
              to="/leadership"
              className="paper-button"
            >
              View Leadership
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

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const contents = [
  {
    section: "1. Cover Page",
    description: "Professional introduction with personal details and tagline",
    path: "/",
    marks: "1 Mark",
  },
  {
    section: "2. Introduction & Learning Philosophy",
    description: "Personal learning journey and academic philosophy",
    path: "/about",
    marks: "2 Marks",
  },
  {
    section: "3. Resume/CV",
    description:
      "Education, experience, skills, certifications, and achievements",
    path: "/resume",
    marks: "3 Marks",
  },
  {
    section: "4. Interdisciplinary Projects & Research",
    description:
      "Major projects showcasing integration of multiple disciplines",
    path: "/projects",
    marks: "4 Marks",
  },
  {
    section: "5. Advanced Skill Development",
    description: "Showcase of technical, soft, and creative competencies",
    path: "/skills",
    marks: "3 Marks",
  },
  {
    section: "6. Collaborative & Leadership Experiences",
    description: "Team experiences, roles, and interpersonal achievements",
    path: "/leadership",
    marks: "2 Marks",
  },
  {
    section: "7. Global Awareness & Ethical Considerations",
    description: "Global issues, ethical analysis, and responsibility",
    path: "/ethics",
    marks: "2 Marks",
  },
  {
    section: "8. Future Aspirations & Professional Development",
    description: "Career goals and continuous improvement strategies",
    path: "/future",
    marks: "2 Marks",
  },
  {
    section: "9. Conclusion & Self-Assessment",
    description: "Summary, lessons learned, and SWOT analysis",
    path: "/conclusion",
    marks: "1 Mark",
  },
  {
    section: "10. Testimonials",
    description: "Recommendations from mentors, employers, and professors",
    path: "/testimonials",
    marks: "1 Mark",
  },
];

export default function TableOfContents() {
  return (
    <div className="min-h-screen bg-background paper-texture">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="portfolio-container">
          <div className="flex items-center gap-2 text-primary mb-4">
            <span className="text-sm font-semibold fine-stroke">📑 NAVIGATION</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground fine-stroke">
            Table of Contents
          </h1>
          <p className="text-lg text-foreground font-medium max-w-2xl">
            Navigate through the sections of my portfolio to explore different
            aspects of my academic journey, professional development, and
            achievements.
          </p>
        </div>
      </section>

      {/* Contents */}
      <section className="section-padding border-b border-border">
        <div className="portfolio-container">
          <div className="space-y-3">
            {contents.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="group block"
              >
                <div className="folded-note p-6 hover:fold-shadow-2 transition-all paper-corner paper-texture">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 fine-stroke">
                        {item.section}
                      </h3>
                      <p className="text-foreground text-sm font-medium">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="px-3 py-1 bg-accent/10 text-primary text-xs font-semibold rounded-md whitespace-nowrap fine-stroke">
                        {item.marks}
                      </span>
                      <ChevronRight className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Jump */}
      <section className="py-12 md:py-16 bg-background border-b border-border">
        <div className="portfolio-container">
          <h2 className="section-title">Quick Navigation</h2>
          <p className="section-subtitle">Jump to main sections</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Resume", path: "/resume" },
              { label: "Projects", path: "/projects" },
              { label: "Skills", path: "/skills" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="folded-note p-4 text-center font-bold text-foreground hover:fold-shadow-2 transition-all paper-corner paper-texture fine-stroke"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, TrendingUp, BookOpen } from "lucide-react";

const careerGoals = [
  {
    timeline: "Next 2 Years (2025-2027)",
    title: "Build Foundation & Gain Experience",
    goals: [
      "Secure software engineering internship or early career role at a reputable tech company (e.g., Qualcomm, Microsoft, Google, or impact-focused startups)",
      "Deepen expertise in full-stack development and distributed systems",
      "Contribute to open-source projects focused on data engineering and backend systems",
      "Obtain AWS Certified Solutions Architect or similar cloud certification",
    ],
    focus:
      "Building practical industry experience while maintaining academic excellence through graduation",
  },
  {
    timeline: "3-5 Years (2027-2030)",
    title: "Specialize in Data Engineering & Systems",
    goals: [
      "Transition into a data engineering or backend systems engineering role with focus on scalability and performance",
      "Lead cross-functional projects involving data pipelines, distributed databases, and real-time analytics",
      "Mentor junior engineers and contribute to team growth",
      "Deepen expertise in technologies like Apache Spark, Kafka, or similar distributed systems",
    ],
    focus:
      "Becoming a recognized expert in data engineering with demonstrated impact on company metrics",
  },
  {
    timeline: "5-10 Years (2030-2035)",
    title: "Senior Leadership & Impact",
    goals: [
      "Advance to senior/staff engineer role with architectural influence",
      "Lead initiatives addressing global challenges through technology (climate tech, healthcare tech, education tech)",
      "Build a reputation for balancing technical excellence with ethical responsibility",
      "Consider founding a startup or joining an impact-driven organization focused on sustainable technology",
    ],
    focus:
      "Creating technology systems that solve meaningful problems at scale while maintaining ethical integrity",
  },
];

const learningAreas = [
  {
    area: "Advanced Data Systems",
    description: "Distributed databases, data warehousing, real-time analytics",
    resources: [
      "Designing Data-Intensive Applications by Martin Kleppmann",
      "Apache Spark & Kafka documentation",
      "YouTube channels on system design",
    ],
    timeline: "2025-2026",
  },
  {
    area: "Machine Learning & AI",
    description:
      "Move from integrating ML models to understanding core ML algorithms and infrastructure",
    resources: [
      "Andrew Ng's Machine Learning courses",
      "Stanford CS231N",
      "Hands-on ML with Scikit-Learn",
    ],
    timeline: "2026-2027",
  },
  {
    area: "System Design & Architecture",
    description:
      "Design scalable, fault-tolerant systems handling billions of requests",
    resources: [
      "System Design Interview preparation",
      "CQRS and Event Sourcing patterns",
      "Microservices architecture",
    ],
    timeline: "Ongoing",
  },
  {
    area: "Cloud Platforms & DevOps",
    description:
      "AWS/GCP/Azure, containerization, CI/CD, infrastructure as code",
    resources: [
      "AWS Certified Solutions Architect certification",
      "Docker & Kubernetes deep dive",
      "Terraform documentation",
    ],
    timeline: "2025-2026",
  },
  {
    area: "Product Engineering",
    description:
      "Understand business context, user needs, and product metrics alongside technical excellence",
    resources: [
      "Inspired by Marty Cagan",
      "AARRR metrics",
      "Product management courses",
    ],
    timeline: "2026-2027",
  },
  {
    area: "Leadership & Communication",
    description:
      "Technical writing, public speaking, team management, organizational dynamics",
    resources: [
      "Radical Candor by Kim Scott",
      "Toastmasters or similar groups",
      "Executive coaching",
    ],
    timeline: "Ongoing",
  },
];

const roadmap = [
  {
    quarter: "Q3 2025 (Current)",
    milestones: [
      "Complete B.Tech degree (June 2025 expected)",
      "Secure full-time software engineering role or internship",
      "Start AWS certification preparation",
    ],
  },
  {
    quarter: "Q4 2025",
    milestones: [
      "Obtain first professional certification (AWS/GCP)",
      "Read one systems design book",
      "Contribute to 1-2 open-source projects",
    ],
  },
  {
    quarter: "Q1-Q2 2026",
    milestones: [
      "Gain 6+ months industry experience",
      "Lead or own a significant project component",
      "Deep dive into data engineering concepts",
    ],
  },
  {
    quarter: "Q3-Q4 2026",
    milestones: [
      "Identify specialization focus (Data Engineering vs. Backend Systems vs. ML Infrastructure)",
      "Start advanced learning in chosen specialization",
      "Build portfolio projects demonstrating new skills",
    ],
  },
  {
    quarter: "2027 & Beyond",
    milestones: [
      "Transition into specialized role aligned with learning",
      "Expand professional network through conferences and community participation",
      "Evaluate longer-term career path (startup, staff engineer role, leadership track)",
    ],
  },
];

export default function Future() {
  return (
    <div className="min-h-screen bg-background paper-texture">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="portfolio-container">
          <div className="flex items-center gap-2 text-primary mb-4">
            <span className="text-sm font-semibold fine-stroke">🚀 FUTURE</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground fine-stroke">
            Future Aspirations & Professional Development
          </h1>
          <p className="text-lg text-foreground font-medium max-w-2xl">
            My vision for the next decade: becoming a principal engineer who
            solves hard problems at scale while making positive impact.
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding border-b border-border">
        <div className="portfolio-container">
          <div className="letter-container">
            <h2 className="letter-title">My Vision</h2>
            <div className="relative z-10 space-y-4 text-foreground leading-relaxed font-medium">
              <p>
                I envision a career where I solve complex technical challenges
                that have meaningful impact on people's lives. Whether through
                building scalable data systems that power important decisions,
                contributing to climate tech solutions, or advancing healthcare
                through better technology infrastructure—I want my work to
                matter.
              </p>
              <p>
                My path is not linear. I'm excited to explore different roles,
                technologies, and industries. But the common thread will always
                be:{" "}
                <span className="font-bold">
                  technical excellence, continuous learning, and ethical
                  responsibility
                </span>
                .
              </p>
              <p>
                Ultimately, I want to reach a level of expertise and influence
                where I can shape tech culture positively—mentoring others,
                advocating for responsible development, and building teams that
                deliver great outcomes while maintaining integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Goals Timeline */}
      <section className="section-padding border-b border-border">
        <div className="portfolio-container">
          <h2 className="section-title">Career Progression Timeline</h2>
          <p className="section-subtitle">
            Strategic milestones for the next 10 years
          </p>

          <div className="space-y-8">
            {careerGoals.map((goal, idx) => (
              <div
                key={idx}
                className="folded-note p-8 md:p-10 fold-shadow-2 paper-corner paper-texture hover:fold-shadow-deep transition-all"
              >
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-semibold mb-3 fine-stroke">
                    {goal.timeline}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground fine-stroke">
                    {goal.title}
                  </h3>
                </div>

                <p className="text-foreground font-medium mb-6 pb-6 border-b border-border">
                  {goal.focus}
                </p>

                <div>
                  <h4 className="font-bold text-foreground mb-4 fine-stroke text-sm uppercase">
                    Goals & Milestones
                  </h4>
                  <ul className="space-y-2">
                    {goal.goals.map((g, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-foreground font-medium"
                      >
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Learning */}
      <section className="py-12 md:py-16 bg-background border-b border-border">
        <div className="portfolio-container">
          <h2 className="section-title">Areas of Continuous Learning</h2>
          <p className="section-subtitle">
            Technologies and skills I'm committed to mastering
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {learningAreas.map((item, idx) => (
              <div
                key={idx}
                className="folded-note p-8 hover:fold-shadow-2 transition-all paper-corner paper-texture"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground fine-stroke flex-1">
                    {item.area}
                  </h3>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-md whitespace-nowrap ml-2">
                    {item.timeline}
                  </span>
                </div>

                <p className="text-foreground font-medium mb-4">
                  {item.description}
                </p>

                <div>
                  <h4 className="font-bold text-foreground text-sm mb-2 fine-stroke">
                    Resources
                  </h4>
                  <ul className="space-y-1">
                    {item.resources.map((resource, i) => (
                      <li
                        key={i}
                        className="text-foreground text-sm font-medium"
                      >
                        • {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Learning Philosophy */}
      <section className="py-12 md:py-16 bg-primary/5 border-b border-border">
        <div className="portfolio-container">
          <h2 className="section-title">Approach to Growth</h2>
          <p className="section-subtitle">
            Principles guiding my professional development
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Learn by Doing",
                description:
                  "Theory without practice is incomplete. I prioritize hands-on projects, real-world challenges, and building tangible solutions.",
              },
              {
                icon: Zap,
                title: "Stay Current",
                description:
                  "Tech evolves rapidly. I stay informed through blogs, conferences, and open-source communities while filtering hype from substance.",
              },
              {
                icon: TrendingUp,
                title: "Learn from Others",
                description:
                  "The best learning comes from working with experienced engineers. I actively seek mentors and invest in relationships with skilled peers.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="folded-note p-8 hover:fold-shadow-2 transition-all paper-corner paper-texture"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-foreground fine-stroke">
                    {item.title}
                  </h3>
                  <p className="text-foreground font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-background border-b border-border">
        <div className="portfolio-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground fine-stroke">
                Review My Achievements
              </h2>
              <p className="text-muted-foreground font-medium">
                See where I stand today and my journey so far
              </p>
            </div>
            <Link to="/conclusion" className="paper-button">
              View Conclusion
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

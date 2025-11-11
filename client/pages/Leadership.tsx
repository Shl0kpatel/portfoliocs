import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Award } from "lucide-react";

const experiences = [
  {
    title: "JPMC Code for Good 2025 – Team Lead & Full-Stack Developer",
    organization: "JP Morgan Chase | 24-Hour Hackathon",
    role: "Technical Lead",
    date: "April 2025",
    description:
      "Co-led a diverse team in developing the Milestone Tracker platform for SpacECE NGO. Coordinated between frontend, backend, and AI integration roles while managing technical decisions and timeline constraints.",
    teamDynamics:
      "Worked with 3-4 teammates with different expertise levels. Facilitated daily standups, resolved technical blockers, and ensured knowledge sharing across the team.",
    challenges:
      "Initial ambiguity about NGO requirements led to several pivots. Resolved through active listening, breaking down requirements into MVP features, and prioritizing based on stakeholder feedback.",
    conflictResolution:
      "When the team disagreed on AI chatbot implementation approach, I facilitated a discussion comparing Botpress vs custom solutions, ultimately leading to Botpress adoption which saved development time.",
    outcomes:
      "Team won JPMC Code for Good among 60,000+ participants. Recognized for excellent teamwork by judges. Delivered fully functional solution with AI chatbot, multilingual support, and accessibility features.",
    learnings:
      "Leadership isn't about being the most technical; it's about enabling others and removing obstacles. Clear communication and shared vision drive team success more than individual brilliance.",
  },
  {
    title: "Academic Peer Mentoring – Data Structures & Algorithms",
    organization: "Pandit Deendayal Energy University",
    role: "Peer Mentor",
    date: "2024 - Present",
    description:
      "Voluntarily mentored 8-10 junior students in Data Structures, helping them grasp complex concepts and improve problem-solving skills. Conducted weekly discussion sessions and code reviews.",
    teamDynamics:
      "Created a supportive learning environment where students felt comfortable asking questions. Encouraged collaborative learning through group problem-solving sessions.",
    challenges:
      "Students had varying levels of prior programming experience, requiring tailored explanations for each learner.",
    conflictResolution:
      "When some students struggled with recursion, I created visual explanations and simpler problems to build intuition before diving into complex cases.",
    outcomes:
      "All mentees improved their performance; several moved from average to top grades in DSA coursework. Positive feedback from both students and faculty.",
    learnings:
      "Teaching reinforced my own understanding and improved my communication skills. Patience and empathy are as important as technical knowledge in mentoring.",
  },
  {
    title: "Technical Collaboration – Exercise Tracking System Project",
    organization: "Personal Project Collaboration",
    role: "Full-Stack Developer & Project Owner",
    date: "February 2025",
    description:
      "Led development of a fitness tracker application collaborating with peers for user testing and feedback. Managed project scope, prioritization, and technical architecture.",
    teamDynamics:
      "Collaborated with 2-3 peers who provided user testing feedback and design suggestions. Regular review sessions ensured alignment on project direction.",
    challenges:
      "Balancing perfectionism with getting an MVP deployed. Managing scope creep when teammates suggested new features.",
    conflictResolution:
      "Implemented a clear feature prioritization framework (core vs nice-to-have) to manage scope while keeping team engaged.",
    outcomes:
      "Successfully deployed full-stack application handling 50+ concurrent users. Peers appreciated the clean code and user-friendly interface.",
    learnings:
      "Project ownership combined with collaborative feedback creates better outcomes. Clear prioritization prevents team friction and keeps momentum.",
  },
];

export default function Leadership() {
  return (
    <div className="min-h-screen bg-background paper-texture">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="portfolio-container">
          <div className="flex items-center gap-2 text-primary mb-4">
            <span className="text-sm font-semibold fine-stroke">
              👥 LEADERSHIP
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground fine-stroke">
            Collaborative & Leadership Experiences
          </h1>
          <p className="text-lg text-foreground font-medium max-w-2xl">
            Experiences leading teams, mentoring peers, and collaborating across
            diverse groups. Each demonstrates commitment to enabling others and
            achieving shared goals.
          </p>
        </div>
      </section>

      {/* Leadership Experiences */}
      <section className="section-padding border-b border-border">
        <div className="portfolio-container space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="folded-note p-8 md:p-10 fold-shadow-2 paper-corner paper-texture hover:fold-shadow-deep transition-all"
            >
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2 text-foreground fine-stroke">
                  {exp.title}
                </h2>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-md font-semibold">
                    {exp.organization}
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-md font-semibold">
                    {exp.date}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground leading-relaxed font-medium mb-6 pb-6 border-b border-border">
                {exp.description}
              </p>

              {/* Four Pillars Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-foreground mb-2 fine-stroke text-sm uppercase">
                    Team Dynamics
                  </h3>
                  <p className="text-foreground text-sm font-medium">
                    {exp.teamDynamics}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2 fine-stroke text-sm uppercase">
                    Challenges Faced
                  </h3>
                  <p className="text-foreground text-sm font-medium">
                    {exp.challenges}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2 fine-stroke text-sm uppercase">
                    Conflict Resolution
                  </h3>
                  <p className="text-foreground text-sm font-medium">
                    {exp.conflictResolution}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2 fine-stroke text-sm uppercase">
                    Outcomes
                  </h3>
                  <p className="text-foreground text-sm font-medium">
                    {exp.outcomes}
                  </p>
                </div>
              </div>

              {/* Learnings */}
              <div className="pt-4 border-t border-border">
                <h3 className="font-bold text-foreground mb-2 fine-stroke">
                  Key Learning
                </h3>
                <p className="text-foreground font-medium italic">
                  {exp.learnings}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Qualities */}
      <section className="py-12 md:py-16 bg-primary/5 border-b border-border">
        <div className="portfolio-container">
          <h2 className="section-title">Core Leadership Qualities</h2>
          <p className="section-subtitle">
            Principles that guide my approach to leadership and collaboration
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Collaborative Culture",
                description:
                  "I believe in building inclusive teams where every voice matters. Leadership means creating psychological safety for others to contribute their best ideas.",
              },
              {
                icon: Target,
                title: "Clear Communication",
                description:
                  "Translating vision into actionable items and maintaining transparency about progress, challenges, and decisions keeps teams aligned and motivated.",
              },
              {
                icon: Award,
                title: "Empowerment & Growth",
                description:
                  "Great leaders develop other leaders. I focus on delegating meaningful work and providing feedback that helps teammates grow beyond current capabilities.",
              },
            ].map((qual, idx) => {
              const Icon = qual.icon;
              return (
                <div
                  key={idx}
                  className="folded-note p-8 hover:fold-shadow-2 transition-all paper-corner paper-texture"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-foreground fine-stroke">
                    {qual.title}
                  </h3>
                  <p className="text-foreground font-medium leading-relaxed">
                    {qual.description}
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
                Understanding Ethical Leadership
              </h2>
              <p className="text-muted-foreground font-medium">
                Explore the ethical considerations that shape my leadership
                approach
              </p>
            </div>
            <Link to="/ethics" className="paper-button">
              View Ethics
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

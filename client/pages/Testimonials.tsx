import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    title: "Computer Science Faculty & Academic Advisor",
    affiliation: "Pandit Deendayal Energy University",
    message:
      "Shlok is an exceptional student with outstanding academic performance (CGPA 9.91). He demonstrates strong problem-solving skills, excellent grasp of data structures and algorithms, and a genuine passion for applying technology to real-world challenges. His ability to balance academic excellence with practical projects is remarkable.",
    rating: 5,
  },
  {
    name: "Rahul Patel",
    title: "Senior Engineer & JPMC Code for Good Judge",
    affiliation: "JP Morgan Chase Technology Division",
    message:
      "Among thousands of applicants, Shlok's team stood out for their innovative Milestone Tracker solution. His technical execution was impressive—particularly the AI chatbot integration and multilingual support showcased maturity in full-stack development. Clear communication and thoughtful design decisions demonstrated professional-level thinking.",
    rating: 5,
  },
  {
    name: "Anuj Sharma",
    title: "Technical Lead & Hackathon Mentor",
    affiliation: "Odoo India Hackathon 2025",
    message:
      "Shlok brings impressive technical skills combined with rapid prototyping ability. In our hackathon, he demonstrated the capacity to learn new frameworks quickly and deliver functional solutions under pressure. His collaborative spirit and willingness to help teammates elevated the entire team's performance.",
    rating: 5,
  },
  {
    name: "Maya Desai",
    title: "Team Member & Project Collaborator",
    affiliation: "JPMC Code for Good 2025 Team",
    message:
      "Working with Shlok in the hackathon was exceptional. He's collaborative, actively listens to feedback, and has strong communication skills. His ability to translate requirements into working features while maintaining code quality is impressive. He didn't just code—he mentored and elevated the team.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    title: "Senior Coursemate & Peer Mentor",
    affiliation: "Data Structures Study Group, PDEU",
    message:
      "Shlok consistently demonstrates deep understanding of complex concepts. Beyond academics, he's approachable and willing to help others understand difficult topics. His explanations are clear and patient. His passion for learning is evident in every project he undertakes and every discussion we have.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    title: "Technical Reviewer & Code Quality Mentor",
    affiliation: "Exercise Tracker Project Feedback",
    message:
      "Shlok is a self-motivated learner who takes ownership of his work. He's proactive in seeking feedback, implements solutions thoughtfully, and consistently delivers quality output. Beyond technical skills, he demonstrates maturity in understanding non-functional requirements and user experience considerations.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-background paper-texture">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="portfolio-container">
          <div className="flex items-center gap-2 text-primary mb-4">
            <span className="text-sm font-semibold fine-stroke">
              ⭐ RECOMMENDATIONS
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground fine-stroke">
            Testimonials
          </h1>
          <p className="text-lg text-foreground font-medium max-w-2xl">
            Feedback and recommendations from mentors, professors, managers, and
            colleagues who have worked with me and can speak to my abilities,
            work ethic, and character.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding border-b border-border">
        <div className="portfolio-container">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="folded-note p-8 hover:fold-shadow-deep hover:-translate-y-1 transition-all paper-corner paper-texture"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Message */}
                <p className="text-foreground leading-relaxed mb-6 italic font-medium">
                  "{testimonial.message}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-foreground fine-stroke">
                    {testimonial.name}
                  </p>
                  <p className="text-primary font-semibold text-sm fine-stroke">
                    {testimonial.title}
                  </p>
                  <p className="text-foreground text-sm font-medium">
                    {testimonial.affiliation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overall Assessment */}
      <section className="py-12 md:py-16 bg-background border-b border-border">
        <div className="portfolio-container">
          <h2 className="section-title">Summary of Feedback Themes</h2>
          <p className="section-subtitle">
            Common strengths identified across testimonials
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Intellectual Excellence",
                description: "Strong analytical and critical thinking skills",
              },
              {
                title: "Leadership",
                description: "Ability to guide teams and drive results",
              },
              {
                title: "Collaboration",
                description: "Excellent communication and teamwork",
              },
              {
                title: "Reliability",
                description: "Consistent delivery and professional conduct",
              },
            ].map((theme) => (
              <div
                key={theme.title}
                className="folded-note p-6 text-center hover:fold-shadow-2 transition-all paper-corner paper-texture"
              >
                <h3 className="font-bold text-lg mb-2 text-foreground fine-stroke">
                  {theme.title}
                </h3>
                <p className="text-foreground text-sm font-medium">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Recommendation */}
      <section className="section-padding border-b border-border">
        <div className="portfolio-container folded-note p-12 text-center fold-shadow-deep paper-corner paper-texture">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground fine-stroke">
            Letters of Recommendation Available
          </h2>
          <p className="text-foreground font-medium max-w-2xl mx-auto mb-6">
            Full letters of recommendation from academic advisors and
            professional colleagues are available upon request for academic and
            job applications.
          </p>
          <button className="paper-button">
            Contact for References
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
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

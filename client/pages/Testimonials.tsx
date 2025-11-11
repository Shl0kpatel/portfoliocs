import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Himanshu Gajera",
    title: "Computer Science Faculty & Mentor",
    affiliation: "Pandit Deendayal Energy University",
    message:
      "Shlok is an exceptional student with outstanding academic performance. He demonstrates strong problem-solving skills, excellent grasp of data structures and algorithms, and a genuine passion for applying technology to real-world challenges. His ability to balance academic excellence with practical projects is remarkable.",
    rating: 4,
  },
  {
    name: "Jignesh Khona",
    title: "Senior Engineer & JPMC Code for Good Judge",
    affiliation: "JP Morgan Chase Technology Division",
    message:
      "Among thousands of applicants, Shlok's team stood out for their innovative Milestone Tracker solution. Their technical execution was impressive—particularly the AI chatbot integration and multilingual support showcased maturity in full-stack development. Clear communication and thoughtful design decisions demonstrated professional-level thinking.",
    rating: 5,
  }
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

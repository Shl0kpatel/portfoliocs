import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background paper-texture">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="portfolio-container">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[500px]">
            {/* Left side - Content */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-semibold mb-6 paper-fold fold-shadow-1">
                  ✨ Welcome to My Portfolio
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-foreground fine-stroke">
                Shlok Patel
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg font-medium">
                B.Tech Computer Science student, passionate about Data Science and product-oriented solutions. Explore my projects, achievements, and technical expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="paper-button group"
                >
                  Learn About Me
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/projects"
                  className="paper-button-outline group"
                >
                  View Projects
                  <span className="ml-2 group-hover:rotate-12 transition-transform inline-block">🚀</span>
                </Link>
              </div>

              {/* Stats with folded effect */}
              
            </div>

            {/* Right side - Visual */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-sm gentle-float">
                {/* Paper fold photo frame */}
                <div className="folded-note aspect-square flex items-center justify-center overflow-hidden p-8 paper-corner">
                  <div className="flex flex-col items-center justify-center text-center">
                    {/* Your Photo in Circular Frame */}
                    <div className="w-48 h-48 rounded-full mb-4 overflow-hidden border-4 border-primary/20 shadow-lg">
                      <img src="/profile.jpg" alt="Shlok Patel" className="w-full h-full object-cover"/>
                    </div>
                    <p className="text-lg font-semibold text-foreground fine-stroke">Shlok Patel</p>
                    <p className="text-sm text-muted-foreground font-medium mt-1">B.Tech CS Student</p>
                  </div>
                </div>

                {/* Floating folded card */}
                <div className="absolute -bottom-4 -left-4 folded-note max-w-xs fold-shadow-deep paper-corner">
                  <p className="text-sm font-semibold text-foreground fine-stroke">
                    Pandit Deendayal Energy University
                  </p>
                  <p className="text-muted-foreground text-sm mt-1 font-medium">
                    B.Tech Computer Science Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding border-t border-b border-border">
        <div className="portfolio-container">
          <h2 className="section-title">What You'll Discover</h2>
          <p className="section-subtitle">
            Dive into my academic and professional journey
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Learning Philosophy",
                description:
                  "Explore my personal learning journey and the values that drive my academic pursuits.",
                icon: "📚",
              },
              {
                title: "Advanced Projects",
                description:
                  "Discover interdisciplinary research and innovative projects that showcase problem-solving.",
                icon: "🚀",
              },
              {
                title: "Professional Growth",
                description:
                  "Review my skills, experiences, and achievements across technical and soft domains.",
                icon: "⭐",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="folded-note p-6 hover:fold-shadow-deep transition-all paper-corner paper-texture paper-unfold"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-foreground fine-stroke">{item.title}</h3>
                <p className="text-muted-foreground font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="portfolio-container text-center">
          <h2 className="section-title">Ready to Connect?</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Interested in collaboration or have questions? Let's start a conversation.
          </p>

          <Link
            to="/contact"
            className="paper-button inline-flex text-lg"
          >
            Get In Touch
            <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
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

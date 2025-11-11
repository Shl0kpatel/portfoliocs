import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description: string;
  previousLink?: { label: string; path: string };
  nextLink?: { label: string; path: string };
}

export default function PortfolioPlaceholder({
  title,
  description,
  previousLink,
  nextLink,
}: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-background paper-texture">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="portfolio-container">
          <div className="flex items-center gap-2 text-primary mb-4">
            <span className="text-sm font-semibold fine-stroke">📝 SECTION</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground fine-stroke">{title}</h1>
          <p className="text-lg text-foreground font-medium max-w-2xl">{description}</p>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="section-padding border-b border-border">
        <div className="portfolio-container">
          <div className="folded-note p-12 text-center fold-shadow-deep paper-corner paper-texture">
            <div className="text-6xl mb-6">✨</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground fine-stroke">
              Coming Soon
            </h2>
            <p className="text-foreground font-medium max-w-xl mx-auto mb-8">
              This section is ready to be customized with your specific content.
              Continue prompting to fill in this page with your personal information,
              projects, achievements, and more.
            </p>
            <div className="inline-block folded-note p-4 fold-shadow-1 paper-corner">
              <p className="text-primary font-semibold text-sm fine-stroke">
                💡 Prompt the AI assistant to customize this page with your content
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="portfolio-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {previousLink ? (
              <Link
                to={previousLink.path}
                className="paper-button-outline group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                {previousLink.label}
              </Link>
            ) : (
              <div></div>
            )}

            <Link
              to="/contents"
              className="inline-flex items-center gap-2 px-6 py-3 text-foreground font-bold hover:text-primary transition-colors text-sm fine-stroke"
            >
              Back to Contents
            </Link>

            {nextLink ? (
              <Link
                to={nextLink.path}
                className="paper-button group"
              >
                {nextLink.label}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div></div>
            )}
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

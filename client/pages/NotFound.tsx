import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background paper-texture flex flex-col">
      <Navigation />

      <div className="portfolio-container py-24 md:py-32 flex flex-col items-center justify-center flex-1">
        <div className="text-center">
          <div className="folded-note mb-8 p-8 inline-block fold-shadow-deep paper-corner">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground fine-stroke">
              404
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground fine-stroke">
            Page Not Found
          </h2>
          <p className="text-lg text-foreground font-medium mb-8 max-w-md">
            Sorry, the page you're looking for doesn't exist. Let's get you back
            on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="paper-button"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              to="/contents"
              className="paper-button-outline"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NotFound;

import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="portfolio-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Main Section */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4 fine-stroke">
              Main
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  My Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn Section */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4 fine-stroke">
              Learn
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/skills"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/leadership"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  to="/ethics"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Ethics
                </Link>
              </li>
              <li>
                <Link
                  to="/future"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Future Goals
                </Link>
              </li>
            </ul>
          </div>

          {/* More Section */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4 fine-stroke">
              More
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/resume"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/conclusion"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Conclusion
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1LukwWFOGqg79u1uoS8s-yhcxCY0Br0cK/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4 fine-stroke">
              Social
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Shl0kpatel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shlok-patel-121a982b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:shlok.modasa@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="tel:+917990431911"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Phone
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm font-medium flex items-center gap-2">
              Made with <span className="text-red-500">❤️</span> 
              
            </p>
            <p className="text-muted-foreground text-sm font-medium">
              © {currentYear} Shlok Patel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

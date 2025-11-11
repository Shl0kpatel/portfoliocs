import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Resume", path: "/resume" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Leadership", path: "/leadership" },
  { label: "Ethics", path: "/ethics" },
  { label: "Future", path: "/future" },
  { label: "Conclusion", path: "/conclusion" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 navbar-paper">
      <div className="portfolio-container flex items-center justify-between h-20">
        {/* Origami Logo Mark / Wax Seal */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="nav-logo-mark group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <div className="relative">
              <span className="text-2xl">🦢</span>
            </div>
          </div>
          <span className="font-bold text-lg hidden sm:inline-block text-foreground group-hover:text-primary transition-colors fine-stroke">
            Shlok Patel
          </span>
        </Link>

        {/* Desktop Navigation - Hand-cut Label Tabs */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="nav-label fine-stroke"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="portfolio-container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="nav-label nav-mobile fine-stroke"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

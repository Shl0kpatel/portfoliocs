import Navigation from "@/components/Navigation";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    alert("Message sent! Thank you for reaching out.");

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background paper-texture">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="portfolio-container">
          <div className="flex items-center gap-2 text-primary mb-4">
            <span className="text-sm font-semibold fine-stroke">
              ✉️ CONTACT
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground fine-stroke">
            Let's Connect
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl font-medium">
            Send me a note like slipping a letter into an origami envelope.
          </p>
        </div>
      </section>

      {/* Contact Form - Envelope Style */}
      <section className="section-padding">
        <div className="portfolio-container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground fine-stroke">
                  Get in Touch
                </h2>
                <p className="text-foreground leading-relaxed font-medium mb-8">
                  I'm always open to discussing new opportunities, interesting
                  projects, or potential collaborations. Feel free to reach out
                  through any channel below.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="folded-note p-6 flex items-start gap-4 hover:fold-shadow-2 transition-all paper-corner paper-texture">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 fine-stroke">
                      Email
                    </h3>
                    <a
                      href="mailto:shlok.modasa@gmail.com"
                      className="text-primary hover:underline font-medium"
                    >
                      shlok.modasa@gmail.com
                    </a>
                  </div>
                </div>

                <div className="folded-note p-6 flex items-start gap-4 hover:fold-shadow-2 transition-all paper-corner paper-texture">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 fine-stroke">
                      Phone
                    </h3>
                    <a
                      href="tel:+917990431911"
                      className="text-accent hover:underline font-medium"
                    >
                      +91 7990431911
                    </a>
                  </div>
                </div>

                <div className="folded-note p-6 flex items-start gap-4 hover:fold-shadow-2 transition-all paper-corner paper-texture">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 fine-stroke">
                      Location
                    </h3>
                    <p className="text-foreground font-medium">
                      Gandhinagar, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Origami Crane Watermark */}
              <div className="relative py-12">
                <div className="wax-seal mx-auto">
                  <span>SP</span>
                </div>
              </div>
            </div>

            {/* Contact Form - Envelope with Lined Paper */}
            <div className="contact-envelope">
              {/* Envelope Flap Space */}
              <div className="h-16"></div>

              {/* Form Content - Lined Paper */}
              <div className="lined-paper">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-foreground mb-2 fine-stroke"
                    >
                      <pre> Your Name</pre>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="paper-input"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-foreground mb-2 fine-stroke"
                    >
                      <pre> Email</pre>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="paper-input"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-bold text-foreground mb-2 fine-stroke"
                    >
                      <pre> Subject</pre>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="paper-input"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-foreground mb-2 fine-stroke"
                    >
                      <pre> Your Message</pre>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="paper-input resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="paper-button button-fold-in w-full justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>

                {/* Origami crane watermark */}
                <div className="crane-watermark bottom-left">🕊️</div>
              </div>
            </div>
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

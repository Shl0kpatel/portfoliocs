import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Lightbulb } from "lucide-react";

const ethicalCasestudy = [
  {
    title: "Data Privacy in Milestone Tracker",
    context:
      "During JPMC Code for Good 2025, our team built a milestone tracking system for SpacECE NGO that would collect sensitive data about beneficiaries and organizational metrics.",
    challenge:
      "How do we balance the need for data collection with the privacy rights of NGO beneficiaries who may be vulnerable populations?",
    approach:
      "We implemented role-based access control, data minimization (collecting only essential fields), and secure encryption. We also included a clear privacy policy and obtained informed consent from stakeholders before data collection.",
    reflection:
      "This experience taught me that ethical considerations must be built into systems from day one, not added as an afterthought. Privacy is a feature, not a burden.",
    impact:
      "Our privacy-first approach was praised by NGO partners and judges, demonstrating that ethics and functionality are complementary, not conflicting.",
  },
  {
    title: "AI Bias in Chatbot Integration",
    context:
      "When integrating Botpress AI chatbot into the Milestone Tracker, we needed to ensure the chatbot provided equitable support across diverse users with varying technical literacy.",
    challenge:
      "AI systems can amplify existing biases. How do we ensure our chatbot doesn't disadvantage certain user groups?",
    approach:
      "We implemented multilingual support to ensure non-English speakers weren't excluded. We tested the chatbot's responses across diverse scenarios and feedback loops to catch biased or discriminatory outputs. We also included human escalation for edge cases.",
    reflection:
      "Building technology with global awareness means considering the diverse contexts where it will be used. Not all users have the same resources or backgrounds.",
    impact:
      "The multilingual and accessible chatbot significantly improved user engagement across different demographics, proving that inclusive design benefits everyone.",
  },
  {
    title: "Code Accessibility & Environmental Impact",
    context:
      "As a developer interested in data science and scalable systems, I've become aware that inefficient code and algorithms can have environmental costs through increased computational resource usage.",
    challenge:
      "How do we write code that is not just functionally correct but also environmentally responsible?",
    approach:
      "I prioritize algorithm efficiency, database optimization, and resource-aware design. In the Exercise Tracker project, I optimized SQLite queries to reduce unnecessary database calls, minimizing energy consumption.",
    reflection:
      "Environmental responsibility in tech is an often-overlooked ethical dimension. As the field grows, the cumulative carbon footprint of inefficient systems becomes significant.",
    impact:
      "Efficient systems are also faster and cheaper to operate, creating a win-win between ethics and business sense.",
  },
];

const globalAwarenessTopics = [
  {
    title: "Global Digital Divide",
    description:
      "Technology amplifies existing inequalities. My experience working with an NGO in India highlighted how internet access, device affordability, and digital literacy are not universal. Solutions designed for privileged contexts fail for others.",
    myPerspective:
      "This shapes my commitment to building inclusive, accessible technology that works for users with limited resources.",
  },
  {
    title: "AI Ethics & Algorithmic Fairness",
    description:
      "As AI becomes ubiquitous, algorithmic bias in hiring, lending, and criminal justice systems perpetuates historical discrimination. Technical professionals bear responsibility for the systems they build.",
    myPerspective:
      "I advocate for transparency in AI systems, bias auditing, and human oversight—especially in high-stakes domains.",
  },
  {
    title: "Data Sovereignty & Privacy Rights",
    description:
      "With increasing data breaches and surveillance, individuals' fundamental right to privacy is under threat. Organizations often prioritize convenience over security.",
    myPerspective:
      "I believe companies should default to user privacy and minimize data collection. Users should have control over their personal information.",
  },
  {
    title: "Sustainability in Tech",
    description:
      "Data centers consume massive amounts of energy. As the digital economy grows, the environmental impact of technology is a pressing global concern.",
    myPerspective:
      "Building efficient, sustainable systems is both an ethical and practical imperative. Sustainable tech is often better tech.",
  },
];

export default function Ethics() {
  return (
    <div className="min-h-screen bg-background paper-texture">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="portfolio-container">
          <div className="flex items-center gap-2 text-primary mb-4">
            <span className="text-sm font-semibold fine-stroke">🌍 ETHICS</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground fine-stroke">
            Global Awareness & Ethical Considerations
          </h1>
          <p className="text-lg text-foreground font-medium max-w-2xl">
            How global issues, ethical dilemmas, and societal impact shape my approach to technology and professional responsibility.
          </p>
        </div>
      </section>

      {/* Ethical Perspective Statement */}
      <section className="section-padding border-b border-border">
        <div className="portfolio-container">
          <div className="letter-container">
            <h2 className="letter-title">My Ethical Foundation</h2>
            <div className="relative z-10 space-y-4 text-foreground leading-relaxed font-medium">
              <p>
                As a technology professional, I recognize that my work doesn't exist in isolation. Every system I build, every line of code I write, has potential consequences for real people and communities. This awareness drives my commitment to ethical software development.
              </p>
              <p>
                I believe that technical excellence and ethical responsibility are inseparable. A technically brilliant system that violates privacy, amplifies bias, or ignores accessibility is fundamentally flawed. Conversely, ethical considerations inform better design decisions and create stronger, more resilient systems.
              </p>
              <p>
                My ethical approach is grounded in three principles: <span className="font-bold">Responsibility</span> (owning the impact of my work), <span className="font-bold">Transparency</span> (making decisions visible and accountable), and <span className="font-bold">Inclusivity</span> (considering diverse voices and contexts).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding border-b border-border">
        <div className="portfolio-container">
          <h2 className="section-title">Ethical Case Studies</h2>
          <p className="section-subtitle">
            Real situations where ethical considerations shaped my decisions
          </p>

          <div className="space-y-8">
            {ethicalCasestudy.map((caseStudy, idx) => (
              <div
                key={idx}
                className="folded-note p-8 md:p-10 fold-shadow-2 paper-corner paper-texture hover:fold-shadow-deep transition-all"
              >
                <h3 className="text-2xl font-bold mb-4 text-foreground fine-stroke">
                  {caseStudy.title}
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6 pb-6 border-b border-border">
                  <div>
                    <h4 className="font-bold text-foreground mb-2 fine-stroke text-sm uppercase">
                      Context
                    </h4>
                    <p className="text-foreground text-sm font-medium">{caseStudy.context}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2 fine-stroke text-sm uppercase">
                      Ethical Challenge
                    </h4>
                    <p className="text-foreground text-sm font-medium italic">{caseStudy.challenge}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-2 fine-stroke text-sm uppercase">
                      My Approach
                    </h4>
                    <p className="text-foreground text-sm font-medium">{caseStudy.approach}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2 fine-stroke text-sm uppercase">
                      Reflection & Impact
                    </h4>
                    <p className="text-foreground text-sm font-medium">{caseStudy.reflection}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-foreground font-medium">
                    <span className="font-bold">Impact: </span>{caseStudy.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Awareness Topics */}
      <section className="py-12 md:py-16 bg-background border-b border-border">
        <div className="portfolio-container">
          <h2 className="section-title">Global Issues Shaping My Perspective</h2>
          <p className="section-subtitle">
            Broader global challenges influencing my approach to technology
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {globalAwarenessTopics.map((topic, idx) => (
              <div
                key={idx}
                className="folded-note p-8 hover:fold-shadow-2 transition-all paper-corner paper-texture"
              >
                <h3 className="text-xl font-bold mb-4 text-foreground fine-stroke">{topic.title}</h3>
                <p className="text-foreground font-medium mb-4">{topic.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-foreground text-sm font-medium italic">
                    <span className="font-bold">My Perspective: </span>{topic.myPerspective}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Change */}
      <section className="section-padding border-b border-border">
        <div className="portfolio-container">
          <h2 className="section-title">My Commitment Moving Forward</h2>
          <p className="section-subtitle">
            How I will translate ethical awareness into action
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Advocate for Privacy & Security",
                commitment:
                  "I will prioritize data protection and security in every system I build. I will push back against practices that unnecessarily collect or expose user data.",
              },
              {
                icon: Lightbulb,
                title: "Design for Accessibility",
                commitment:
                  "Inclusive design isn't an afterthought. I commit to building systems that work for users with disabilities, limited connectivity, and diverse technical backgrounds.",
              },
              {
                icon: Globe,
                title: "Promote Ethical Tech Culture",
                commitment:
                  "I will actively participate in conversations about ethics in tech, mentor others on responsible development, and seek roles in organizations that share these values.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="folded-note p-8 hover:fold-shadow-2 transition-all paper-corner paper-texture"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-3 text-foreground fine-stroke">{item.title}</h3>
                  <p className="text-foreground font-medium text-sm leading-relaxed">{item.commitment}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary/5 border-b border-border">
        <div className="portfolio-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground fine-stroke">
                Explore My Future Direction
              </h2>
              <p className="text-muted-foreground font-medium">
                Learn about my career aspirations and continuous learning plans
              </p>
            </div>
            <Link
              to="/future"
              className="paper-button"
            >
              View Future Goals
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
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

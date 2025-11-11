import PortfolioPlaceholder from "./PortfolioPlaceholder";

export default function Conclusion() {
  return (
    <PortfolioPlaceholder
      title="Conclusion & Self-Assessment"
      description="Summarize key achievements, lessons learned, and areas for growth. Include personal reflections, self-evaluation, and SWOT analysis."
      previousLink={{ label: "Future Aspirations", path: "/future" }}
      nextLink={{ label: "Testimonials", path: "/testimonials" }}
    />
  );
}

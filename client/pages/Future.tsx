import PortfolioPlaceholder from "./PortfolioPlaceholder";

export default function Future() {
  return (
    <PortfolioPlaceholder
      title="Future Aspirations & Professional Development"
      description="Outline your career goals, areas for further study, and strategies for continuous improvement and lifelong learning."
      previousLink={{ label: "Ethical Considerations", path: "/ethics" }}
      nextLink={{ label: "Conclusion", path: "/conclusion" }}
    />
  );
}

import PortfolioPlaceholder from "./PortfolioPlaceholder";

export default function Leadership() {
  return (
    <PortfolioPlaceholder
      title="Collaborative & Leadership Experiences"
      description="Detail experiences where you led or collaborated in teams, including roles, responsibilities, team dynamics, conflict resolution, and achievements."
      previousLink={{ label: "Skills", path: "/skills" }}
      nextLink={{ label: "Ethical Considerations", path: "/ethics" }}
    />
  );
}

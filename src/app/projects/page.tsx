import Card from "@/components/Card";

const projects = [
  {
    title: "Internal Security Governance Web App",
    description:
      "An enterprise tool to manage CRI, Policies, and Third-Party Cyber Risk. Built with React + TypeScript frontend and AWS Python backend.",
  },
  {
    title: "AWS Risk Automation Workflow",
    description:
      "Implemented Step Functions & Lambda-based workflows for automating risk assessments and policy approvals.",
  },
];

export default function Projects() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <Card key={p.title} title={p.title} description={p.description} />
        ))}
      </div>
    </section>
  );
}

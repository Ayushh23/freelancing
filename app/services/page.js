import ServicesInteractive from "../../components/ServicesInteractive";
import Testimonials from "../../components/Testimonials";

export const metadata = {
  title: "Services & Engineering | AutoHub Labs Pvt. Ltd.",
  description:
    "Explore our core engineering capabilities: Automation, Custom RAG AI Agents, Next.js Web Platforms, and API Middleware.",
};

export default function ServicesPage() {
  return (
    <main className="page">
      <ServicesInteractive />
      <Testimonials />
    </main>
  );
}

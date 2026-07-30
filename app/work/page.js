import WorkInteractive from "../../components/WorkInteractive";
import Testimonials from "../../components/Testimonials";

export const metadata = {
  title: "Case Studies & Work | AutoHub Labs Pvt. Ltd.",
  description:
    "Real operational case studies: AI agents, web platforms, and workflow automation systems built for business impact.",
};

export default function WorkPage() {
  return (
    <main className="page">
      <WorkInteractive />
      <Testimonials />
    </main>
  );
}

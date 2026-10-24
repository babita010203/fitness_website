import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import ProgramCard from "../ProgramCard";
import Button from "../Button";
import { programs } from "../../data/programs";

export default function ProgramsPreview() {
  return (
    <section className="bg-ink-2 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Programs" title="Train with purpose" />
          <Link to="/programs">
            <Button variant="secondary">View All Programs</Button>
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.slice(0, 6).map((program) => (
            <ProgramCard key={program.id} program={program} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

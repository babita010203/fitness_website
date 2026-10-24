import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import TrainerCard from "../TrainerCard";
import Button from "../Button";
import { trainers } from "../../data/trainers";

export default function TrainersPreview() {
  return (
    <section className="bg-ink-2 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Coaches" title="Meet your coaches" />
          <Link to="/trainers">
            <Button variant="secondary">Meet All Trainers</Button>
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.slice(0, 4).map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </div>
    </section>
  );
}

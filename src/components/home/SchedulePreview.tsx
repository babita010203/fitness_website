import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import ClassCard from "../ClassCard";
import Button from "../Button";
import { gymClasses } from "../../data/classes";

export default function SchedulePreview() {
  const preview = gymClasses.filter((c) => c.day === "Monday");

  return (
    <section className="bg-ink-2 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Schedule"
            title="This week's energy"
            subtitle="A snapshot of Monday — full timetable lives on the schedule page."
          />
          <Link to="/schedule">
            <Button variant="secondary">Full Schedule</Button>
          </Link>
        </div>
        <div className="mt-10 grid gap-4">
          {preview.map((item) => (
            <ClassCard key={item.id} gymClass={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

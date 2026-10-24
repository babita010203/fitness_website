import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import WhyChoose from "../components/home/WhyChoose";
import ProgramsPreview from "../components/home/ProgramsPreview";
import Transformations from "../components/home/Transformations";
import TrainersPreview from "../components/home/TrainersPreview";
import MembershipPreview from "../components/home/MembershipPreview";
import SchedulePreview from "../components/home/SchedulePreview";
import Testimonials from "../components/home/Testimonials";
import GalleryPreview from "../components/home/GalleryPreview";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import SectionHeading from "../components/SectionHeading";
import { faqs } from "../data/content";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta(
    "IronForge Fitness | Build Your Strongest Self",
    "Premium gym in Bhubaneswar. Expert coaching, strength programs, and a community built for results. Book a free trial.",
  );

  return (
    <>
      <Hero />
      <Stats />
      <WhyChoose />
      <ProgramsPreview />
      <Transformations />
      <TrainersPreview />
      <MembershipPreview />
      <SchedulePreview />
      <Testimonials />
      <GalleryPreview />
      <section className="mx-auto max-w-4xl px-4 py-20 md:py-28">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" align="center" />
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
      </section>
      <CTASection />
    </>
  );
}

import SectionHeading from "../SectionHeading";
import Gallery from "../Gallery";
import { galleryImages } from "../../data/content";

export default function GalleryPreview() {
  return (
    <section className="bg-ink-2 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Inside the club" title="The floor. The work. The standard." />
        <div className="mt-12">
          <Gallery images={galleryImages} />
        </div>
      </div>
    </section>
  );
}

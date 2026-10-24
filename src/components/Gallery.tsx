import { useState } from "react";
import type { GalleryImage } from "../types";
import Modal from "./Modal";

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {images.map((img) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setActive(img)}
            className={`group relative overflow-hidden rounded-xl ${
              img.span === "wide" ? "col-span-2" : ""
            } ${img.span === "tall" ? "row-span-2 min-h-[280px]" : "min-h-[180px]"}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink/20 transition group-hover:bg-ink/5" />
          </button>
        ))}
      </div>
      <Modal open={Boolean(active)} onClose={() => setActive(null)} title="Gallery" wide>
        {active ? (
          <img src={active.src} alt={active.alt} className="w-full rounded-lg object-cover" />
        ) : null}
      </Modal>
    </>
  );
}

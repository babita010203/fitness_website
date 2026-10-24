import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";
import type { Trainer } from "../types";

interface TrainerCardProps {
  trainer: Trainer;
  detailed?: boolean;
}

export default function TrainerCard({ trainer, detailed }: TrainerCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/8 bg-ink-3">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={trainer.image}
          alt={`Coach ${trainer.name}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute right-3 bottom-3 flex gap-2">
          <a
            href={trainer.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label={`${trainer.name} on Instagram`}
            className="rounded-full bg-ink/70 p-2 text-cream backdrop-blur hover:text-lime"
          >
            <InstagramIcon size={16} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label={`${trainer.name} on Facebook`}
            className="rounded-full bg-ink/70 p-2 text-cream backdrop-blur hover:text-lime"
          >
            <FacebookIcon size={16} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label={`${trainer.name} on YouTube`}
            className="rounded-full bg-ink/70 p-2 text-cream backdrop-blur hover:text-lime"
          >
            <YoutubeIcon size={16} />
          </a>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl uppercase">{trainer.name}</h3>
        <p className="mt-1 text-sm text-lime">{trainer.role}</p>
        <p className="mt-1 text-xs tracking-wide text-muted uppercase">{trainer.experience}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {trainer.specializations.map((item) => (
            <span key={item} className="rounded-md bg-white/5 px-2 py-1 text-[11px] text-cream/80">
              {item}
            </span>
          ))}
        </div>
        {detailed ? (
          <p className="mt-3 text-sm leading-relaxed text-muted">{trainer.bio}</p>
        ) : null}
      </div>
    </article>
  );
}

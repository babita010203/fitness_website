interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-lime uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-none text-cream uppercase sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base text-muted md:text-lg">{subtitle}</p> : null}
    </div>
  );
}

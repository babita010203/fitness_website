import Button from "./Button";

export default function EmptyState({
  title,
  message,
  onClear,
}: {
  title: string;
  message: string;
  onClear: () => void;
}) {
  return (
    <div className="rounded-xl border border-dashed border-white/15 px-6 py-16 text-center">
      <h3 className="font-display text-3xl uppercase">{title}</h3>
      <p className="mt-2 text-muted">{message}</p>
      <Button className="mt-6" variant="secondary" onClick={onClear}>
        Clear Filters
      </Button>
    </div>
  );
}

export function FilterPills<T extends string>({
  options,
  value,
  onChange,
}: {
  options: T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
            value === opt ? "bg-lime text-ink" : "border border-white/10 text-cream/80 hover:border-lime/50"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

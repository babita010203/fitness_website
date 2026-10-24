import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-lime text-ink hover:bg-lime-dim shadow-[0_0_0_1px_rgba(200,245,66,0.2)] hover:-translate-y-0.5",
  secondary:
    "border border-cream/20 bg-transparent text-cream hover:border-lime hover:text-lime",
  ghost: "bg-cream/10 text-cream hover:bg-cream/16",
  dark: "bg-ink text-cream hover:bg-ink-2",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

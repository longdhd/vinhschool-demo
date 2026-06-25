import { type ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  children: ReactNode;
  eyebrow?: string;
  className?: string;
  titleClassName?: string;
};

export default function FeatureCard({
  title,
  children,
  eyebrow,
  className = "",
  titleClassName = "text-xl font-semibold text-slate-900",
}: FeatureCardProps) {
  return (
    <div className={`rounded-3xl border p-6 ${className}`}>
      {eyebrow && (
        <p className="text-lg font-semibold uppercase tracking-wider text-cyan-600">
          {eyebrow}
        </p>
      )}
      <h3 className={titleClassName}>{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

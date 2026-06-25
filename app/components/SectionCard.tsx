import { type ReactNode } from "react";

type SectionCardProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionCard({
  children,
  className = "",
}: SectionCardProps) {
  return (
    <div
      className={`rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}

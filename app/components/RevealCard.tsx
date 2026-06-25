import { type ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

type RevealCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function RevealCard({
  children,
  className = "",
  delay = 0,
}: RevealCardProps) {
  return (
    <ScrollReveal className="h-full" delay={delay}>
      <div className={`h-full ${className}`}>{children}</div>
    </ScrollReveal>
  );
}

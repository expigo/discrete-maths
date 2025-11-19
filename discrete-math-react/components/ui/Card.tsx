import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title?: string;
  className?: string;
  variant?: "default" | "definition" | "theorem" | "example" | "proof";
}

export function Card({ children, title, className = "", variant = "default" }: CardProps) {
  const variants = {
    default: "bg-gray-800/50 border-gray-700",
    definition: "bg-blue-900/20 border-blue-500/50",
    theorem: "bg-purple-900/20 border-purple-500/50",
    example: "bg-green-900/20 border-green-500/50",
    proof: "bg-orange-900/20 border-orange-500/50",
  };

  const headerColors = {
    default: "bg-gray-700",
    definition: "bg-blue-600",
    theorem: "bg-purple-600",
    example: "bg-green-600",
    proof: "bg-orange-600",
  };

  return (
    <div className={`rounded-lg border ${variants[variant]} backdrop-blur-sm ${className}`}>
      {title && (
        <div className={`${headerColors[variant]} px-4 py-2 rounded-t-lg`}>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wide">{title}</h3>
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
}

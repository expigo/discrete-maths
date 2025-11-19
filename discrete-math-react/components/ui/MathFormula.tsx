"use client";

import { useEffect, useRef } from "react";
import katex from "katex";

interface MathFormulaProps {
  formula: string;
  display?: boolean;
  className?: string;
}

export function MathFormula({ formula, display = false, className = "" }: MathFormulaProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      try {
        katex.render(formula, ref.current, {
          displayMode: display,
          throwOnError: false,
        });
      } catch (error) {
        console.error("KaTeX rendering error:", error);
        if (ref.current) {
          ref.current.textContent = formula;
        }
      }
    }
  }, [formula, display]);

  return (
    <span
      ref={ref}
      className={`${display ? "block my-4" : "inline"} ${className}`}
    />
  );
}

"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  as?: ElementType;
  /** Opóźnienie w ms — pozwala „kaskadować” elementy w siatce. */
  delay?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Delikatne pojawianie się przy przewijaniu.
 *
 * Dwie ważne decyzje:
 *  1. `data-armed` ustawiane jest dopiero w `useEffect`, więc bez JavaScriptu
 *     (i w treści indeksowanej przez wyszukiwarki) zawartość jest widoczna.
 *  2. `prefers-reduced-motion` wyłącza animację w CSS, nie w JS.
 */
export function Reveal({ as: Tag = "div", delay = 0, className, children }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // Element już w kadrze przy pierwszym renderze (np. hero) - nie chowamy go.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      setArmed(true);
      const id = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(id);
    }

    setArmed(true);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      data-armed={armed ? "true" : undefined}
      data-visible={visible ? "true" : undefined}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}

// src/components/hero/NetworkBackground.tsx
import { useEffect, useRef } from "react";

export function NetworkBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const nodes = Array.from(container.children) as HTMLElement[];

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 8;
      const y = (e.clientY / innerHeight - 0.5) * 8;

      nodes.forEach((node, i) => {
        const depth = (i % 6 + 1) / 12;
        node.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const POINTS = isMobile ? 14 : 28;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Pontos */}
      {[...Array(POINTS)].map((_, i) => (
        <span
          key={`point-${i}`}
          className="absolute rounded-full bg-[#1c174b]/15 animate-pulse"
          style={{
            width: isMobile ? "3px" : "4px",
            height: isMobile ? "3px" : "4px",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );
}

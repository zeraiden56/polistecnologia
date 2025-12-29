import { useEffect, useRef } from "react";

export function NetworkBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const nodes = Array.from(container.children) as HTMLElement[];

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;

      nodes.forEach((node, i) => {
        const depth = (i % 6 + 1) * 0.08;
        node.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {/* Pontos */}
      {[...Array(32)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#1c174b]/25"
          style={{
            width: "3px",
            height: "3px",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

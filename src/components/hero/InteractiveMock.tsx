import { useRef } from "react";

interface Props {
  dark?: boolean;
  placeholder?: string;
}

export function InteractiveMock({ dark, placeholder }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;

    el.style.transform = `
      scale(1.04)
      translate(${x}px, ${y}px)
    `;
  }

  function reset() {
    if (!ref.current) return;
    ref.current.style.transform = "scale(1) translate(0, 0)";
  }

  return (
    <div
      className={`
        hidden md:flex
        items-center justify-center
        h-72 rounded-2xl
        overflow-hidden
        transition-shadow duration-300
        ${dark
          ? "bg-white/5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
          : "bg-white border shadow-sm hover:shadow-xl"}
      `}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      <div
        ref={ref}
        className="
          flex h-full w-full items-center justify-center
          transition-transform duration-300 ease-out
        "
      >
        <span
          className={`
            text-sm select-none
            ${dark ? "text-white/40" : "text-slate-400"}
          `}
        >
          {placeholder ?? "Mock interativo (hover para explorar)"}
        </span>
      </div>
    </div>
  );
}

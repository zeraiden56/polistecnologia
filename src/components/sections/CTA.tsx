import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-b from-[#fdfdff] via-[#f1f3fa] to-[#e9ecf5]
        py-28 px-6 text-center
      "
    >
      {/* Shooting stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <span
            key={`star-${i}`}
            className="
              absolute
              h-px w-40
              bg-gradient-to-r from-transparent via-[#1c174b]/60 to-transparent
              animate-shooting-star
            "
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
              transform: "rotate(-45deg)",
            }}
          />
        ))}
      </div>

      {/* Partículas suaves */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <span
            key={`particle-${i}`}
            className="absolute rounded-full bg-[#1c174b]/10 animate-float-slow"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${14 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Gradiente radial para foco */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,rgba(28,23,75,0.12),transparent_65%)]
          pointer-events-none
        "
      />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="mb-6 text-3xl font-bold text-[#1c174b] md:text-4xl">
          Pronto para transformar sua gestão?
        </h2>

        <p className="mx-auto mb-12 max-w-xl text-[#1c174b]/70">
          Nossa equipe está pronta para apresentar a solução ideal para sua
          instituição.
        </p>

        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="
              px-10 py-6
              bg-[#1c174b] text-white
              border border-[#1c174b]
              hover:bg-white hover:text-[#1c174b]
              transition-all duration-300
              shadow-lg
            "
          >
            Agendar Demonstração
          </Button>

          <Button
            size="lg"
            className="
              px-10 py-6
              bg-white text-[#1c174b]
              border border-[#1c174b]
              hover:bg-[#1c174b] hover:text-white
              transition-all duration-300
              shadow-md
            "
          >
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
}

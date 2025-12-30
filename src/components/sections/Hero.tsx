import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-polis.png";
import { NetworkBackground } from "@/components/hero/NetworkBackground";
import { NetworkCanvas } from "@/components/hero/NetworkCanvas";
import { TypingTitle } from "@/components/hero/TypingTitle";

export function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative flex
        min-h-[90vh] md:min-h-screen
        items-start justify-center
        bg-[#fdfdff]
        px-4 md:px-6
        pt-36 md:pt-48
        text-center
        overflow-hidden
      "
    >
      <NetworkBackground />
      <NetworkCanvas />

      {/* Gradientes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(28,23,75,0.14),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c174b]/6 via-transparent to-transparent pointer-events-none" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-5xl">
        {/* Logo */}
        <img
          src={logo}
          alt="Polis Tecnologia"
          className="
            mx-auto mb-4
            h-40 sm:h-44 md:h-56 lg:h-64 xl:h-72
            w-auto
          "
        />

        {/* Título com typing */}
        <h1
          className="
            mb-6 font-bold leading-tight
            text-[#1c174b]
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
          "
        >
          <TypingTitle text="Controle, Transparência e Eficiência na Gestão de Contratos Públicos" />
        </h1>

        {/* Subtítulo */}
        <p
          className="
            mx-auto mb-8
            max-w-xl md:max-w-3xl
            text-sm sm:text-base md:text-lg
            text-[#1c174b]/80
          "
        >
          A solução definitiva para gestores que buscam total visibilidade e
          conformidade no acompanhamento da execução contratual, do início ao fim.
        </p>

        {/* Botões */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="
              px-10 py-5 text-base md:text-lg
              bg-[#1c174b] text-white
              hover:bg-white hover:text-[#1c174b]
              border border-[#1c174b]
              transition-all duration-300
              shadow-md
            "
            asChild
          >
            <a href="#solucoes">Conhecer Soluções</a>
          </Button>

          <Button
            size="lg"
            className="
              px-10 py-5 text-base md:text-lg
              bg-white text-[#1c174b]
              border border-[#1c174b]
              hover:bg-[#1c174b] hover:text-white
              transition-all duration-300
              shadow-md
            "
          >
            Agendar Demonstração
          </Button>
        </div>
      </div>

      {/* Saiba mais */}
      <div
        className="
          absolute bottom-6 md:bottom-10
          left-1/2 -translate-x-1/2
          animate-bounce z-10
        "
      >
        <a
          href="#sobre"
          className="
            flex flex-col items-center
            text-lg md:text-2xl
            text-[#1c174b]/60
            hover:text-[#1c174b]
          "
        >
          <span className="hidden md:block font-medium">Saiba mais</span>
          <span className="text-3xl md:text-5xl mt-1">↓</span>
        </a>
      </div>
    </section>
  );
}

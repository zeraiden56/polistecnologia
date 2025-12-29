import { Briefcase, FileText, ShieldCheck } from "lucide-react";

export function About() {
  return (
    <section
      id="sobre"
      className="
        relative
        bg-gradient-to-b
        from-[#f1f3f9]
        via-[#e9ecf5]
        to-slate-100
        py-24 md:py-28 px-6
      "
    >
      {/* Gradiente superior de continuidade */}
      <div
        className="
          absolute inset-x-0 top-0 h-32
          bg-[linear-gradient(to_bottom,rgba(28,23,75,0.12),transparent)]
          pointer-events-none
        "
      />

      <div className="relative mx-auto max-w-7xl grid gap-14 md:grid-cols-2 items-center">
        {/* Texto */}
        <div className="max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#1c174b]/80">
            Sobre nós
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#1c174b] md:text-4xl">
            Transformando a gestão pública
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#1c174b]/70">
            Desenvolvemos soluções especializadas para garantir controle,
            conformidade e transparência na execução de contratos públicos,
            apoiando gestores em decisões estratégicas, responsáveis e baseadas
            em dados.
          </p>
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
            {
            value: "X+",
            label: "Anos de experiência",
            icon: Briefcase,
            },
            {
            value: "X+",
            label: "Contratos acompanhados",
            icon: FileText,
            },
            {
            value: "99%",
            label: "Conformidade",
            icon: ShieldCheck,
            },
        ].map((item) => (
            <div
            key={item.label}
            className="
                flex flex-col sm:flex-row items-center sm:items-start
                gap-4
                rounded-xl
                bg-white
                px-6 py-7
                shadow-sm
                border border-slate-100
                text-center sm:text-left
            "
            >
            <div
                className="
                flex h-12 w-12 items-center justify-center
                rounded-full
                bg-[#1c174b]/10
                text-[#1c174b]
                mt-0.5
                "
            >
                <item.icon className="h-6 w-6" />
            </div>

            <div>
                <p className="text-2xl font-bold text-[#1c174b] leading-tight">
                {item.value}
                </p>
                <p className="mt-1 text-sm text-[#1c174b]/60">
                {item.label}
                </p>
            </div>
            </div>
        ))}
        </div>

      </div>
    </section>
  );
}

import { Briefcase, FileText, ShieldCheck } from "lucide-react";

export function About() {
  return (
    <section
      id="sobre"
      className="
        relative
        py-24 md:py-28 px-6
        scroll-mt-24
        bg-gradient-to-b
        from-[#f6f8fd]
        via-[#f2f4fa]
        to-[#eef1f8]
      "
    >
      {/* Gradiente superior MUITO sutil (continuidade com hero) */}
      <div
        className="
          absolute inset-x-0 top-0 h-24
          bg-[linear-gradient(to_bottom,rgba(28,23,75,0.06),transparent)]
          pointer-events-none
        "
      />

      <div className="relative mx-auto max-w-7xl grid gap-14 md:grid-cols-2 items-center">
        {/* Texto */}
        <div className="max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#1c174b]/70">
            Sobre nós
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#1c174b] md:text-4xl">
            Tecnologia orientada à governança e decisão
          </h2>

          {/* Parágrafo 1 — TEXTO ORIGINAL */}
          <p className="mt-6 text-base leading-relaxed text-[#1c174b]/75">
            A Polis Tecnologia nasceu da necessidade de uma plataforma de gestão
            empresarial (ERP) capaz de oferecer maior clareza, objetividade e
            controle sobre processos operacionais, financeiros e administrativos,
            por meio de uma estrutura tecnológica moderna, integrada e orientada
            à tomada de decisão. A partir dessa demanda, Victor Guimarães e
            Washington uniram expertises técnicas e operacionais para desenvolver
            uma solução inicialmente concebida para atender a um cenário
            específico de gestão.
          </p>

          {/* Parágrafo 2 — TEXTO ORIGINAL */}
          <p className="mt-4 text-base leading-relaxed text-[#1c174b]/75">
            Ao longo de sua evolução, o projeto passou por um processo contínuo
            de amadurecimento tecnológico, incorporando automação, padronização
            de fluxos, rastreabilidade das informações e inteligência operacional.
            Esse avanço evidenciou o potencial da plataforma como uma solução
            robusta, escalável e aderente às necessidades de empresas e órgãos
            públicos, consolidando a Polis como um ecossistema de gestão completo,
            prático e orientado à governança.
          </p>
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              value: "10+",
              label: "Anos de experiência",
              icon: Briefcase,
            },
            {
              value: "500+",
              label: "Contratos acompanhados",
              icon: FileText,
            },
            {
              value: "99%",
              label: "Conformidade e rastreabilidade",
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

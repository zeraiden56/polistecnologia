import {
  Briefcase,
  Workflow,
  FileText,
  ShieldCheck,
} from "lucide-react";

const solutions = [
  {
    id: "erp-terceirizacao",
    title: "ERP para Terceirização de Mão de Obra",
    description:
      "ERP especializado para empresas de terceirização, com controle operacional, financeiro e contratual integrado.",
    icon: Briefcase,
  },
  {
    id: "governanca",
    title: "Automação e Governança Operacional",
    description:
      "Automação de fluxos, rastreabilidade de informações e padronização de processos para decisões mais seguras.",
    icon: Workflow,
  },
  {
    id: "gestao-contratos-publicos",
    title: "Gestão de Contratos Públicos",
    description:
      "Plataforma dedicada à gestão de contratos administrativos com transparência, controle e segurança jurídica.",
    icon: FileText,
  },
  {
    id: "conformidade",
    title: "Conformidade, Controle e Transparência",
    description:
      "Acompanhamento contínuo da execução contratual com foco em conformidade normativa e fiscalização.",
    icon: ShieldCheck,
  },
];

export function Solutions() {
  return (
    <section
      id="solucoes"
      className="
        relative
        py-24 px-6
        scroll-mt-24
        bg-gradient-to-b
        from-[#f7f8fc]
        via-[#fafbff]
        to-white
      "
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-center text-3xl font-bold text-[#1c174b] md:text-4xl">
          Soluções completas para a gestão pública e empresarial
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="
                group relative overflow-hidden
                rounded-xl border border-slate-200 bg-white p-8
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#1c174b]
                hover:shadow-xl
                focus:outline-none focus:ring-2 focus:ring-[#1c174b]/40
              "
            >
              <div
                className="
                  absolute inset-0 opacity-0
                  bg-gradient-to-br from-[#1c174b]/5 to-transparent
                  transition-opacity duration-300
                  group-hover:opacity-100
                "
              />

              <item.icon className="relative mb-6 h-10 w-10 text-[#1c174b]" />

              <h3 className="relative mb-3 text-lg font-bold text-[#1c174b]">
                {item.title}
              </h3>

              <p className="relative text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>

              <span className="relative mt-6 inline-block text-sm font-medium text-[#1c174b]">
                Ver detalhes →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

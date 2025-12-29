import {
  FileText,
  Activity,
  ShieldCheck,
  Layers,
  Smartphone,
  Workflow,
} from "lucide-react";

const solutions = [
  {
    id: "contratos",
    title: "Gestão de Contratos",
    description:
      "Controle completo do ciclo contratual com indicadores e alertas.",
    icon: FileText,
  },
  {
    id: "execucao",
    title: "Monitoramento da Execução",
    description:
      "Acompanhamento de prazos, entregas e medições em tempo real.",
    icon: Activity,
  },
  {
    id: "auditoria",
    title: "Conformidade e Auditoria",
    description:
      "Rastreabilidade, registros confiáveis e suporte a fiscalizações.",
    icon: ShieldCheck,
  },
  {
    id: "documentos",
    title: "Gestão Documental",
    description:
      "Centralização e versionamento de documentos contratuais.",
    icon: Layers,
  },
  {
    id: "mobile",
    title: "Gestão Mobile",
    description:
      "Acesso remoto para fiscais e gestores em campo.",
    icon: Smartphone,
  },
  {
    id: "automacoes",
    title: "Automações",
    description:
      "Fluxos inteligentes para reduzir tarefas manuais.",
    icon: Workflow,
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="bg-white py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-center text-3xl font-bold text-[#1c174b] md:text-4xl">
          Soluções completas para contratos públicos
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              "
            >
              {/* fundo hover */}
              <div className="
                absolute inset-0 opacity-0
                bg-gradient-to-br from-[#1c174b]/5 to-transparent
                transition-opacity duration-300
                group-hover:opacity-100
              " />

              <item.icon className="relative mb-6 h-10 w-10 text-[#1c174b]" />

              <h3 className="relative mb-3 text-lg font-bold text-[#1c174b]">
                {item.title}
              </h3>

              <p className="relative text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>

              <span className="relative mt-6 inline-block text-sm font-medium text-[#1c174b]">
                Saiba mais →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

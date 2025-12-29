import {
  FileText,
  Activity,
  ShieldCheck,
  Folder,
  Smartphone,
  Zap,
} from "lucide-react";

export function SolutionsDetails() {
  const solutions = [
    {
      id: "contratos",
      title: "Gestão de Contratos",
      description:
        "Controle integral de todo o ciclo contratual, desde a formalização até o encerramento. Acompanhe prazos, valores, aditivos e responsáveis com total rastreabilidade e segurança jurídica.",
      icon: FileText,
      dark: false,
    },
    {
      id: "execucao",
      title: "Monitoramento da Execução",
      description:
        "Acompanhe medições, entregas e cronogramas em tempo real. Identifique desvios com antecedência e atue preventivamente para mitigar riscos e atrasos.",
      icon: Activity,
      dark: true,
    },
    {
      id: "auditoria",
      title: "Conformidade e Auditoria",
      description:
        "Histórico completo de ações, documentos e decisões, garantindo conformidade com órgãos de controle e facilitando auditorias internas e externas.",
      icon: ShieldCheck,
      dark: false,
    },
    {
      id: "documentos",
      title: "Gestão Documental",
      description:
        "Centralize todos os documentos contratuais em um único ambiente seguro, com versionamento, controle de acesso e busca inteligente.",
      icon: Folder,
      dark: true,
    },
    {
      id: "mobile",
      title: "Gestão Mobile",
      description:
        "Fiscalização e acompanhamento diretamente do campo, com acesso seguro via dispositivos móveis, mesmo em ambientes de baixa conectividade.",
      icon: Smartphone,
      dark: false,
    },
    {
      id: "automacoes",
      title: "Automações Inteligentes",
      description:
        "Automatize fluxos operacionais, notificações e aprovações. Reduza retrabalho, erros manuais e aumente a eficiência da equipe.",
      icon: Zap,
      dark: true,
    },
  ];

  return (
    <div>
      {solutions.map((item, index) => {
        const Icon = item.icon;
        const inverted = index % 2 === 1;

        return (
          <section
            key={item.id}
            id={item.id}
            className={`
              py-28 px-6
              ${item.dark ? "bg-[#1c174b]" : "bg-slate-50"}
            `}
          >
            <div
              className={`
                mx-auto max-w-7xl
                grid gap-16 items-center
                md:grid-cols-2
                ${inverted ? "md:[&>*:first-child]:order-2" : ""}
              `}
            >
              {/* Texto */}
              <div
                className={`
                  ${item.dark ? "text-white" : "text-[#1c174b]"}
                `}
              >
                <div
                  className={`
                    mb-6 flex h-14 w-14 items-center justify-center rounded-xl
                    ${item.dark
                      ? "bg-white/10 text-white"
                      : "bg-[#1c174b]/10 text-[#1c174b]"}
                  `}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>

                <p
                  className={`
                    mt-6 max-w-xl text-lg leading-relaxed
                    ${item.dark ? "text-white/80" : "text-[#1c174b]/70"}
                  `}
                >
                  {item.description}
                </p>
              </div>

              {/* Mock / visual */}
              <div
                className={`
                  hidden md:flex
                  items-center justify-center
                  h-64 rounded-2xl
                  ${item.dark
                    ? "bg-white/5"
                    : "bg-white border shadow-sm"}
                `}
              >
                <span
                  className={`
                    text-sm
                    ${item.dark ? "text-white/40" : "text-slate-400"}
                  `}
                >
                  Área para mock / gráfico / imagem
                </span>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

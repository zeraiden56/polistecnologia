import {
  Briefcase,
  FileText,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { InteractiveMock } from "@/components/hero/InteractiveMock";

export function SolutionsDetails() {
  const solutions = [
    {
      id: "erp-terceirizacao",
      title: "ERP para Empresas de Terceirização de Mão de Obra",
      icon: Briefcase,
      dark: false,
      description: (
        <>
          <p className="mb-4">
            A Polis Tecnologia oferece um <strong>ERP especializado para empresas
            de terceirização de mão de obra</strong>, projetado para lidar com a
            complexidade operacional, contratual e financeira desse segmento.
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Gestão de contratos e parâmetros operacionais</li>
            <li>Administração de serviços e postos de trabalho</li>
            <li>Vinculação da mão de obra aos serviços contratados</li>
            <li>Controle de faltas, substituições e movimentações</li>
            <li>Faturamento alinhado à execução dos serviços</li>
            <li>Módulo financeiro integrado</li>
          </ul>
        </>
      ),
    },
    {
      id: "governanca",
      title: "Automação e Governança Operacional",
      icon: Workflow,
      dark: true,
      description: (
        <>
          <p className="mb-4">
            A solução automatiza processos operacionais e administrativos,
            assegurando padronização, rastreabilidade e controle em tempo real.
          </p>

          <p>
            Workflows inteligentes reduzem tarefas manuais, eliminam gargalos
            e fortalecem a governança com decisões baseadas em dados confiáveis.
          </p>
        </>
      ),
    },
    {
      id: "gestao-contratos-publicos",
      title: "Plataforma de Gestão de Contratos para Órgãos Públicos",
      icon: FileText,
      dark: false,
      description: (
        <>
          <p className="mb-4">
            Plataforma dedicada à <strong>gestão de contratos administrativos</strong>,
            garantindo transparência, controle e segurança ao longo de todo o
            ciclo contratual.
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Gestão centralizada de contratos e aditivos</li>
            <li>Controle de saldo contratual e empenhos</li>
            <li>Rastreabilidade documental completa</li>
            <li>Acompanhamento contínuo da execução</li>
            <li>Painéis e indicadores gerenciais</li>
          </ul>
        </>
      ),
    },
    {
      id: "conformidade",
      title: "Conformidade, Controle e Transparência",
      icon: ShieldCheck,
      dark: true,
      description: (
        <>
          <p className="mb-4">
            A plataforma oferece acompanhamento detalhado da execução contratual,
            com foco em conformidade normativa e eficiência administrativa.
          </p>

          <p>
            A rastreabilidade de documentos, ações e decisões facilita auditorias
            e fortalece os mecanismos de controle e fiscalização.
          </p>
        </>
      ),
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
              py-28 px-6 scroll-mt-24
              ${item.dark ? "bg-[#1c174b]" : "bg-slate-50"}
            `}
          >
            <div className="mx-auto max-w-7xl">
              {/* Wrapper que NÃO dá zoom */}
              <div
                className={`
                  relative
                  transition-transform duration-300 ease-out
                  md:hover:scale-[1.025]
                `}
              >
                {/* Cartão interno */}
                <div
                  className={`
                    grid gap-16 items-center
                    md:grid-cols-2
                    rounded-3xl
                    p-10
                    transition-shadow duration-300
                    ${inverted ? "md:[&>*:first-child]:order-2" : ""}
                    ${item.dark
                      ? "bg-white/0 md:hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
                      : "bg-white md:hover:shadow-2xl"}
                  `}
                >
                  {/* Texto */}
                  <div className={item.dark ? "text-white" : "text-[#1c174b]"}>
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

                    <h3 className="text-3xl font-bold">{item.title}</h3>

                    <div
                      className={`
                        mt-6 max-w-xl text-lg leading-relaxed
                        ${item.dark ? "text-white/80" : "text-[#1c174b]/70"}
                      `}
                    >
                      {item.description}
                    </div>
                  </div>

                  {/* Mock interativo */}
                  <InteractiveMock
                    dark={item.dark}
                    placeholder="Demonstração interativa do sistema"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

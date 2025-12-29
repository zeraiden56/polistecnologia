import logo from "@/assets/logo-polis.png";
import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contato"
      className="
        bg-[#141038]
        text-slate-300
        py-16 px-6
        relative
      "
    >
      <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-3">
        {/* Logo + descrição */}
        <div>
            <img
            src={logo}
            alt="Polis Tecnologia"
            className="
                h-20 md:h-24
                mb-6
                brightness-0 invert
                opacity-90
            "
            />
          <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
            Gestão de Contratos Públicos simplificada, com foco em transparência,
            controle e eficiência para o setor público.
          </p>
        </div>

        {/* Empresa */}
        <div>
          <h4 className="mb-4 font-semibold text-white tracking-wide">
            Empresa
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="hover:text-white transition-colors cursor-pointer">
              Sobre
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              Soluções
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              Contato
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="mb-4 font-semibold text-white tracking-wide">
            Contato
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-slate-500" />
              Cuiabá – MT
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-slate-500" />
              (65) 99999-9999
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-slate-500" />
              contato@polistecnologia.com.br
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Polis Tecnologia. Todos os direitos reservados.
      </div>
    </footer>
  );
}

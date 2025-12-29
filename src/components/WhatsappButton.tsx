import { useEffect, useState } from "react";
import whatsappIcon from "@/assets/whatsapp.svg";

const MESSAGES = [
  "Fale com um especialista!",
  "Tire suas dúvidas agora!",
  "Atendimento imediato!",
  "Converse com nosso time!",
];

export function WhatsAppButton() {
  const phone = "5565999999999";
  const message = encodeURIComponent(
    "Olá! Gostaria de falar com um especialista da Polis."
  );

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setVisible(false);

      // troca o texto no meio da animação
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % MESSAGES.length);
        setVisible(true);
      }, 300);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com um especialista no WhatsApp"
      className="
        fixed bottom-6 right-6 md:bottom-10 md:right-8
        z-50
        group
      "
    >
      <div className="relative">
        {/* BALÃO */}
        <div
        className={`
            absolute -left-[220px] top-2
            hidden sm:block
            bg-white
            text-[#25D366] text-sm font-semibold
            px-5 py-3
            rounded-2xl
            border border-[#25D366]/60
            shadow-lg
            whitespace-nowrap
            transition-all duration-300 ease-in-out
            ${
            visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }
        `}
        >
        {MESSAGES[index]}
        </div>

        {/* ÍCONE */}
        <div className="relative">
          {/* Pulso */}
          <span
            className="
              absolute inset-0
              rounded-2xl
              bg-[#25D366]
              animate-ping-soft
            "
          />

          {/* Botão */}
          <div
            className="
              relative z-10
              flex items-center justify-center
              h-16 w-16 md:h-20 md:w-20
              rounded-2xl
              bg-[#25D366]
              shadow-xl
              transition-transform duration-300
              group-hover:scale-110
            "
          >
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              className="h-8 w-8 md:h-10 md:w-10 filter brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </a>
  );
}

import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-polis.png";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header
        className="
          fixed top-0 z-50 w-full
          bg-white/85 backdrop-blur
          shadow-md
        "
      >
        <div
          className="
            mx-auto max-w-7xl
            flex items-center justify-between
            h-28 md:h-32
            px-4 md:px-6
          "
        >
          {/* Logo */}
          <img
            src={logo}
            alt="Polis Tecnologia"
            className="
              h-20 md:h-28
              w-auto
            "
          />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1c174b]">
            <a href="#inicio" className="hover:opacity-70">Início</a>
            <a href="#sobre" className="hover:opacity-70">Sobre</a>
            <a href="#solucoes" className="hover:opacity-70">Soluções</a>
            <a href="#contato" className="hover:opacity-70">Contato</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button className="bg-[#1c174b] hover:bg-[#141038] shadow-sm">
              Fale Conosco
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-[#1c174b]"
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 h-16 shadow-sm">
            <img src={logo} alt="Polis Tecnologia" className="h-12 w-auto" />
            <button onClick={() => setOpen(false)} aria-label="Fechar menu">
              <X size={28} />
            </button>
          </div>

          {/* Nav */}
          <nav className="flex flex-col items-center gap-6 mt-12 text-lg text-[#1c174b]">
            <a href="#inicio" onClick={() => setOpen(false)}>Início</a>
            <a href="#sobre" onClick={() => setOpen(false)}>Sobre</a>
            <a href="#solucoes" onClick={() => setOpen(false)}>Soluções</a>
            <a href="#contato" onClick={() => setOpen(false)}>Contato</a>

            <Button className="mt-8 bg-[#1c174b] text-white shadow-md">
              Fale Conosco
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}

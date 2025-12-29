import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Solutions } from "@/components/sections/Solutions";
import { CTA } from "../components/sections/CTA";
import { SolutionsDetails } from "../components/sections/SoluctionDetails";
import { WhatsAppButton } from "../components/WhatsappButton";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <SolutionsDetails />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

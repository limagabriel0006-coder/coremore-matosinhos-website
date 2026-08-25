import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Instagram, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import logoUrl from "@/assets/logo-coremore.png";
import {
  ADDRESS,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_LINK,
  WHATSAPP_URL,
} from "./primitives";

const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#aulas", label: "Aulas" },
  { href: "#horarios", label: "Horários" },
  { href: "#estudio", label: "Estúdio" },
  { href: "#testemunhos", label: "Testemunhos" },
  { href: "#equipa", label: "Equipa" },
  { href: "#vagas", label: "Vagas" },
  { href: "#contactos", label: "Contactos" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#inicio"
      aria-label="Core&More Pilates Studio, voltar ao início"
      className={cn("block leading-none", className)}
    >
      <img
        src={logoUrl}
        alt="Core&More Pilates Studio"
        className="h-11 w-auto sm:h-12"
      />
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <Logo className="min-w-0" />

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs tracking-[0.16em] uppercase text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contactos"
            className="ml-2 hidden shrink-0 rounded-sm bg-primary px-5 py-3 text-xs tracking-[0.18em] uppercase text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            Marcar Aula
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 shrink-0 place-items-center rounded-sm border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-5 pb-6 sm:px-8 lg:hidden">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-4 text-sm tracking-[0.16em] uppercase text-muted-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contactos"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-sm bg-primary px-5 py-4 text-center text-xs tracking-[0.18em] uppercase text-primary-foreground"
          >
            Marcar Aula
          </a>
        </nav>
      ) : null}
    </header>
  );
}

export function WhatsAppFloating() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar connosco no WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-sage-deep px-5 py-4 text-xs tracking-[0.18em] uppercase text-primary-foreground shadow-lg transition-transform hover:scale-[1.03] sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream px-5 py-16 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Estúdio boutique de Pilates clássico e matwork em Matosinhos. Aulas
            individuais, em dupla e em pequenos grupos.
          </p>
        </div>

        <div className="text-sm text-muted-foreground">
          <p className="eyebrow">Contactos</p>
          <p className="mt-4 flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0" />
            {ADDRESS}
          </p>
          <p className="mt-3 flex items-center gap-2">
            <Phone className="size-4 shrink-0" />
            <a href={PHONE_LINK} className="hover:text-foreground">
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-3 flex items-center gap-2">
            <Instagram className="size-4 shrink-0" />
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              @coreandmore_porto
            </a>
          </p>
          <p className="mt-3 flex items-center gap-2">
            <MessageCircle className="size-4 shrink-0" />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              WhatsApp
            </a>
          </p>
        </div>

        <div className="text-sm text-muted-foreground">
          <p className="eyebrow">Horário</p>
          <p className="mt-4">Segunda a sexta feira: 08:00 às 20:00</p>
          <p className="mt-2">Sábado e domingo: encerrado</p>
          <p className="mt-4 text-xs leading-relaxed">
            Marcações obrigatórias. Número de vagas limitado por aula.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-6xl border-t border-border pt-6 text-xs tracking-wider text-muted-foreground">
        © {new Date().getFullYear()} Core&amp;More Pilates Studio. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}

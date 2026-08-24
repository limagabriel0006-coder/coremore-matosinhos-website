import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Star, Clock, Check, Instagram, Phone, MapPin, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header, Footer, WhatsAppFloating } from "@/components/site/chrome";
import {
  ADDRESS,
  INSTAGRAM_URL,
  ImagePlaceholder,
  PHONE_DISPLAY,
  PHONE_LINK,
  Reveal,
  Section,
  SectionHeading,
  WHATSAPP_URL,
} from "@/components/site/primitives";

const TITLE = "Core&More Pilates Studio | Pilates em Matosinhos";
const DESCRIPTION =
  "Estúdio boutique de Pilates clássico e Reformer em Matosinhos. Aulas individuais, em dupla e em pequenos grupos, com acompanhamento personalizado.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Pilates Matosinhos, Pilates Reformer Porto, estúdio de Pilates Matosinhos, Pilates clássico, matwork",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_PT" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: "Core&More Pilates Studio",
          description: DESCRIPTION,
          address: {
            "@type": "PostalAddress",
            streetAddress: "R. Dom João I, 292",
            postalCode: "4450-189",
            addressLocality: "Matosinhos",
            addressCountry: "PT",
          },
          telephone: "+351914409173",
          sameAs: [INSTAGRAM_URL],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "20:00",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "5",
          },
        }),
      },
    ],
  }),
  component: Home,
});

const CLASSES = [
  {
    name: "Pilates Reformer, individual",
    level: "Todos os níveis",
    duration: "50 minutos",
    text: "Sessão totalmente dedicada a si, com avaliação inicial e um plano construído à medida dos seus objetivos, ritmo e histórico clínico.",
  },
  {
    name: "Pilates Reformer, em dupla",
    level: "Todos os níveis",
    duration: "50 minutos",
    text: "A mesma atenção ao detalhe, partilhada com alguém à sua escolha. Ideal para casais, amigas ou familiares que gostam de treinar acompanhados.",
  },
  {
    name: "Pilates Reformer, pequenos grupos",
    level: "Iniciados e intermédios",
    duration: "50 minutos",
    text: "Grupos reduzidos que garantem correção constante e progressão segura, num ambiente próximo e motivador.",
  },
  {
    name: "Pilates Matwork com acessórios",
    level: "Todos os níveis",
    duration: "50 minutos",
    text: "Trabalho de solo com magic circle, bolas, bandas elásticas e outros pequenos acessórios, focado em controlo, mobilidade e força profunda.",
  },
];

const PLANS = [
  {
    name: "Aula avulso",
    detail: "Uma aula única, perfeita para experimentar o método e o estúdio.",
  },
  {
    name: "Pack 4 aulas por mês",
    detail: "Uma aula por semana, para criar rotina e consistência.",
  },
  {
    name: "Pack 8 aulas por mês",
    detail: "Duas aulas por semana, o ritmo que gera resultados mais rápidos.",
  },
  {
    name: "Aula individual",
    detail: "Acompanhamento exclusivo, com plano personalizado.",
  },
  {
    name: "Aula em dupla",
    detail: "Sessão partilhada, com atenção individualizada aos dois alunos.",
  },
  {
    name: "Avaliação inicial",
    detail: "Primeira sessão de conhecimento, postura e definição de objetivos.",
  },
];

const TESTIMONIALS = [
  {
    name: "Flávio Oliveira",
    text: "Excelente local, a Filipa é uma professora de Pilates excecional, muito atenciosa, dedicada e com um enorme conhecimento.",
  },
  {
    name: "Alessandra Serapião",
    text: "Excelente estúdio de Pilates. A Pipa é uma fisioterapeuta dedicada e que pensa em cada pessoa individualmente, sempre atenta à necessidade de cada um. O espaço é muito agradável e com aparelhos novos.",
  },
  {
    name: "Francisca Abrunhosa de Brito",
    text: "A Filipa é a melhor professora que qualquer pessoa pode desejar quando faz pilates! Está sempre atenta e adapta as aulas ao máximo possível aos nossos objetivos.",
  },
  {
    name: "Raquel Russo",
    text: "As aulas são ótimas e o estúdio muito agradável. A Filipa é muito profissional e querida. Recomendo imenso!",
  },
  {
    name: "Francisco Lampreia",
    text: "A Prof. Filipa Leal é uma especialista de topo. Cada aula é ajustada a um plano específico, bem elaborado, com propósito, e os resultados surgem logo após um curto período de aulas. Não basta fazer, é preciso saber fazer, e aqui estamos muito bem entregues com acompanhamento fisioterapêutico.",
  },
];

const FAQS = [
  {
    q: "Preciso de ter experiência prévia para começar?",
    a: "Não. Recebemos alunos sem qualquer experiência em Pilates. A primeira sessão serve para conhecer o seu corpo, o seu historial e os seus objetivos, e a partir daí construímos a progressão adequada.",
  },
  {
    q: "O que devo trazer e vestir para a aula?",
    a: "Roupa confortável que permita movimento e meias antiderrapantes. Traga também uma garrafa de água. Todo o restante equipamento e acessórios são disponibilizados pelo estúdio.",
  },
  {
    q: "Como funciona a marcação e o cancelamento de aulas?",
    a: "As marcações são obrigatórias e podem ser feitas por telefone ou WhatsApp. Pedimos que cancelamentos sejam comunicados com pelo menos 24 horas de antecedência, para que possamos libertar a vaga para outro aluno.",
  },
  {
    q: "Qual a diferença entre aula individual, em dupla e em pequeno grupo?",
    a: "Na aula individual todo o plano é exclusivo para si. Em dupla, o plano é adaptado a duas pessoas com acompanhamento próximo. Em pequeno grupo mantemos um número reduzido de alunos, o que permite correção constante e um ambiente muito próximo.",
  },
  {
    q: "O Pilates ajuda em problemas de coluna e postura?",
    a: "Sim. O trabalho de estabilização do core, mobilidade da coluna e consciência postural é um dos pilares do método. As aulas são adaptadas ao seu quadro, com acompanhamento fisioterapêutico sempre que necessário.",
  },
  {
    q: "Com que antecedência devo marcar a minha aula?",
    a: "Recomendamos marcar com alguns dias de antecedência, sobretudo nos horários de manhã e fim de tarde, uma vez que o número de vagas por aula é limitado.",
  },
];

const GALLERY = [
  { label: "Foto do estúdio, vista geral", span: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[420px]" },
  { label: "Foto do Reformer", span: "aspect-square" },
  { label: "Foto do Cadillac / Trapeze", span: "aspect-square" },
  { label: "Foto da zona de matwork", span: "aspect-square" },
  { label: "Foto de detalhe, acessórios", span: "aspect-square" },
];

function Stars({ className }: { className?: string }) {
  return (
    <div className={className} aria-label="Classificação 5 estrelas">
      <div className="flex gap-1 text-sage-deep">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Classes />
        <Schedule />
        <Studio />
        <Pricing />
        <Testimonials />
        <Faq />
        <Team />
        <Contacts />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] w-full pt-28 pb-16">
      <ImagePlaceholder
        label="Imagem de fundo do estúdio"
        className="absolute inset-0 h-full w-full rounded-none border-0"
      />
      <div className="relative mx-auto flex min-h-[calc(92vh-11rem)] w-full max-w-6xl flex-col justify-center px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl bg-background/85 p-8 backdrop-blur-sm sm:p-12">
            <p className="eyebrow">Pilates boutique em Matosinhos</p>
            <h1 className="mt-6 text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
              Fortalece o teu core.
              <br />
              Reencontra o teu equilíbrio.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Um estúdio intimista de Pilates clássico e matwork em Matosinhos, com
              turmas reduzidas, equipamento profissional e acompanhamento próximo em
              cada movimento.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contactos"
                className="rounded-sm bg-primary px-8 py-4 text-center text-xs tracking-[0.18em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
              >
                Marcar Primeira Aula
              </a>
              <a
                href="#estudio"
                className="rounded-sm border border-foreground/25 px-8 py-4 text-center text-xs tracking-[0.18em] uppercase text-foreground transition-colors hover:bg-accent"
              >
                Conhecer o Estúdio
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="sobre">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Sobre nós</p>
          <h2 className="mt-4 text-3xl leading-[1.15] sm:text-4xl md:text-[2.75rem]">
            Qualidade acima de quantidade, sempre.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              O Core&amp;More nasceu do desejo de criar um espaço onde o Pilates é
              praticado como foi pensado: com método, precisão e presença. Trabalhamos
              o método clássico, no Reformer e em matwork, com uma abordagem que
              respeita o corpo de cada aluno e a sua história.
            </p>
            <p>
              Abrimos portas a 3 de novembro de 2025, com um estúdio novo, luminoso e
              cuidado ao detalhe, pensado para receber poucas pessoas de cada vez. Aqui
              não há multidões nem ruído, há tempo para corrigir, explicar e progredir.
            </p>
            <p>
              Acreditamos que a consistência vale mais do que a intensidade e que uma
              boa aula se mede pela forma como o corpo se sente nos dias seguintes.
            </p>
          </div>
          <ul className="mt-8 space-y-3 text-sm text-foreground">
            {[
              "Método Pilates clássico e matwork",
              "Turmas reduzidas e acompanhamento individualizado",
              "Acompanhamento com olhar fisioterapêutico",
              "Equipamento profissional completo",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-sage-deep" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120} className="grid gap-4">
          <ImagePlaceholder
            label="Imagem do estúdio"
            className="aspect-[4/5] w-full"
          />
          <ImagePlaceholder label="Foto da equipa" className="aspect-[16/10] w-full" />
        </Reveal>
      </div>
    </Section>
  );
}

function Classes() {
  return (
    <Section id="aulas" className="bg-cream">
      <Reveal>
        <SectionHeading
          eyebrow="Aulas e serviços"
          title="Encontra o formato certo para ti"
          intro="Todas as aulas são acompanhadas de perto, com correção constante e progressão adaptada ao teu nível."
        />
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {CLASSES.map((item, index) => (
          <Reveal key={item.name} delay={index * 90}>
            <article className="flex h-full flex-col border border-border bg-card p-8">
              <h3 className="text-2xl leading-snug">{item.name}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
              <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-2 border-t border-border pt-5 text-xs tracking-[0.14em] uppercase text-muted-foreground">
                <div>
                  <dt className="sr-only">Nível</dt>
                  <dd>{item.level}</dd>
                </div>
                <div>
                  <dt className="sr-only">Duração</dt>
                  <dd>{item.duration}</dd>
                </div>
              </dl>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          As aulas individuais e em dupla são marcadas mediante disponibilidade do
          aluno e do professor.
        </p>
        <div className="mt-8 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-sm bg-primary px-8 py-4 text-xs tracking-[0.18em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
          >
            Marcar a minha aula
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

function Schedule() {
  return (
    <Section id="horarios">
      <Reveal>
        <SectionHeading
          eyebrow="Horários"
          title="Quando podes praticar connosco"
        />
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full border border-border bg-card p-8">
            <div className="flex items-center gap-3">
              <Clock className="size-5 text-sage-deep" />
              <h3 className="text-2xl">Funcionamento do estúdio</h3>
            </div>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
                <span>Segunda a sexta feira</span>
                <span className="text-muted-foreground">08:00 às 20:00</span>
              </li>
              <li className="flex items-baseline justify-between gap-4">
                <span>Sábado e domingo</span>
                <span className="text-muted-foreground">Encerrado</span>
              </li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="h-full border border-border bg-card p-8">
            <div className="flex items-center gap-3">
              <Clock className="size-5 text-sage-deep" />
              <h3 className="text-2xl">Aulas de Matwork</h3>
            </div>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
                <span>Segunda feira</span>
                <span className="text-muted-foreground">8h, 9h e 10h</span>
              </li>
              <li className="flex items-baseline justify-between gap-4">
                <span>Quarta feira</span>
                <span className="text-muted-foreground">8h, 9h, 10h e 18h</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
      <Reveal delay={160}>
        <div className="mt-8 border border-border bg-accent/60 p-6 text-sm leading-relaxed text-accent-foreground">
          Marcações obrigatórias. Número de vagas limitado por aula. Aulas individuais
          ou em dupla são marcadas mediante disponibilidade do aluno e do professor.
        </div>
      </Reveal>
    </Section>
  );
}

function Studio() {
  return (
    <Section id="estudio" className="bg-cream">
      <Reveal>
        <SectionHeading
          eyebrow="O estúdio"
          title="Um espaço luminoso, pensado ao detalhe"
          intro="Chão em madeira clara, espelhos amplos, plantas e cestos em rattan com acessórios. Um ambiente boutique com equipamento profissional: Reformer, Cadillac, Barrel, Chair e Ladder Barrel."
        />
      </Reveal>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {GALLERY.map((item, index) => (
          <Reveal key={item.label} delay={index * 80} className={item.span}>
            <ImagePlaceholder label={item.label} className="h-full min-h-40 w-full" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Pricing() {
  return (
    <Section id="precos">
      <Reveal>
        <SectionHeading
          eyebrow="Preços e planos"
          title="Planos flexíveis, ao teu ritmo"
          intro="Escolhemos o plano contigo, de acordo com a frequência e o formato de aula que fazem sentido para a tua rotina."
        />
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PLANS.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 70}>
            <article className="flex h-full flex-col border border-border bg-card p-8">
              <h3 className="text-xl">{plan.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {plan.detail}
              </p>
              <p className="mt-6 border-t border-border pt-5 text-xs tracking-[0.16em] uppercase text-sage-deep">
                Preço sob consulta
              </p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <div className="mt-10 border border-border bg-nude/60 p-8 text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Os valores são apresentados sob consulta. Fala connosco e indicamos o plano
            mais adequado ao teu objetivo e disponibilidade.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-sm bg-primary px-8 py-4 text-xs tracking-[0.18em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
          >
            Pedir informações no WhatsApp
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section id="testemunhos" className="bg-cream">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Testemunhos</p>
          <h2 className="mt-4 text-3xl leading-[1.15] sm:text-4xl md:text-5xl">
            5 estrelas por quem treina connosco
          </h2>
          <div className="mt-6 flex flex-col items-center gap-2">
            <Stars />
            <p className="text-sm text-muted-foreground">
              Classificação média de 5,0 nas avaliações dos nossos alunos.
            </p>
          </div>
        </div>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((item, index) => (
          <Reveal key={item.name} delay={index * 80}>
            <figure className="flex h-full flex-col border border-border bg-card p-8">
              <Stars />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                “{item.text}”
              </blockquote>
              <figcaption className="mt-6 text-xs tracking-[0.16em] uppercase">
                {item.name}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Faq() {
  return (
    <Section id="faq">
      <Reveal>
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Tudo o que precisas de saber antes da primeira aula"
        />
      </Reveal>
      <Reveal delay={100}>
        <Accordion type="single" collapsible className="mx-auto mt-12 max-w-3xl">
          {FAQS.map((item) => (
            <AccordionItem key={item.q} value={item.q} className="border-border">
              <AccordionTrigger className="py-6 text-left text-base font-normal hover:no-underline sm:text-lg">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}

function Team() {
  return (
    <Section id="equipa" className="bg-cream">
      <Reveal>
        <div className="mx-auto max-w-3xl border border-border bg-card p-10 text-center">
          <p className="eyebrow">Junta-te à equipa</p>
          <h2 className="mt-4 text-2xl sm:text-3xl">
            Procuramos professor(a) de Pilates Clássico
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Se és apaixonado(a) pelo método, qualificado(a) e queres integrar um
            projeto boutique em crescimento, gostávamos de te conhecer.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-sm border border-foreground/25 px-8 py-4 text-xs tracking-[0.18em] uppercase transition-colors hover:bg-accent"
          >
            Falar connosco
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

function Contacts() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <Section id="contactos">
      <Reveal>
        <SectionHeading
          eyebrow="Contactos"
          title="Marca a tua aula no Core&More"
          intro="Estamos em Matosinhos, a poucos minutos do centro. Escreve-nos e respondemos com as próximas vagas disponíveis."
        />
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-5 text-sm">
            <a
              href="https://maps.google.com/?q=R.+Dom+Jo%C3%A3o+I,+292,+4450-189+Matosinhos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 border border-border bg-card p-5 transition-colors hover:bg-accent/50"
            >
              <MapPin className="mt-0.5 size-5 shrink-0 text-sage-deep" />
              <span>
                <span className="block text-xs tracking-[0.16em] uppercase text-muted-foreground">
                  Morada
                </span>
                <span className="mt-1 block">{ADDRESS}</span>
              </span>
            </a>
            <a
              href={PHONE_LINK}
              className="flex items-start gap-3 border border-border bg-card p-5 transition-colors hover:bg-accent/50"
            >
              <Phone className="mt-0.5 size-5 shrink-0 text-sage-deep" />
              <span>
                <span className="block text-xs tracking-[0.16em] uppercase text-muted-foreground">
                  Telefone
                </span>
                <span className="mt-1 block">{PHONE_DISPLAY}</span>
              </span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 border border-border bg-card p-5 transition-colors hover:bg-accent/50"
            >
              <MessageCircle className="mt-0.5 size-5 shrink-0 text-sage-deep" />
              <span>
                <span className="block text-xs tracking-[0.16em] uppercase text-muted-foreground">
                  WhatsApp
                </span>
                <span className="mt-1 block">Falar connosco agora</span>
              </span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 border border-border bg-card p-5 transition-colors hover:bg-accent/50"
            >
              <Instagram className="mt-0.5 size-5 shrink-0 text-sage-deep" />
              <span>
                <span className="block text-xs tracking-[0.16em] uppercase text-muted-foreground">
                  Instagram
                </span>
                <span className="mt-1 block">@coreandmore_porto</span>
              </span>
            </a>

            <div className="overflow-hidden border border-border">
              <iframe
                title="Localização do Core&More Pilates Studio em Matosinhos"
                src="https://www.google.com/maps?q=R.%20Dom%20Jo%C3%A3o%20I%2C%20292%2C%204450-189%20Matosinhos&output=embed"
                width="100%"
                height="300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="border border-border bg-card p-8"
            aria-label="Formulário de contacto e marcação"
          >
            <h3 className="text-2xl">Pedido de marcação</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Preenche os teus dados e entramos em contacto para confirmar horário.
            </p>

            <div className="mt-7 space-y-5">
              <Field id="nome" label="Nome" type="text" autoComplete="name" required />
              <Field id="email" label="Email" type="email" autoComplete="email" required />
              <Field id="telefone" label="Telefone" type="tel" autoComplete="tel" />
              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-xs tracking-[0.16em] uppercase text-muted-foreground"
                >
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  required
                  className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-sm bg-primary px-8 py-4 text-xs tracking-[0.18em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              Enviar pedido
            </button>

            {sent ? (
              <p className="mt-5 border border-border bg-accent/60 p-4 text-sm text-accent-foreground">
                Obrigado pelo teu contacto. Para uma resposta mais rápida, fala
                connosco também pelo WhatsApp.
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  type,
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs tracking-[0.16em] uppercase text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring"
      />
    </div>
  );
}

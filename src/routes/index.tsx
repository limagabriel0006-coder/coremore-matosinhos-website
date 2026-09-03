import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  Star,
  Clock,
  Check,
  Instagram,
  Phone,
  MapPin,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import galleryVistaGeral from "@/assets/gallery/estudio-vista-geral.jpeg.asset.json";
import galleryEspelhos from "@/assets/gallery/estudio-reformers-espelhos.jpeg.asset.json";
import galleryReformerDetalhe from "@/assets/gallery/estudio-reformer-detalhe.jpeg.asset.json";
import gallerySalaPrincipal from "@/assets/gallery/estudio-sala-principal.jpeg.asset.json";
import galleryChair from "@/assets/gallery/estudio-chair.jpeg.asset.json";
import galleryWundaChair from "@/assets/gallery/estudio-wunda-chair.jpeg.asset.json";
import galleryReformersPlanta from "@/assets/gallery/estudio-reformers-planta.jpeg.asset.json";
import galleryReformersVista from "@/assets/gallery/estudio-reformers-vista.jpeg.asset.json";
import galleryClassico from "@/assets/gallery/estudio-equipamento-classico.jpeg.asset.json";
import galleryMatwork from "@/assets/gallery/estudio-matwork-acessorios.jpeg.asset.json";
import galleryCadillac from "@/assets/gallery/estudio-cadillac.jpeg.asset.json";
import galleryCadillacExercicio from "@/assets/gallery/estudio-cadillac-exercicio.jpeg.asset.json";
import galleryReformerFootbar from "@/assets/gallery/estudio-reformer-footbar.jpeg.asset.json";
import galleryExercicioMolas from "@/assets/gallery/estudio-exercicio-molas.jpeg.asset.json";
import galleryLadderBarrel from "@/assets/gallery/estudio-ladder-barrel.jpeg.asset.json";
import galleryLadderBarrelDetalhe from "@/assets/gallery/estudio-ladder-barrel-detalhe.jpeg.asset.json";
import galleryShoulderRest from "@/assets/gallery/estudio-reformer-shoulder-rest.jpeg.asset.json";
import galleryDetalhePega from "@/assets/gallery/estudio-detalhe-pega.jpeg.asset.json";
import galleryDetalheMolas from "@/assets/gallery/estudio-detalhe-molas.jpeg.asset.json";
import galleryAcessoriosCesto from "@/assets/gallery/estudio-acessorios-cesto.jpeg.asset.json";
import galleryRecepcao from "@/assets/gallery/estudio-recepcao-armario.jpeg.asset.json";
import filipaPhoto from "@/assets/team/filipa-leal.jpeg.asset.json";
import ivaPhoto from "@/assets/team/iva-sousa.png.asset.json";
import marisaPhoto from "@/assets/team/marisa-teixeira.jpeg.asset.json";
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
  PHONE_DISPLAY,
  PHONE_LINK,
  Reveal,
  Section,
  SectionHeading,
  WHATSAPP_URL,
} from "@/components/site/primitives";

const TITLE = "Core&More Pilates Studio | Pilates em Matosinhos";
const DESCRIPTION =
  "Studio de Pilates clássico e Reformer em Matosinhos. Aulas individuais, em dupla e em pequenos grupos, com acompanhamento personalizado.";

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
    name: "Aulas com aparelhos",
    level: "Todos os níveis",
    duration: "50 minutos",
    text: "As aulas de equipamentos são realizadas em aparelhos como o Reformer, Cadillac ou Wunda Chair. São aulas dinâmicas, adaptadas a cada indivíduo, cujo objetivo passa por fortalecer o centro e as extremidades, melhorar a flexibilidade e tonificar o corpo de forma generalizada.",
  },
  {
    name: "Aulas grupo equipamentos",
    level: "Todos os níveis",
    duration: "50 minutos",
    text: "Aulas em grupo reduzidos, onde a utilização do estúdio é partilhada por 3 alunos (limite máximo), sendo a aula orientada individualmente e cada aluno realiza a aula nos equipamentos (Reformer, Cadillac ou Chair).",
  },
  {
    name: "Aulas de matwork",
    level: "Todos os níveis",
    duration: "50 minutos",
    text: "Aulas realizadas no colchão, trabalhando com o peso do corpo e alguns utensílios como o magic circle e o small barrel, respeitando sempre os princípios do método Pilates.",
  },
];

const PLANS = [
  { name: "PT - 1x/semana", price: "160€" },
  { name: "PT - 2x/semana", price: "290€" },
  { name: "PT - 3x/semana", price: "390€" },
  { name: "PT DUO - 1x/semana", price: "120€" },
  { name: "PT DUO - 2x/semana", price: "190€" },
  { name: "Grupo equipamentos - 1x/semana", price: "80€" },
  { name: "Grupo equipamentos - 2x/semana", price: "150€" },
  { name: "Pack Individual 5x", price: "220€" },
  { name: "Pack Individual 10x", price: "420€" },
  { name: "Pack Duo 5x", price: "150€" },
  { name: "Pack Duo 10x", price: "275€" },
  { name: "Matwork 1x/semana", price: "45€" },
  { name: "Matwork 2x/semana", price: "70€" },
  { name: "Aula avulso", price: "45€" },
  { name: "Aula experimental", price: "20€" },
  { name: "Aula grupo experimental", price: "15€" },
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
    a: "Não. Recebemos alunos sem qualquer experiência em Pilates. A primeira sessão serve para conhecer o seu corpo, o seu historial e os seus objetivos, e a partir daí construímos um plano de treino com progressão adequada.",
  },
  {
    q: "O que devo trazer e vestir para a aula?",
    a: "Roupa confortável que permita movimento e meias antiderrapantes. Temos água disponível. Todo o restante equipamento e acessórios são disponibilizados pelo estúdio.",
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
    a: "Sim. O trabalho de estabilização do core, mobilidade da coluna e consciência corporal são alguns dos pilares do método. As aulas são adaptadas ao seu quadro, com acompanhamento fisioterapêutico sempre que necessário.",
  },
  {
    q: "Com que antecedência devo marcar a minha aula?",
    a: "Recomendamos marcar com alguns dias de antecedência, sobretudo nos horários de manhã e fim de tarde, uma vez que o número de vagas por aula é limitado.",
  },
];

const GALLERY = [
  {
    src: galleryVistaGeral.url,
    alt: "Vista geral do estúdio, com Reformers e luz natural",
  },
  {
    src: gallerySalaPrincipal.url,
    alt: "Sala principal do estúdio, com espelhos amplos",
  },
  {
    src: galleryReformersVista.url,
    alt: "Zona de Reformers, chão em madeira clara e planta",
  },
  {
    src: galleryCadillac.url,
    alt: "Cadillac / Trapeze do estúdio",
  },
  {
    src: galleryEspelhos.url,
    alt: "Reformers junto à parede de espelhos",
  },
  {
    src: galleryReformersPlanta.url,
    alt: "Zona de Reformers do estúdio",
  },
  {
    src: galleryCadillacExercicio.url,
    alt: "Aula no Cadillac, exercício com molas",
  },
  {
    src: galleryReformerFootbar.url,
    alt: "Exercício no Reformer, apoio dos pés na barra",
  },
  {
    src: galleryExercicioMolas.url,
    alt: "Trabalho de pernas com correias e molas",
  },
  {
    src: galleryLadderBarrel.url,
    alt: "Exercício de extensão no Ladder Barrel",
  },
  {
    src: galleryLadderBarrelDetalhe.url,
    alt: "Detalhe da barra em madeira do Ladder Barrel",
  },
  {
    src: galleryReformerDetalhe.url,
    alt: "Detalhe do estofo em couro do Reformer",
  },
  {
    src: galleryShoulderRest.url,
    alt: "Detalhe do apoio de ombros do Reformer",
  },
  {
    src: galleryDetalhePega.url,
    alt: "Detalhe da pega em madeira e couro",
  },
  {
    src: galleryDetalheMolas.url,
    alt: "Detalhe das molas do equipamento",
  },
  {
    src: galleryChair.url,
    alt: "Chair clássica de Pilates em madeira clara",
  },
  {
    src: galleryWundaChair.url,
    alt: "Wunda Chair com pegas",
  },
  {
    src: galleryClassico.url,
    alt: "Equipamento clássico de Pilates",
  },
  {
    src: galleryMatwork.url,
    alt: "Zona de matwork com tapetes, magic circle e acessórios",
  },
  {
    src: galleryAcessoriosCesto.url,
    alt: "Cesto em rattan com tapetes, blocos e magic circles",
  },
  {
    src: galleryRecepcao.url,
    alt: "Detalhe da receção do estúdio, armário em madeira e rattan",
  },
];

const TEAM = [
  {
    name: "Filipa Leal",
    role: "Proprietária",
    bio: "Filipa Leal, proprietária do Core&More, licenciada em Fisioterapia desde 2011, trabalhou durante alguns anos na área de Fisioterapia Dermato-funcional e em Músculo-esquelética. Dedica-se no presente às aulas de Pilates, tendo formação em Pilates clássico pela Uno Pilates e Pilates clínico. É formadora de Pilates clínico pela APPI, na Bwizer.",
    photo: filipaPhoto.url,
  },
  {
    name: "Marisa Teixeira",
    role: "Fisioterapeuta e instrutora de Pilates",
    bio: "Licenciada em Fisioterapia desde 2017, dedica-se fundamentalmente às áreas Músculo-esquelética e Dermato-funcional, trabalhando num gabinete de Fisioterapia. Dá aulas de Pilates a pequenos grupos e individuais. Tem formação em Pilates clínico Matwork desde 2019 e está a frequentar a formação de Pilates Clássico no estúdio To be Pilates.",
    photo: marisaPhoto.url,
  },
  {
    name: "Iva Sousa",
    role: "Instrutora de Pilates e Personal Trainer",
    bio: "Técnica de Exercício Físico desde 2023 e Personal Trainer. É uma apaixonada por Crossfit, tem o level 1 e dá aulas desta modalidade desde 2021. Começou por fazer formação de Pilates matwork na Promofit e está neste momento a terminar a de Pilates Clássico no estúdio To be Pilates.",
    photo: ivaPhoto.url,
  },
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
      <img
        src={galleryReformersVista.url}
        alt="Sala do Core&More Pilates Studio, com Reformers, chão em madeira clara e planta"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/15" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[calc(92vh-11rem)] w-full max-w-6xl flex-col justify-center px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl bg-background/85 p-8 backdrop-blur-sm sm:p-12">
            <p className="eyebrow">Pilates studio em Matosinhos</p>
            <h1 className="mt-6 text-3xl leading-[1.2] sm:text-4xl md:text-5xl">
              “Change happens through movement
              <br />
              and movement heals”
              <span className="mt-3 block text-lg font-light not-italic text-foreground/70 sm:text-xl">
                Joseph Pilates
              </span>
            </h1>
            <p className="mt-6 text-lg font-light italic text-foreground/80">
              Fortalecer a partir do core.
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Um estúdio intimista de Pilates clássico em Matosinhos, com turmas
              reduzidas, equipamento profissional e acompanhamento próximo em cada
              movimento.
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
              com o método Pilates nos equipamentos criados pelo autor deste método de
              treino, Joseph Pilates, com uma abordagem que respeita o corpo de cada
              aluno e a sua história.
            </p>
            <p>
              Abrimos portas a 3 de novembro de 2025, com um estúdio novo, acolhedor e
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
              "Pilates clássico: equipamentos e matwork",
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
          <img
            src={galleryVistaGeral.url}
            alt="Vista geral do estúdio Core&More, com Reformers e luz natural"
            className="aspect-[4/5] w-full rounded-sm object-cover"
          />
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
        <div className="mx-auto mt-12 max-w-3xl space-y-4 border border-border bg-card p-8 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">Aulas em aparelhos:</strong> individuais, em dupla ou em pequenos grupos (máx. 3 pessoas). Duração: 50 minutos.
          </p>
          <p>
            <strong className="text-foreground">Aulas de matwork:</strong> pequenos grupos de máximo 3 pessoas, com utensílios como softball e magic circle.
          </p>
          <p>
            As aulas de aparelhos são agendadas conforme a disponibilidade do aluno e do professor.
          </p>
          <p>
            As aulas de matwork acontecem às segundas e quartas-feiras às 10h (com possibilidade de abertura de mais horários).
          </p>
        </div>
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
              <li className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
                <span>Sábado</span>
                <span className="text-muted-foreground">Manhã</span>
              </li>
              <li className="flex items-baseline justify-between gap-4">
                <span>Feriados</span>
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
                <span className="text-muted-foreground">10h</span>
              </li>
              <li className="flex items-baseline justify-between gap-4">
                <span>Quarta feira</span>
                <span className="text-muted-foreground">10h</span>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Possibilidade de abertura de mais horários mediante procura.
            </p>
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
          title="Um espaço acolhedor, pensado ao detalhe"
          intro="Chão em madeira clara, espelhos amplos, plantas e cestos em rattan com acessórios. Um ambiente studio com equipamento profissional: Reformer, Cadillac, Eletric Chair, Wunda Chair, Ladder Barrel, Small Barrel, Spine Corrector e Foot Corrector."
        />
      </Reveal>
      <StudioGallery />
    </Section>
  );
}

function StudioGallery() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = GALLERY.length;
  const goTo = (next: number) => setIndex(((next % total) + total) % total);
  const current = GALLERY[index]!;

  return (
    <div className="mt-14">
      <Reveal>
        <div
          className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-sm border border-border bg-nude/40"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            const start = touchStartX.current;
            touchStartX.current = null;
            if (start === null) return;
            const dx = (e.changedTouches[0]?.clientX ?? start) - start;
            if (Math.abs(dx) > 48) goTo(index + (dx < 0 ? 1 : -1));
          }}
        >
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            className="gallery-fade aspect-[3/4] w-full object-cover sm:aspect-[4/5]"
          />
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Fotografia anterior"
            className="absolute top-1/2 left-3 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-foreground shadow-sm backdrop-blur transition-opacity hover:opacity-90"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Fotografia seguinte"
            className="absolute top-1/2 right-3 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-foreground shadow-sm backdrop-blur transition-opacity hover:opacity-90"
          >
            <ChevronRight className="size-5" />
          </button>
          <p className="absolute right-4 bottom-3 rounded-full bg-background/85 px-3 py-1 text-[0.65rem] tracking-[0.2em] text-muted-foreground backdrop-blur">
            {index + 1} / {total}
          </p>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <div className="mt-4 flex justify-start gap-3 overflow-x-auto pb-2 sm:justify-center">
          {GALLERY.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ver fotografia ${i + 1}: ${item.alt}`}
              aria-current={i === index}
              className={cn(
                "shrink-0 overflow-hidden rounded-sm border transition-opacity",
                i === index
                  ? "border-sage-deep opacity-100"
                  : "border-transparent opacity-60 hover:opacity-100",
              )}
            >
              <img
                src={item.src}
                alt=""
                loading="lazy"
                className="h-16 w-14 object-cover sm:h-20 sm:w-16"
              />
            </button>
          ))}
        </div>
      </Reveal>
    </div>
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
      <div className="mt-14 overflow-hidden border border-border bg-card">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-nude/60 text-left text-xs tracking-[0.14em] uppercase text-muted-foreground">
            <tr>
              <th className="px-6 py-4 font-normal">Serviço</th>
              <th className="px-6 py-4 text-right font-normal">Preço</th>
            </tr>
          </thead>
          <tbody>
            {PLANS.map((plan, index) => (
              <tr
                key={plan.name}
                className={cn(
                  "border-b border-border last:border-b-0",
                  index % 2 === 1 && "bg-background/50",
                )}
              >
                <td className="px-6 py-4">{plan.name}</td>
                <td className="px-6 py-4 text-right font-medium">{plan.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Todos os preços são por pessoa.
      </p>
      <Reveal delay={120}>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="border border-border bg-card p-8">
            <h3 className="text-xl">Mensalidade</h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Dia e horário fixos.</li>
              <li>Desmarcação com 24h de antecedência.</li>
              <li>Possibilidade de alterar horário mediante disponibilidade do professor.</li>
            </ul>
          </div>
          <div className="border border-border bg-card p-8">
            <h3 className="text-xl">Pack de aulas (5 ou 10 aulas)</h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Sem compromisso de dia/horário fixo.</li>
              <li>Agendamento semanal.</li>
              <li>Cancelamento até 24h antes da aula.</li>
            </ul>
          </div>
        </div>
      </Reveal>
      <Reveal delay={160}>
        <div className="mt-10 border border-border bg-nude/60 p-8 text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Fala connosco e indicamos o plano mais adequado ao teu objetivo e disponibilidade.
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
  const [active, setActive] = useState(0);
  const next = () => setActive((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setActive((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const current = TESTIMONIALS[active]!;

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
      <Reveal delay={100}>
        <div className="relative mx-auto mt-14 max-w-3xl">
          <figure className="flex min-h-[260px] flex-col items-center border border-border bg-card px-8 py-10 text-center sm:px-12">
            <Stars />
            <blockquote className="mt-6 flex-1 text-base leading-relaxed text-muted-foreground sm:text-lg">
              “{current.text}”
            </blockquote>
            <figcaption className="mt-8 text-xs tracking-[0.16em] uppercase">
              {current.name}
            </figcaption>
          </figure>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Testemunho anterior"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Ver testemunho ${i + 1}`}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-colors",
                    i === active ? "bg-foreground" : "bg-border hover:bg-muted-foreground/40"
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Testemunho seguinte"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </Reveal>
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
        <SectionHeading
          eyebrow="A nossa equipa"
          title="Quem acompanha cada movimento"
          intro="Profissionais qualificados, com olhar atento e uma abordagem próxima, para que cada aula seja segura, eficaz e personalizada."
        />
      </Reveal>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((member, index) => (
          <Reveal key={member.name} delay={index * 90}>
            <article className="flex h-full flex-col border border-border bg-card">
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={`Fotografia de ${member.name}`}
                  className="aspect-[4/5] w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[4/5] w-full items-center justify-center bg-background/50 text-sm text-muted-foreground">
                  Fotografia a adicionar.
                </div>
              )}
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-xl">{member.name}</h3>
                {member.role ? (
                  <p className="mt-1 text-xs tracking-[0.14em] uppercase text-sage-deep">
                    {member.role}
                  </p>
                ) : null}
                {member.bio ? (
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                ) : (
                  <div className="mt-4 flex flex-1 items-center justify-center rounded-sm border border-dashed border-border bg-background/50 p-8 text-center text-sm text-muted-foreground">
                    Bio a adicionar.
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Contacts() {
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
          <div className="flex h-full flex-col justify-center border border-border bg-card p-8">
            <h3 className="text-2xl">Fala connosco pelo WhatsApp</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A forma mais rápida de marcar a tua aula ou esclarecer dúvidas. Responderemos com as próximas vagas disponíveis.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-3 rounded-sm bg-sage-deep px-8 py-4 text-xs tracking-[0.18em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="size-5" />
              Enviar mensagem no WhatsApp
            </a>

            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Também podes ligar para {PHONE_DISPLAY} ou enviar mensagem direta no Instagram.
              Estamos na {ADDRESS}.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}


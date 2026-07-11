import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, MapPin, Menu, X, ArrowRight, Phone } from "lucide-react";

import heroImg from "@/assets/hero-boxer.jpg";
import techniqueImg from "@/assets/technique.png";
import strengthImg from "@/assets/strength.png";
import padworkImg from "@/assets/padwork.png";
import motivationalImg from "@/assets/motivational.jpg";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.png";
import gallery4 from "@/assets/gallery4.jpg";


export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#over", label: "Over ons" },
  { href: "#trainingen", label: "Trainingen" },
  { href: "#uurrooster", label: "Uurrooster" },
  { href: "#locatie", label: "Locatie" },
  { href: "#contact", label: "Contact" },
];

const IG_URL = "https://www.instagram.com/wildcardantwerp/";
const MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Kapelstraat+113-115+Hoboken+Antwerpen";
const MAPS_EMBED = "https://www.google.com/maps?q=Kapelstraat+113-115,+Hoboken,+Antwerpen&output=embed";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-ink/95 backdrop-blur border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
          <a href="#home" className="text-display leading-none text-foreground">
            <div className="text-lg md:text-xl">WILDCARD</div>
            <div className="text-lg md:text-xl text-primary">ANTWERP</div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80 hover:text-primary transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#uurrooster"
              className="hidden md:inline-flex items-center gap-2 bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Kom trainen <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-ink flex flex-col animate-fade-up">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <div className="text-display text-lg">
              WILDCARD <span className="text-primary">ANTWERP</span>
            </div>
            <button onClick={() => setOpen(false)} className="p-2" aria-label="Sluit menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-start justify-center gap-6 px-8">
            {NAV.map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-display text-5xl text-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary text-sm align-top mr-3">0{i + 1}</span>
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="m-6 inline-flex items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.2em]"
          >
            <Instagram className="h-5 w-5" /> @wildcardantwerp
          </a>
        </div>
      )}
    </>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden grain">
      <img
        src={heroImg}
        alt="Bokser op de heavy bag in Wildcard Antwerp"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />

      {/* Giant outlined wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-2vw] flex justify-center overflow-hidden"
      >
        <span
          className="text-display text-[22vw] leading-none"
          style={{
            WebkitTextStroke: "1px oklch(0.97 0.005 60 / 0.06)",
            color: "transparent",
          }}
        >
          WILDCARD
        </span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-5 pb-24 pt-32 md:px-10 md:pb-32">
        <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-8 bg-primary" />
          American Boxing • Hoboken
        </div>

        <h1 className="text-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem]">
          Geen excuses.
          <br />
          <span className="text-primary">ALLEEN WERK.</span>
        </h1>

        <p className="mt-8 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed">
          Boksen, kracht en conditie in een omgeving waar discipline,
          techniek en hard werk centraal staan.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#uurrooster"
            className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Kom trainen
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#uurrooster"
            className="inline-flex items-center gap-3 border border-foreground/30 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] hover:border-primary hover:text-primary transition-colors"
          >
            Bekijk het uurrooster
          </a>
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm text-foreground/70">
          <MapPin className="h-4 w-4 text-primary" />
          Kapelstraat 113, Hoboken
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.4em] text-foreground/60">
        <span>Scroll</span>
        <span className="animate-scroll-bounce h-8 w-px bg-foreground/60" />
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section id="over" className="relative bg-background py-24 md:py-32 grain">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-10">
        <div>
          <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Wildcard Antwerp
          </div>
          <h2 className="text-display text-5xl md:text-7xl">
            Meer dan
            <br />
            <span className="text-primary">alleen boksen.</span>
          </h2>
          <div className="mt-8 space-y-5 text-foreground/75 leading-relaxed max-w-lg">
            <p>
              Wildcard Antwerp is een plek voor mensen die willen werken.
              Aan hun techniek. Aan hun conditie. Aan hun discipline.
            </p>
            <p>
              Of je nu je eerste stappen in de bokssport zet of je skills
              verder wilt aanscherpen: op training draait het om focus,
              vooruitgang en inzet.
            </p>
          </div>

          <blockquote className="mt-12 border-l-2 border-primary pl-6">
            <p className="text-display text-2xl md:text-3xl leading-tight">
              "Discipline. Dedication. Hard&nbsp;work."
            </p>
          </blockquote>
        </div>

        <div className="relative">
          <div className="ring-corner relative aspect-[4/5] w-full overflow-hidden">
            <img
              src={techniqueImg}
              alt="Boksende hand met wraps"
              width={1200}
              height={1500}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground/70">
                ROUND 01 — Focus
              </div>
              <div className="text-primary text-display text-3xl">03:00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TRAINING_BLOCKS = [
  {
    n: "01",
    title: "Bokstechniek",
    body: "Werk aan je houding, voetenwerk, verdediging en stoottechniek. Herhaling, precisie en controle staan centraal.",
    img: padworkImg,
  },
  {
    n: "02",
    title: "Kracht & Conditie",
    body: "Bouw de fysieke basis die je nodig hebt. Explosiviteit, uithoudingsvermogen en kracht.",
    img: strengthImg,
  },
  {
    n: "03",
    title: "Boxing Mentality",
    body: "Blijf scherp wanneer het zwaar wordt. Discipline en doorzettingsvermogen worden op elke training getest.",
    img: gallery3,
  },
];

function TrainingsSection() {
  return (
    <section id="trainingen" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary" />
              De training
            </div>
            <h2 className="text-display text-5xl md:text-7xl max-w-2xl">
              Stap de gym binnen.
              <br />
              <span className="text-primary">Doe het werk.</span>
            </h2>
          </div>
        </div>

        <div className="rope-line mb-12" />

        <div className="space-y-16 md:space-y-24">
          {TRAINING_BLOCKS.map((b, i) => (
            <div
              key={b.n}
              className={`grid gap-8 md:grid-cols-12 md:gap-12 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-7 relative overflow-hidden group">
                <img
                  src={b.img}
                  alt={b.title}
                  loading="lazy"
                  className="w-full h-[380px] md:h-[520px] object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 text-display text-6xl md:text-8xl text-primary/90">
                  {b.n}
                </div>
              </div>
              <div className="md:col-span-5 flex flex-col justify-center">
                <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-primary mb-4">
                  Round {b.n}
                </div>
                <h3 className="text-display text-4xl md:text-5xl uppercase">{b.title}</h3>
                <div className="mt-6 h-px w-16 bg-primary" />
                <p className="mt-6 text-foreground/75 leading-relaxed">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MotivationalBreak() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden grain">
      <img
        src={motivationalImg}
        alt="Boksring bij nacht"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/75" />
      <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-5 py-24 text-center">
        <div className="rope-line w-40 mb-10" />
        <h2 className="text-display text-6xl md:text-8xl lg:text-9xl leading-[0.9]">
          Believe.
          <br />
          Work.
          <br />
          <span className="text-primary">Achieve.</span>
        </h2>
        <div className="rope-line w-40 mt-10" />
        <p className="mt-8 max-w-md text-foreground/80">
          Vooruitgang begint wanneer je komt opdagen.
        </p>
      </div>
    </section>
  );
}

const SCHEDULE = [
  { day: "Dinsdag", time: "19:30–20:30" },
  { day: "Donderdag", time: "19:30–20:30" },
  { day: "Zaterdag", time: "16:00–17:00" },
];

const KIDS_SCHEDULE = [
  { day: "Woensdag", time: "17:00–18:00" },
  { day: "Zaterdag", time: "12:00–13:00" },
];

function ScheduleSection() {
  return (
    <section id="uurrooster" className="relative bg-background py-24 md:py-32 grain">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-8 bg-primary" />
          Uurrooster
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-display text-5xl md:text-7xl">
            Volwassenen
            <br />
            <span className="text-primary">Trainingen</span>
          </h2>
          <p className="max-w-md text-foreground/75">
            Drie momenten per week. Kom trainen, werk aan je techniek en blijf vooruitgaan.
          </p>
        </div>

        <div className="mt-16 border-t border-border">
          {SCHEDULE.map((s) => (
            <div
              key={s.day}
              className="group flex items-center justify-between border-b border-border py-8 md:py-10 transition-colors hover:bg-surface/50 px-2 md:px-4"
            >
              <div className="flex items-center gap-6 md:gap-10">
                <span className="hidden md:block text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                  Round
                </span>
                <span className="text-display text-4xl md:text-6xl uppercase transition-colors group-hover:text-primary">
                  {s.day}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden md:block h-px w-16 bg-border transition-all group-hover:w-32 group-hover:bg-primary" />
                <span className="text-display text-3xl md:text-5xl text-foreground/90 group-hover:text-primary transition-colors">
                  {s.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h3 className="text-display text-4xl md:text-6xl">
              Kids Boxing
              <br />
              <span className="text-primary">Training</span>
            </h3>
            <p className="max-w-md text-foreground/75">
              Groep 7–14 jaar. Leren boksen, bewegen en discipline opbouwen in een veilige, energieke sfeer.
            </p>
          </div>

          <div className="mt-10 border-t border-border">
            {KIDS_SCHEDULE.map((s) => (
              <div
                key={s.day}
                className="group flex items-center justify-between border-b border-border py-8 md:py-10 transition-colors hover:bg-surface/50 px-2 md:px-4"
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="hidden md:block text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                    Round
                  </span>
                  <span className="text-display text-4xl md:text-6xl uppercase transition-colors group-hover:text-primary">
                    {s.day}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden md:block h-px w-16 bg-border transition-all group-hover:w-32 group-hover:bg-primary" />
                  <span className="text-display text-3xl md:text-5xl text-foreground/90 group-hover:text-primary transition-colors">
                    {s.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-foreground/70 max-w-md">
            Vragen over een training? Neem contact op met Wildcard Antwerp.
          </p>
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Instagram className="h-4 w-4" />
            Stuur een DM
          </a>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Team
          </div>
          <h2 className="text-display text-5xl md:text-7xl">
            One team.
            <br />
            <span className="text-primary">One mentality.</span>
          </h2>
          <p className="mt-6 text-foreground/75 max-w-xl leading-relaxed">
            Je traint niet alleen. Wildcard draait om samen werken, elkaar
            pushen en elke training beter buitenstappen dan je binnenkwam.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          <div className="col-span-2 row-span-2 aspect-square md:aspect-auto md:h-full overflow-hidden grain">
            <img src={gallery3} alt="Team van boksers" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src={gallery2} alt="Rode bokshandschoenen" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src={gallery4} alt="Heavy bags" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src={padworkImg} alt="Pad work" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src={gallery1} alt="Shadowboxing" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-foreground/30 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] hover:border-primary hover:text-primary transition-colors"
          >
            <Instagram className="h-4 w-4" /> Volg @wildcardantwerp
          </a>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="relative bg-primary text-primary-foreground overflow-hidden grain">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{ backgroundImage: "linear-gradient(180deg, transparent, oklch(0 0 0 / 0.4))" }}
      />
      <div className="relative mx-auto max-w-[1200px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em]">
              <span className="h-px w-8 bg-primary-foreground" />
              Kom trainen
            </div>
            <h2 className="text-display text-6xl md:text-8xl leading-[0.9]">
              Klaar om
              <br />
              te beginnen?
            </h2>
            <p className="mt-6 max-w-md text-primary-foreground/90 text-lg">
              De moeilijkste stap is binnenkomen. Daarna begint het werk.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3">
            <a
              href="#uurrooster"
              className="inline-flex items-center justify-between gap-3 bg-ink px-8 py-5 text-sm font-bold uppercase tracking-[0.2em] text-foreground hover:bg-ink/80 transition-colors"
            >
              Kom trainen <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between gap-3 border border-primary-foreground px-8 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Instagram <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section id="locatie" className="bg-background py-24 md:py-32 grain">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-8 bg-primary" />
          Locatie
        </div>
        <h2 className="text-display text-5xl md:text-7xl mb-16">
          Vind ons
          <br />
          <span className="text-primary">in Hoboken.</span>
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 aspect-[16/10] overflow-hidden border border-border">
            <iframe
              title="Wildcard Antwerp op de kaart"
              src={MAPS_EMBED}
              className="h-full w-full grayscale contrast-125"
              style={{ filter: "invert(0.9) hue-rotate(180deg) grayscale(0.5)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="bg-surface border border-border p-8 md:p-10 flex flex-col gap-8">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary mb-3">
                Adres
              </div>
              <div className="text-display text-xl leading-tight">
                Wildcard Antwerp<br />
                Kapelstraat 113-115<br />
                Hoboken, Antwerpen
              </div>
            </div>

            <div className="h-px bg-border" />

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary mb-4">
                Training volwassenen
              </div>
              <ul className="space-y-2 font-medium">
                <li className="flex justify-between border-b border-border/60 pb-2">
                  <span className="uppercase tracking-wider text-sm">Di</span>
                  <span className="text-display">19:30–20:30</span>
                </li>
                <li className="flex justify-between border-b border-border/60 pb-2">
                  <span className="uppercase tracking-wider text-sm">Do</span>
                  <span className="text-display">19:30–20:30</span>
                </li>
                <li className="flex justify-between">
                  <span className="uppercase tracking-wider text-sm">Za</span>
                  <span className="text-display">16:00–17:00</span>
                </li>
              </ul>
            </div>

            <div className="h-px bg-border" />

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary mb-4">
                Kids Boxing (7–14 jaar)
              </div>
              <ul className="space-y-2 font-medium">
                <li className="flex justify-between border-b border-border/60 pb-2">
                  <span className="uppercase tracking-wider text-sm">Wo</span>
                  <span className="text-display">17:00–18:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="uppercase tracking-wider text-sm">Za</span>
                  <span className="text-display">12:00–13:00</span>
                </li>
              </ul>
            </div>

            <div className="h-px bg-border" />

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary mb-3">
                Contact
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+32483273472"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" /> 0483 27 34 72
                </a>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-4 w-4" /> @wildcardantwerp
                </a>
              </div>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-3 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Route plannen <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink border-t border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-6vw] text-center text-display leading-none select-none"
        style={{
          fontSize: "18vw",
          color: "transparent",
          WebkitTextStroke: "1px oklch(0.97 0.005 60 / 0.04)",
        }}
      >
        WILDCARD ANTWERP
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 pt-20 pb-40 md:px-10 md:pt-24">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-display text-3xl md:text-4xl leading-none">
              WILDCARD<br /><span className="text-primary">ANTWERP</span>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Boxing<br />Strength &amp; Conditioning
            </p>
            <address className="not-italic mt-6 text-sm text-foreground/70 leading-relaxed">
              Kapelstraat 113-115<br />
              Hoboken, Antwerpen
            </address>
            <a
              href="tel:+32483273472"
              className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" /> 0483 27 34 72
            </a>
          </div>

          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary mb-4">
              Navigatie
            </div>
            <ul className="space-y-2 text-sm">
              {NAV.slice(0, 5).map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-foreground/70 hover:text-primary transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary mb-4">
              Social
            </div>
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-border pt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <div>© 2026 Wildcard Antwerp</div>
          <div>Discipline. Dedication. Hard work.</div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <TrainingsSection />
        <MotivationalBreak />
        <ScheduleSection />
        <TeamSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

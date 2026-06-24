import { CursorLight } from "@/components/cursor-light";
import { MotionSection } from "@/components/motion-section";
import { PageFade } from "@/components/page-fade";
import { PlanterVisual } from "@/components/planter-visual";
import { ProjectCard } from "@/components/project-card";
import { studies } from "@/lib/studies";

const processSteps = ["Idea", "Form", "Texture", "Color", "Product Story"];

export default function Home() {
  return (
    <PageFade>
      <CursorLight />
      <main className="relative isolate min-h-screen overflow-hidden text-charcoal">
        <div className="grain-layer" aria-hidden="true" />
        <Header />
        <Hero />
        <Manifesto />
        <SelectedStudies />
        <MaterialAtmosphere />
        <Process />
        <About />
        <Contact />
      </main>
    </PageFade>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-charcoal/10 bg-paper/78 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-[1480px] items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#" className="text-sm font-medium tracking-[-0.01em] text-charcoal">
          Alex Teng Studio
        </a>
        <div className="hidden items-center gap-8 text-sm text-charcoal/60 md:flex">
          <a className="transition-colors hover:text-charcoal" href="#work">
            Work
          </a>
          <a className="transition-colors hover:text-charcoal" href="#process">
            Process
          </a>
          <a className="transition-colors hover:text-charcoal" href="#about">
            About
          </a>
          <a className="transition-colors hover:text-charcoal" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto grid min-h-[100dvh] max-w-[1480px] grid-cols-1 items-center gap-12 px-5 pb-24 pt-28 md:grid-cols-[0.88fr_1.12fr] md:px-8 md:pt-24">
      <div className="relative z-20 max-w-3xl">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-charcoal/44">
          Planter & Gardenware Product Design
        </p>
        <h1 className="max-w-[10ch] text-[clamp(4.4rem,12vw,12rem)] font-medium leading-[0.82] tracking-[-0.075em] text-charcoal">
          Alex Teng Studio
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-charcoal/64 md:text-xl md:leading-9">
          Exploring modern planter forms, matte textures, earthy colors, and
          product concepts for indoor and outdoor spaces.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a className="button-primary" href="#work">
            View Work
          </a>
          <a className="button-secondary" href="mailto:tengyue921011@gmail.com">
            Contact
          </a>
        </div>
      </div>
      <div className="relative min-h-[480px] md:min-h-[720px]">
        <div className="hero-slab hero-slab-a" aria-hidden="true" />
        <div className="hero-slab hero-slab-b" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[680px] md:right-0 md:mx-0">
          <PlanterVisual variant="stone" />
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <MotionSection className="mx-auto max-w-[1480px] px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-10 border-y border-charcoal/14 py-14 md:grid-cols-[0.8fr_1.2fr] md:items-end md:py-20">
        <p className="max-w-xs text-sm leading-7 text-charcoal/52">
          A personal design language shaped by restraint, proportion, and the
          quiet pressure of material.
        </p>
        <div className="text-[clamp(3.2rem,9vw,9.8rem)] font-medium leading-[0.9] tracking-[-0.07em]">
          <p>Quiet forms.</p>
          <p>Tactile surfaces.</p>
          <p>Designed for modern living.</p>
        </div>
      </div>
    </MotionSection>
  );
}

function SelectedStudies() {
  return (
    <section id="work" className="mx-auto max-w-[1480px] px-5 py-20 md:px-8 md:py-28">
      <MotionSection className="mb-8 max-w-3xl md:mb-12">
        <h2 className="text-5xl font-medium leading-none tracking-[-0.055em] md:text-7xl">
          Selected Studies
        </h2>
      </MotionSection>
      <div>
        {studies.map((study, index) => (
          <ProjectCard key={study.title} study={study} index={index} />
        ))}
      </div>
    </section>
  );
}

function MaterialAtmosphere() {
  return (
    <MotionSection className="mx-auto max-w-[1480px] px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <div>
          <h2 className="max-w-[11ch] text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-8xl">
            Material is not decoration.
          </h2>
          <p className="mt-8 max-w-md text-lg leading-8 text-charcoal/62">
            It defines how an object feels before it is used.
          </p>
        </div>
        <div className="material-grid">
          <div className="material-panel material-stone" />
          <div className="material-panel material-clay" />
          <div className="material-panel material-sand" />
          <div className="material-panel material-sage" />
        </div>
      </div>
    </MotionSection>
  );
}

function Process() {
  return (
    <MotionSection id="process" className="mx-auto max-w-[1480px] px-5 py-24 md:px-8 md:py-32">
      <h2 className="max-w-2xl text-5xl font-medium leading-none tracking-[-0.055em] md:text-7xl">
        Process
      </h2>
      <div className="mt-14 grid gap-4 md:grid-cols-5">
        {processSteps.map((step, index) => (
          <div key={step} className="process-step">
            <p className="font-mono text-xs text-charcoal/38">{String(index + 1).padStart(2, "0")}</p>
            <p className="mt-12 text-2xl tracking-[-0.035em] text-charcoal">{step}</p>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}

function About() {
  return (
    <MotionSection id="about" className="mx-auto max-w-[1480px] px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-10 md:grid-cols-[0.55fr_1.45fr]">
        <h2 className="text-4xl font-medium tracking-[-0.05em] md:text-6xl">About</h2>
        <p className="max-w-4xl text-3xl leading-[1.18] tracking-[-0.045em] text-charcoal/78 md:text-6xl">
          Alex Teng is a product designer focused on planter and gardenware
          concepts. His work explores form, proportion, texture, color, and
          material expression, with a focus on calm modern objects for indoor
          and outdoor living.
        </p>
      </div>
    </MotionSection>
  );
}

function Contact() {
  return (
    <MotionSection id="contact" className="mx-auto max-w-[1480px] px-5 pb-10 pt-24 md:px-8 md:pb-12 md:pt-32">
      <div className="rounded-[1.15rem] border border-charcoal/12 bg-charcoal px-6 py-10 text-paper shadow-soft md:px-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 className="max-w-3xl text-5xl font-medium leading-none tracking-[-0.06em] md:text-8xl">
              Contact
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-paper/68 md:text-lg">
              For design collaboration, planter concepts, gardenware
              development, or visual product studies, feel free to get in touch.
            </p>
          </div>
          <a className="button-on-dark" href="mailto:tengyue921011@gmail.com">
            tengyue921011@gmail.com
          </a>
        </div>
      </div>
      <footer className="flex flex-col gap-3 py-8 text-sm text-charcoal/45 md:flex-row md:items-center md:justify-between">
        <p>Alex Teng Studio</p>
        <p>Independent planter & gardenware product design portfolio</p>
      </footer>
    </MotionSection>
  );
}

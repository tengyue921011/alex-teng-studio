import { CursorLight } from "@/components/cursor-light";
import { MotionSection } from "@/components/motion-section";
import { PageFade } from "@/components/page-fade";
import { ParallaxFrame } from "@/components/parallax-frame";
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
    <header className="fixed left-0 right-0 top-0 z-40">
      <nav className="mx-auto mt-3 flex h-14 max-w-[1480px] items-center justify-between px-5 md:mt-5 md:h-16 md:px-8">
        <a href="#" className="nav-mark text-sm font-medium tracking-[-0.01em] text-charcoal">
          Alex Teng Studio
        </a>
        <div className="hidden rounded-full border border-charcoal/10 bg-paper/58 px-5 py-3 text-sm text-charcoal/60 shadow-[0_18px_60px_rgb(61_54_45_/_0.08)] backdrop-blur-xl md:flex md:items-center md:gap-7">
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
    <section className="hero-field relative mx-auto grid min-h-[100dvh] max-w-[1480px] grid-cols-1 items-center gap-10 px-5 pb-20 pt-28 md:grid-cols-[0.78fr_1.22fr] md:px-8 md:pb-28 md:pt-24">
      <div className="relative z-20 max-w-3xl self-end md:pb-10">
        <p className="mb-6 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-charcoal/42">
          Planter & Gardenware Product Design
        </p>
        <h1 className="text-balance max-w-[9ch] text-[clamp(4.8rem,12.4vw,13.5rem)] font-medium leading-[0.78] tracking-[-0.085em] text-charcoal">
          Alex Teng Studio
        </h1>
        <p className="mt-8 max-w-[34rem] text-lg leading-8 text-charcoal/64 md:text-[1.35rem] md:leading-10">
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
      <div className="relative min-h-[500px] self-stretch md:min-h-[760px]">
        <div className="hero-slab hero-slab-a" aria-hidden="true" />
        <div className="hero-slab hero-slab-b" aria-hidden="true" />
        <div className="hero-orbit" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[760px] md:right-0 md:mx-0">
          <ParallaxFrame distance={28}>
            <PlanterVisual variant="stone" featured />
          </ParallaxFrame>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <MotionSection className="mx-auto max-w-[1480px] px-5 py-28 md:px-8 md:py-40">
      <div className="manifesto-panel grid gap-12 py-16 md:grid-cols-[0.72fr_1.28fr] md:items-end md:py-24">
        <p className="max-w-xs text-sm leading-7 text-charcoal/52 md:pb-4">
          A personal design language shaped by restraint, proportion, and the
          quiet pressure of material.
        </p>
        <div className="text-balance text-[clamp(3.45rem,9vw,10.5rem)] font-medium leading-[0.86] tracking-[-0.08em]">
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
    <section id="work" className="mx-auto max-w-[1480px] px-5 py-24 md:px-8 md:py-36">
      <MotionSection className="mb-6 max-w-4xl md:mb-10">
        <h2 className="text-balance text-6xl font-medium leading-[0.9] tracking-[-0.07em] md:text-8xl">
          Selected Studies
        </h2>
      </MotionSection>
      <div className="study-list">
        {studies.map((study, index) => (
          <ProjectCard key={study.title} study={study} index={index} />
        ))}
      </div>
    </section>
  );
}

function MaterialAtmosphere() {
  return (
    <MotionSection className="material-section mx-auto max-w-[1480px] px-5 py-28 md:px-8 md:py-44">
      <div className="grid gap-14 md:grid-cols-[0.72fr_1.28fr] md:items-center">
        <div className="md:pb-20">
          <h2 className="text-balance max-w-[10ch] text-6xl font-medium leading-[0.88] tracking-[-0.07em] md:text-9xl">
            Material is not decoration.
          </h2>
          <p className="mt-9 max-w-md text-xl leading-9 text-charcoal/62">
            It defines how an object feels before it is used.
          </p>
        </div>
        <div className="material-grid" aria-hidden="true">
          <ParallaxFrame className="material-panel material-stone" distance={36} />
          <ParallaxFrame className="material-panel material-clay" distance={58} />
          <ParallaxFrame className="material-panel material-sand" distance={44} />
          <ParallaxFrame className="material-panel material-sage" distance={64} />
        </div>
      </div>
    </MotionSection>
  );
}

function Process() {
  return (
    <MotionSection id="process" className="mx-auto max-w-[1480px] px-5 py-24 md:px-8 md:py-32">
      <h2 className="max-w-2xl text-6xl font-medium leading-[0.9] tracking-[-0.07em] md:text-8xl">
        Process
      </h2>
      <div className="mt-14 grid gap-4 md:grid-cols-5">
        {processSteps.map((step, index) => (
          <div key={step} className="process-step">
            <p className="font-mono text-xs text-charcoal/38">{String(index + 1).padStart(2, "0")}</p>
            <p className="mt-12 text-2xl tracking-[-0.04em] text-charcoal md:text-3xl">{step}</p>
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
        <h2 className="text-5xl font-medium tracking-[-0.06em] md:text-7xl">About</h2>
        <p className="max-w-5xl text-3xl leading-[1.15] tracking-[-0.055em] text-charcoal/78 md:text-6xl">
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
            <h2 className="max-w-3xl text-6xl font-medium leading-[0.88] tracking-[-0.07em] md:text-9xl">
              Contact
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-paper/68 md:text-lg">
              For design collaboration, planter concepts, gardenware
              development, or visual product studies, feel free to get in touch.
            </p>
          </div>
          <a className="button-on-dark" href="mailto:tengyue921011@gmail.com">
            Email Alex
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

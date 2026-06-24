import type { Study } from "@/lib/studies";
import { MotionSection } from "@/components/motion-section";
import { PlanterVisual } from "@/components/planter-visual";

type ProjectCardProps = {
  study: Study;
  index: number;
};

export function ProjectCard({ study, index }: ProjectCardProps) {
  return (
    <MotionSection
      className="group grid gap-6 border-t border-charcoal/15 py-8 md:grid-cols-[0.35fr_1.1fr_0.75fr] md:items-center md:gap-10 md:py-12"
      delay={index * 0.05}
    >
      <div className="flex items-start justify-between md:block">
        <p className="font-mono text-xs text-charcoal/45">{study.number}</p>
        <p className="font-mono text-xs text-charcoal/45 md:mt-24">{study.category}</p>
      </div>
      <div className="overflow-hidden rounded-[1.15rem] border border-white/55 bg-ash/35 shadow-soft">
        <PlanterVisual variant={study.visual} />
      </div>
      <div className="space-y-5">
        <h3 className="max-w-[13ch] text-3xl leading-[0.95] tracking-[-0.04em] text-charcoal md:text-5xl">
          {study.title}
        </h3>
        <p className="max-w-sm text-sm leading-7 text-charcoal/62">{study.description}</p>
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-charcoal/12 px-3 py-1 text-xs text-charcoal/58 transition-colors group-hover:border-clay/35 group-hover:text-charcoal"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

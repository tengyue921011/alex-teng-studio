import type { Study } from "@/lib/studies";
import { MotionSection } from "@/components/motion-section";
import { PlanterVisual } from "@/components/planter-visual";

type ProjectCardProps = {
  study: Study;
  index: number;
};

export function ProjectCard({ study, index }: ProjectCardProps) {
  const reversed = index % 2 === 1;

  return (
    <MotionSection
      className={`study-row group grid gap-7 py-12 md:grid-cols-[0.32fr_1.08fr_0.8fr] md:items-center md:gap-12 md:py-20 ${
        reversed ? "md:[&_.study-visual]:order-3 md:[&_.study-copy]:order-2" : ""
      }`}
      delay={index * 0.05}
    >
      <div className="study-meta flex items-start justify-between border-t border-charcoal/16 pt-4 md:block md:border-t-0 md:pt-0">
        <p className="font-mono text-xs text-charcoal/45">{study.number}</p>
        <p className="mt-0 max-w-24 text-right font-mono text-xs text-charcoal/45 md:mt-28 md:text-left">
          {study.category}
        </p>
      </div>
      <div className="study-visual overflow-hidden rounded-[1.75rem] border border-white/50 bg-ash/25 shadow-soft transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 group-hover:shadow-[0_46px_120px_rgb(61_54_45_/_0.18)]">
        <PlanterVisual variant={study.visual} />
      </div>
      <div className="study-copy space-y-6">
        <h3 className="max-w-[14ch] text-4xl leading-[0.9] tracking-[-0.055em] text-charcoal md:text-6xl">
          {study.title}
        </h3>
        <p className="max-w-md text-base leading-8 text-charcoal/62 md:text-lg">
          {study.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-charcoal/12 px-3 py-1 text-xs text-charcoal/58 transition-colors duration-500 group-hover:border-clay/40 group-hover:bg-paper/32 group-hover:text-charcoal"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

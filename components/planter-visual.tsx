import type { Study } from "@/lib/studies";

type PlanterVisualProps = {
  variant: Study["visual"];
  compact?: boolean;
  featured?: boolean;
};

export function PlanterVisual({
  variant,
  compact = false,
  featured = false
}: PlanterVisualProps) {
  return (
    <div
      className={`visual-stage visual-${variant} ${compact ? "visual-compact" : ""} ${
        featured ? "visual-featured" : ""
      }`}
    >
      <div className="ambient-plane" />
      <div className="planter-object">
        <span className="planter-inner" />
        <span className="planter-rim" />
        <span className="planter-body" />
        <span className="planter-foot" />
        <span className="planter-shadow" />
      </div>
    </div>
  );
}

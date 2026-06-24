import type { Study } from "@/lib/studies";

type PlanterVisualProps = {
  variant: Study["visual"];
  compact?: boolean;
};

export function PlanterVisual({ variant, compact = false }: PlanterVisualProps) {
  return (
    <div className={`visual-stage visual-${variant} ${compact ? "visual-compact" : ""}`}>
      <div className="ambient-plane" />
      <div className="planter-object">
        <span className="planter-rim" />
        <span className="planter-body" />
        <span className="planter-shadow" />
      </div>
    </div>
  );
}

import type { ExplanationStep } from "@/data/ExplanationSteps";

type Props = {
  card: ExplanationStep;
};

export default function ExplanationCard({ card }: Props) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4">
      <p className="text-sm font-semibold">{card.title}</p>

      <p className="mt-1 text-sm text-neutral-600">
        {card.parts.map((part, i) => {
          if (part.kind === "mono") {
            return (
              <span key={i} className="font-mono text-xs">
                {part.value}
              </span>
            );
          }
          if (part.kind === "em") {
            return (
              <span key={i} className="font-medium">
                {part.value}
              </span>
            );
          }
          return <span key={i}>{part.value}</span>;
        })}
      </p>
    </div>
  );
}

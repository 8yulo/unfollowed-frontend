import ExplanationSteps from "@/data/ExplanationSteps";
import ExplanationCard from "@/components/ExplanationCard";

export default function ExplanationSection() {
  return (
    <section
      id="how"
      className="theme-surface-subtle theme-shadow mt-10 rounded-3xl border p-6 backdrop-blur sm:p-8"
    >
      <h3 className="text-lg font-semibold theme-text-primary">Under the Hood</h3>

      <div className="mt-3 grid gap-4 sm:grid-cols-3">
        {ExplanationSteps.map((step) => (
          <ExplanationCard key={step.title} card={step} />
        ))}
      </div>
    </section>
  );
}

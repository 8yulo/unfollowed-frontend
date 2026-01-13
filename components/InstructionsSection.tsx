import React from "react";
import InstructionsData from "@/data/InstructionsData";

function parseMarkdown(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let key = 0;

  // Split by **bold** markers
  const boldRegex = /\*\*(.*?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = boldRegex.exec(text)) !== null) {
    // Add text before the bold
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    // Add bold text
    parts.push(
      <strong key={key++} className="font-semibold theme-text-primary">
        {match[1]}
      </strong>
    );
    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

export default function InstructionsSection() {
  return (
    <section
      id="instructions"
      className="theme-surface-subtle theme-shadow mt-10 rounded-3xl border p-6 backdrop-blur sm:p-8"
    >
      <div className="space-y-8">
        {InstructionsData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-4">
            {/* Section Title */}
            <h3 className="text-xl font-semibold theme-text-primary">
              {section.title}
            </h3>

            {/* Section Content */}
            {section.content && (
              <div className="theme-text-secondary whitespace-pre-line text-sm leading-relaxed">
                {parseMarkdown(section.content)}
              </div>
            )}

            {/* Steps */}
            {section.steps && (
              <div className="space-y-6">
                {section.steps.map((step) => (
                  <div
                    key={step.number}
                    className="theme-surface rounded-2xl border p-4 sm:p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="theme-badge flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-sm font-semibold">
                        {step.number}
                      </div>
                      <div className="min-w-0 flex-1 space-y-2">
                        <h4 className="text-base font-semibold theme-text-primary">
                          {step.title}
                        </h4>

                        {/* Code Block */}
                        {step.codeBlock && (
                          <div className="overflow-x-auto rounded-lg border bg-[var(--surface-muted)] p-3 font-mono text-xs theme-border">
                            <code className="theme-text-primary">
                              {step.codeBlock}
                            </code>
                          </div>
                        )}

                        {/* Items List */}
                        {step.items && (
                          <ul className="space-y-1.5">
                            {step.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start gap-2 text-sm theme-text-secondary"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-50" />
                                <span>{parseMarkdown(item)}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Warning */}
                        {step.warning && (
                          <div className="mt-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 dark:border-amber-500/30 dark:bg-amber-500/10">
                            <p className="flex items-start gap-2 text-sm">
                              <span className="text-amber-500">⚠️</span>
                              <span className="theme-text-secondary">
                                {parseMarkdown(step.warning)}
                              </span>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Summary */}
            {section.summary && (
              <div className="theme-surface rounded-2xl border p-4 sm:p-5">
                <h4 className="mb-3 text-base font-semibold theme-text-primary">
                  {section.summary.title}
                </h4>
                <div className="grid gap-2 sm:grid-cols-2">
                  {section.summary.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span
                        className={
                          item.type === "positive"
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {item.type === "positive" ? "✅" : "❌"}
                      </span>
                      <span className="theme-text-secondary">
                        {item.text.includes("`") ? (
                          <code className="theme-badge rounded px-1.5 py-0.5 text-xs font-mono">
                            {item.text.replace(/`/g, "")}
                          </code>
                        ) : (
                          item.text
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Divider between sections (except last) */}
            {sectionIndex < InstructionsData.length - 1 && (
              <div className="border-t theme-border-divider pt-8" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

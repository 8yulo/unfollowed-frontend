export type ExplanationTextPart = {
  kind: "text" | "mono" | "em";
  value: string;
};

export type ExplanationStep = {
  title: string;
  parts: ExplanationTextPart[];
};

const ExplanationSteps: ExplanationStep[] = [
  {
    title: "1) Extract usernames from uploaded files",
    parts: [
      { kind: "text", value: "Reads profile links like " },
      { kind: "mono", value: "instagram.com/username" },
      { kind: "text", value: " from uploaded files." },
    ],
  },
  {
    title: "2) Compare list sets",
    parts: [
      { kind: "text", value: "Finds " },
      { kind: "em", value: "following − followers" },
      { kind: "text", value: "." },
    ],
  },
  {
    title: "3) Shows results",
    parts: [
      { kind: "text", value: "Returns a numbered list for people not following back." },
    ],
  },
];

export default ExplanationSteps;

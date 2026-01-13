const IG_PROFILE_RE = /https:\/\/www\.instagram\.com\/([a-zA-Z0-9_.]+)/g;

export function extractUsernamesFromHtml(htmlText: string) {
  const set = new Set<string>();
  const re = new RegExp(IG_PROFILE_RE.source, "g");
  let match: RegExpExecArray | null;

  while ((match = re.exec(htmlText)) !== null) {
    set.add(match[1]);
  }

  return set;
}

export function setDifference(a: Set<string>, b: Set<string>) {
  const diff = new Set<string>();
  for (const v of a) if (!b.has(v)) diff.add(v);
  return diff;
}

export async function readFileText(file: File) {
  return await file.text();
}
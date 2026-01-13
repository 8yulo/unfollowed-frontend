export function extractUsernames(htmlText: string, hasLinks: boolean = false) {
  const set = new Set<string>();

  // Prefer DOM parsing (export HTML is anchor-based)
  const doc = tryParseHtml(htmlText);
  if (doc) {
    const anchors = Array.from(doc.querySelectorAll("a"));

    for (const a of anchors) {
      const href = a.getAttribute("href") ?? "";
      const text = (a.textContent ?? "").trim();

      // 1) Best: pull from href if it points to instagram
      const fromHref = extractUsernameFromInstagramUrl(href);
      const u1 = fromHref ? normalizeAndValidateUsername(fromHref) : null;
      if (u1) set.add(u1);

      // 2) Fallback: sometimes the username is the link text
      // (and href might be relative/odd depending on export)
      const u2 = normalizeAndValidateUsername(text);
      if (u2) set.add(u2);
    }

    return set;
  }

  // Fallback: regex-only parsing (no DOMParser available)
  // If hasLinks, match IG URLs; otherwise still *prefer* IG URL-like patterns to avoid junk.
  const pattern = hasLinks
    ? /https?:\/\/(?:www\.)?instagram\.com\/(?:_u\/)?([a-zA-Z0-9_.]{1,30})/g
    : /https?:\/\/(?:www\.)?instagram\.com\/(?:_u\/)?([a-zA-Z0-9_.]{1,30})/g;

  let match: RegExpExecArray | null;
  while ((match = pattern.exec(htmlText)) !== null) {
    const u = normalizeAndValidateUsername(match[1]);
    if (u) set.add(u);
  }

  return set;
}

function tryParseHtml(htmlText: string): Document | null {
  // Works in browsers 
  if (typeof DOMParser === "undefined") return null;

  try {
    return new DOMParser().parseFromString(htmlText, "text/html");
  } catch {
    return null;
  }
}

function extractUsernameFromInstagramUrl(url: string): string | null {
  if (!url) return null;

  // Handles:
  // - https://www.instagram.com/_u/username
  // - https://www.instagram.com/username
  // - //www.instagram.com/_u/username
  // - /_u/username 
  const m = url.match(
    /(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:_u\/)?([a-zA-Z0-9_.]{1,30})(?:\/|$)/i
  );
  if (m?.[1]) return m[1];
  const m2 = url.match(/\/(?:_u\/)?([a-zA-Z0-9_.]{1,30})(?:\/|$)/);
  return m2?.[1] ?? null;
}

function normalizeAndValidateUsername(candidate: string): string | null {
  if (!candidate) return null;

  // Strip junk
  let u = candidate.trim().replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");

  // Hard structural constraints (not word-based)
  if (u.length < 1 || u.length > 30) return null;
  if (!/^[a-zA-Z0-9._]+$/.test(u)) return null;

  // Must include at least one letter or underscore to avoid timestamps/decimal junk
  if (!/[a-zA-Z_]/.test(u)) return null;

  // Username can't start or end with dot, or have consecutive dots
  if (u.startsWith(".") || u.endsWith(".")) return null;
  if (u.includes("..")) return null;

  return u;
}

export function setDifference(a: Set<string>, b: Set<string>) {
  const diff = new Set<string>();
  for (const v of a) if (!b.has(v)) diff.add(v);
  return diff;
}

export async function readFileText(file: File) {
  return await file.text();
}
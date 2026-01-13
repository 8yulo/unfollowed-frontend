"use client";

import { useMemo, useRef, useState } from "react";
import { extractUsernames, setDifference, readFileText } from "@/helpers/helpers";

import { TopGradientBar, BackgroundGlow } from "@/components/Background";
import Header from "@/components/Header";
import UploadCard from "@/components/UploadCard";
import UserActions from "@/components/UserActions";
import Results from "@/components/Results";
import ExplanationSection from "@/components/ExplanationSection";
import InstructionsSection from "@/components/InstructionsSection";
import Footer from "@/components/Footer";

export default function Home() {
  const followersRef = useRef<HTMLInputElement | null>(null);
  const followingRef = useRef<HTMLInputElement | null>(null);

  const [followersText, setFollowersText] = useState<string | null>(null);
  const [followingText, setFollowingText] = useState<string | null>(null);
  const [results, setResults] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [statusText, setStatusText] = useState("Upload both files to continue.");
  const [hasCompared, setHasCompared] = useState(false);

  const ready = !!followersText && !!followingText;

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return q ? results.filter((u) => u.toLowerCase().includes(q)) : results;
  }, [results, search]);

  async function handleFollowers(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    setFollowersText(f ? await readFileText(f) : null);
  }

  async function handleFollowing(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    setFollowingText(f ? await readFileText(f) : null);
  }

  function compare() {
    const followers = extractUsernames(followersText ?? "");
    const following = extractUsernames(followingText ?? "");
    const diff = Array.from(setDifference(following, followers)).sort();
    setResults(diff);
    setHasCompared(true);
    setStatusText(`Found ${diff.length} accounts not following you back.`);
  }

  function reset() {
    setFollowersText(null);
    setFollowingText(null);
    setResults([]);
    setSearch("");
    setStatusText("Upload both files to continue.");
    if (followersRef.current) followersRef.current.value = "";
    if (followingRef.current) followingRef.current.value = "";
  }

  return (
    <div className="relative mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <TopGradientBar />
      <BackgroundGlow />

      <main className="mx-auto max-w-5xl px-4 py-10">
        <Header />

        <section className="theme-surface-elevated theme-shadow mt-10 rounded-3xl border p-5 backdrop-blur sm:p-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <UploadCard
              title="Upload followers HTML"
              badge="followers_1.html"
              inputRef={followersRef}
              onChange={handleFollowers}
            />
            <UploadCard
              title="Upload following HTML"
              badge="following.html"
              inputRef={followingRef}
              onChange={handleFollowing}
            />
          </div>

          <UserActions ready={ready} statusText={statusText} onCompare={compare} onReset={reset} />

          <Results users={filtered} search={search} onSearchChange={setSearch} hasData={hasCompared}/>
        </section>
        <InstructionsSection />
        <ExplanationSection/>
        <Footer />
      </main>
    </div>
  );
}
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="mx-auto mb-4 h-0.5 w-24 rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-amber-400 opacity-70" />

        <div className="space-y-2 text-center">
          <p className="text-sm theme-text-secondary">
            Built with privacy in mind — your files never leave your computer.
          </p>

          <p className="text-xs theme-text-tertiary">
            This website is open source. View the code on{" "}
            <Link
              href="https://github.com/8yulo/unfollowed-frontend"
              className="font-medium underline underline-offset-2 decoration-[var(--text-muted)] hover:text-[var(--text-primary)] hover:decoration-[var(--text-secondary)] transition"
            >
              GitHub
            </Link>
            .
          </p>

          <p className="pt-2 text-xs theme-text-muted">
            © {year} Unfollowed for IG · Not affiliated with Instagram™ or Meta
            Platforms, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
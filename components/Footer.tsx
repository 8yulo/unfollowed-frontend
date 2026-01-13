export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="mx-auto mb-4 h-0.5 w-24 rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-amber-400 opacity-70" />

        <div className="space-y-2 text-center">
          <p className="text-sm text-neutral-600">
            Built with privacy in mind — your files never leave your computer.
          </p>

          <p className="text-xs text-neutral-500">
            © {year} Unfollowed for IG
          </p>

          <p className="text-xs text-neutral-400">
            Not affiliated with Instagram™ or Meta Platforms Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
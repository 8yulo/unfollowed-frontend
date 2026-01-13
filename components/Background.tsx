export function TopGradientBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 h-1.5 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-amber-400" />
  );
}

export function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0">
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/25 via-pink-500/25 to-amber-400/25 blur-3xl dark:from-fuchsia-500/30 dark:via-pink-500/30 dark:to-amber-400/30" />
      <div className="absolute right-[-120px] bottom-[-140px] h-96 w-96 rounded-full bg-gradient-to-r from-amber-400/20 via-pink-500/20 to-fuchsia-500/20 blur-3xl dark:from-amber-400/25 dark:via-pink-500/25 dark:to-fuchsia-500/25" />
    </div>
  );
}
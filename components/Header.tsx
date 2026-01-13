export default function Header() {
  return (
    <header className="mx-auto max-w-2xl text-center">
      <div className="shadow-soft mx-auto inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-sm backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-amber-400" />
        <span className="font-medium">Unfollowed for IG</span>
        <span className="text-neutral-400">•</span>
        <span className="text-neutral-500">No Login Required</span>
      </div>

      <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">
        Who{" "}
        <span className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] bg-clip-text font-bold text-transparent">
          Unfollowed
        </span>{" "}
        Me?
      </h1>

      <p className="mt-3 text-neutral-600">
        Check to see profiles that do not follow you back.
      </p>
    </header>
  );
}

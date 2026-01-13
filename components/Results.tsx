type Props = {
  users: string[];
  search: string;
  onSearchChange: (v: string) => void;
  hasData: boolean; // false = no files uploaded/parsed yet, true = processed
  onUploadClick?: () => void; // optional: scroll/open upload UI
};

export default function Results({
  users,
  search,
  onSearchChange,
  hasData,
  onUploadClick,
}: Props) {
  return (
    <div className="mt-8">
      {/* Results header */}
      <div className="flex items-end justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold theme-text-primary">Results</h3>
          <p className="text-sm theme-text-secondary">
            Shown are people not following you back.
          </p>
        </div>

        <div className="w-full max-w-xs">
          <label
            htmlFor="searchInput"
            className="block text-xs font-medium theme-text-secondary"
          >
            Search
          </label>
          <input
            id="searchInput"
            type="text"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="type a username..."
            className="theme-input theme-shadow mt-1 w-full rounded-xl border px-3 py-2 text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Results list container */}
      <div className="theme-surface mt-4 overflow-hidden rounded-2xl border">
        {/* List header */}
        <div className="flex items-center justify-between border-b theme-surface bg-[var(--surface-muted)] px-4 py-3">
          <p className="text-sm theme-text-primary">
            <span className="font-medium">{users.length}</span>{" "}
            <span className="theme-text-tertiary">
              users not following you back
            </span>
          </p>
          
          <div className="flex items-center gap-2 text-xs theme-text-tertiary">
            {/*
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-amber-400" />
              highlight = unfollowed
            </span>
            */}
          </div>
        </div>
        {/* List or empty states */}
        {users.length > 0 ? (
          <ul className="divide-y divide-[var(--border-divider)]">
            {users.map((username, idx) => (
              <li key={username}>
                <div className="relative flex items-center gap-3 px-4 py-3">
                {/* {<div className="absolute inset-y-2 left-2 w-1 rounded-full bg-gradient-to-b from-fuchsia-500 via-pink-500 to-amber-400" /> */}

                  <div className="flex items-center justify-center">
                    <span className="theme-badge inline-flex h-6 w-6 items-center justify-center rounded-md text-xs font-semibold tabular-nums">
                      {idx + 1}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1 text-left">
                    <a
                      href={`https://www.instagram.com/${username}`}
                      target="_blank"
                      rel="noreferrer"
                      className="theme-interactive inline-flex items-center justify-center rounded-lg px-2 py-1 text-sm font-semibold transition"
                    >
                      @{username}
                    </a>
                  </div>

                  <div
                    className="w-10 text-right theme-text-tertiary"
                    title="not following back"
                  >
                    🪦
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : hasData ? (
          // ✅ processed files, and result is empty
          <div className="px-4 py-10 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-muted)] text-xl">
              ✅
            </div>
            <h4 className="mt-3 text-base font-semibold theme-text-primary">
              Everyone is following you back
            </h4>
            <p className="mt-1 text-sm theme-text-secondary">You're fully mutual.</p>
          </div>
        ) : (
          // 📤 no files uploaded/parsed yet
          <div className="px-4 py-10 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-muted)] text-xl">
              📤
            </div>
            <h4 className="mt-3 text-base font-semibold theme-text-primary">
              Upload your Instagram files
            </h4>
            <p className="mt-1 text-sm theme-text-secondary">
              Upload your followers and following data to see who isn't
              following you back.
            </p>

            {onUploadClick ? (
              <button
                type="button"
                onClick={onUploadClick}
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-amber-400 px-4 py-2 text-sm font-semibold text-white"
              >
                Upload files
              </button>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
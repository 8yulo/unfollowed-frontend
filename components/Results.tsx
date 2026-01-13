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
          <h3 className="text-lg font-semibold">Results</h3>
          <p className="text-sm text-neutral-600">
            Shown are people not following you back.
          </p>
        </div>

        <div className="w-full max-w-xs">
          <label
            htmlFor="searchInput"
            className="block text-xs font-medium text-neutral-600"
          >
            Search
          </label>
          <input
            id="searchInput"
            type="text"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="type a username..."
            className="shadow-soft mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm focus:border-neutral-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Results list container */}
      <div className="mt-4 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        {/* List header */}
        <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-50 px-4 py-3">
          <p className="text-sm text-neutral-700">
            <span className="font-medium">{users.length}</span>{" "}
            <span className="text-neutral-500">
              users not following you back
            </span>
          </p>
          
          <div className="flex items-center gap-2 text-xs text-neutral-500">
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
          <ul className="divide-y divide-neutral-200">
            {users.map((username, idx) => (
              <li key={username}>
                <div className="relative flex items-center gap-3 px-4 py-3">
                {/* {<div className="absolute inset-y-2 left-2 w-1 rounded-full bg-gradient-to-b from-fuchsia-500 via-pink-500 to-amber-400" /> */}

                  <div className="w-10 text-right text-sm font-semibold tabular-nums text-neutral-500">
                    {idx + 1}
                  </div>

                  <div className="min-w-0 flex-1 text-left">
                    <a
                      href={`https://www.instagram.com/${username}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-lg px-2 py-1 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
                    >
                      @{username}
                    </a>
                  </div>

                  <div
                    className="w-10 text-right text-neutral-500"
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
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 text-xl">
              ✅
            </div>
            <h4 className="mt-3 text-base font-semibold">
              Everyone is following you back
            </h4>
            <p className="mt-1 text-sm text-neutral-600">You’re fully mutual.</p>
          </div>
        ) : (
          // 📤 no files uploaded/parsed yet
          <div className="px-4 py-10 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 text-xl">
              📤
            </div>
            <h4 className="mt-3 text-base font-semibold">
              Upload your Instagram files
            </h4>
            <p className="mt-1 text-sm text-neutral-600">
              Upload your followers and following data to see who isn’t
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
type Props = {
  users: string[];
  search: string;
  onSearchChange: (v: string) => void;
};

export default function Results({ users, search, onSearchChange }: Props) {
  return (
    <div className="mt-8">
      <input
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="search username..."
        className="mb-3 w-full rounded-xl border px-3 py-2 text-sm"
      />

      {users.length === 0 ? (
        <p className="text-center text-neutral-500">No unfollowers found</p>
      ) : (
        <ul className="divide-y">
          {users.map((u, i) => (
            <li key={u} className="py-3 text-center font-medium">
              #{i + 1} @{u}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
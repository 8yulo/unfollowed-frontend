type Props = {
  ready: boolean;
  statusText: string;
  onCompare: () => void;
  onReset: () => void;
};

export default function UserActions({ ready, statusText, onCompare, onReset }: Props) {
  return (
    <div className="mt-6 flex justify-between items-center">
      <span className="text-sm text-neutral-600">{statusText}</span>

      <div className="flex gap-2">
        <button
          disabled={!ready}
          onClick={onCompare}
          className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-amber-400 px-4 py-2 text-white disabled:opacity-40"
        >
          Compare
        </button>
        <button onClick={onReset} className="rounded-xl border px-4 py-2">
          Reset
        </button>
      </div>
    </div>
  );
}
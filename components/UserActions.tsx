import React from 'react';

type Props = {
  ready: boolean;
  statusText: string;
  onCompare: () => void;
  onReset: () => void;
};

export default function UserActions({ ready, statusText, onCompare, onReset }: Props) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-sm theme-text-secondary">
        <span className={`inline-block h-2 w-2 rounded-full ${ready ? 'bg-status-success' : 'bg-status-inactive'}`}></span>
        <span>{statusText}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          disabled={!ready}
          onClick={onCompare}
          className="theme-shadow inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-amber-400 px-4 py-2.5 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-40"
        >
          Compare
        </button>
        <button
          onClick={onReset}
          className="theme-interactive theme-shadow inline-flex items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-medium transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
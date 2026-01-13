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
      <div className="flex items-center gap-2 text-sm text-neutral-600">
        <span className={`inline-block h-2 w-2 rounded-full ${ready ? 'bg-green-500' : 'bg-neutral-300'}`}></span>
        <span>{statusText}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          disabled={!ready}
          onClick={onCompare}
          className="shadow-soft inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-amber-400 px-4 py-2.5 text-sm font-semibold text-neutral-800 text-white transition disabled:cursor-not-allowed disabled:opacity-40"
        >
          Compare
        </button>
        <button
          onClick={onReset}
          className="shadow-soft inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
type Props = {
  title: string;
  badge: string;
  description?: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function UploadCard({title, badge, description,inputRef, onChange}: Props) {
  return (
    <div className="theme-surface rounded-2xl border p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold theme-text-primary">{title}</h2>
        <span className="theme-badge rounded-full px-2 py-0.5 text-xs font-medium">
          {badge}
        </span>
      </div>
      
      {description && (
        <p className="mt-1 text-sm theme-text-secondary">{description}</p>
      )}

      <label className="mt-4 block">
        <span className="sr-only">Choose {badge}</span>
        <input
          ref={inputRef}
          type="file"
          accept=".html,text/html"
          onChange={onChange}
          className="theme-input block w-full cursor-pointer rounded-xl border px-3 py-2 text-sm transition-colors file:mr-3 file:rounded-lg file:border-0 file:bg-[var(--foreground)] file:px-3 file:py-2 file:text-sm file:font-semibold file:text-[var(--background)] hover:bg-[var(--input-bg-hover)] dark:file:bg-[var(--text-inverse)] dark:file:text-[var(--foreground)]"
        />
      </label>
    </div>
  );
}
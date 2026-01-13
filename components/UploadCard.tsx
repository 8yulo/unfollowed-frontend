type Props = {
  title: string;
  badge: string;
  description?: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function UploadCard({title, badge, description,inputRef, onChange}: Props) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold">{title}</h2>
        <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
          {badge}
        </span>
      </div>
      
      {description && (
        <p className="mt-1 text-sm text-neutral-600">{description}</p>
      )}

      <label className="mt-4 block">
        <span className="sr-only">Choose {badge}</span>
        <input
          ref={inputRef}
          type="file"
          accept=".html,text/html"
          onChange={onChange}
          className="block w-full cursor-pointer rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-neutral-900 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white hover:bg-neutral-100"
        />
      </label>
    </div>
  );
}
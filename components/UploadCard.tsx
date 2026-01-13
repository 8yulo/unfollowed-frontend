type Props = {
  title: string;
  badge: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function UploadCard({ title, badge, inputRef, onChange }: Props) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5">
      <div className="flex justify-between">
        <h2 className="font-semibold">{title}</h2>
        <span className="rounded-full bg-neutral-100 px-2 text-xs">{badge}</span>
      </div>

      <label className="mt-4 block">
        <input
          ref={inputRef}
          type="file"
          accept=".html"
          onChange={onChange}
          className="block w-full cursor-pointer rounded-xl border bg-neutral-50 px-3 py-2 text-sm"
        />
      </label>
    </div>
  );
}
'use client';
import { useEffect, useState } from 'react';

type Props = {
  initialUrl?: string | null;
};

export default function CourseThumbnailField({ initialUrl = null }: Props) {
  const [preview, setPreview] = useState<string | null>(initialUrl || null);

  useEffect(() => {
    setPreview(initialUrl || null);
  }, [initialUrl]);

  async function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setPreview(base64);
      const hidden = document.querySelector<HTMLInputElement>('input[name="thumbnailBase64"]');
      if (hidden) hidden.value = base64;
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="space-y-2">
      {/* Hidden base64 field consumed by server action on submit */}
      <input type="hidden" name="thumbnailBase64" />
      <label className="block text-sm font-medium text-gray-700">Thumbnail</label>
      {preview ? (
        <img src={preview} alt="Thumbnail preview" className="w-40 h-24 object-cover rounded-lg border border-gray-200" />
      ) : (
        <div className="w-40 h-24 rounded-lg border border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-500">
          No thumbnail
        </div>
      )}
      <div className="flex items-center gap-3">
        <input type="file" accept="image/*" onChange={onFileChange} />
      </div>
    </div>
  );
}



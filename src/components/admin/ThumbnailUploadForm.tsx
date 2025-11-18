'use client';
import { useState } from 'react';

type Props = {
  initialUrl?: string | null;
  inputName?: string; // hidden input name to write base64 into parent form
};

export default function ThumbnailUploadForm({ initialUrl = null, inputName = 'thumbnailBase64' }: Props) {
  const [preview, setPreview] = useState<string | null>(initialUrl || null);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setPreview(base64);
      const hidden = document.querySelector<HTMLInputElement>(`input[name="${inputName}"]`);
      if (hidden) hidden.value = base64;
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="space-y-3 max-w-5xl">
      <input type="hidden" name={inputName} />
      {preview ? (
        <img src={preview} alt="Thumbnail" className="aspect-video h-[450px] object-cover rounded-lg border border-gray-200" />
      ) : (
        <div className="aspect-video rounded-lg border border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-500">
          No thumbnail
        </div>
      )}
      <div className="flex items-center gap-3">
        <input
          type="file"
          accept="image/*"
          onChange={onFileChange}
          className="text-sm file:mr-3 file:px-3 file:py-1.5 file:rounded-lg file:border-0 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
        />
      </div>
    </div>
  );
}



'use client';
import { useEffect, useState } from 'react';

type Props = {
  initialTitle?: string;
  initialSlug?: string;
};

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function TitleSlugFields({ initialTitle = '', initialSlug = '' }: Props) {
  const [title, setTitle] = useState(initialTitle);
  const [slug, setSlug] = useState(initialSlug);
  const [slugDirty, setSlugDirty] = useState(false);

  useEffect(() => {
    if (!slugDirty) {
      setSlug(slugify(title));
    }
  }, [title, slugDirty]);

  function onTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function onSlugChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = e.target.value;
    setSlug(next);
    setSlugDirty(true);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input
          name="title"
          value={title}
          onChange={onTitleChange}
          required
          className="w-full border border-gray-200 rounded-lg px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
        <input
          name="slug"
          value={slug}
          onChange={onSlugChange}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 lowercase"
        />
      </div>
    </div>
  );
}



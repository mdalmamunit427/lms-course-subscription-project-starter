'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

type CourseDetails = {
  title: string;
  slug: string;
  shortDescription?: string;
  description: string;
  category: string;
  tags?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  language: string;
  price?: number | string;
  isFree?: boolean;
  isPublished?: boolean;
  isFeatured?: boolean;
};

type Props = {
  defaults: Partial<CourseDetails>;
  categories: string[];
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

export default function CourseDetailsFields({ defaults, categories }: Props) {
  const {
    register,
    watch,
    setValue,
  } = useForm<CourseDetails>({
    defaultValues: {
      title: defaults.title || '',
      slug: defaults.slug || '',
      shortDescription: defaults.shortDescription || '',
      description: defaults.description || '',
      category: defaults.category || categories[0] || '',
      tags: defaults.tags || '',
      difficulty: (defaults.difficulty as any) || 'beginner',
      language: defaults.language || 'en',
      price: defaults.price ?? '',
      isFree: !!defaults.isFree,
      isPublished: !!defaults.isPublished,
      isFeatured: !!defaults.isFeatured,
    },
  });

  const [slugDirty, setSlugDirty] = useState(false);
  const title = watch('title');
  const slug = watch('slug');

  useEffect(() => {
    if (!slugDirty) {
      setValue('slug', slugify(title || ''));
    }
  }, [title, slugDirty, setValue]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            {...register('title', { required: true })}
            name="title"
            className="w-full border border-gray-200 rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
          <input
            {...register('slug')}
            name="slug"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 lowercase"
            value={slug}
            onChange={(e) => {
              setSlugDirty(true);
              setValue('slug', e.target.value);
            }}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
        <input
          {...register('shortDescription')}
          name="shortDescription"
          className="w-full border border-gray-200 rounded-lg px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          {...register('description', { required: true })}
          name="description"
          rows={5}
          className="w-full border border-gray-200 rounded-lg px-3 py-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            {...register('category', { required: true })}
            name="category"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-white"
          >
            {(!categories.includes(defaults.category || '')) && defaults.category ? (
              <option value={defaults.category}>{defaults.category}</option>
            ) : null}
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
          <input
            {...register('tags')}
            name="tags"
            className="w-full border border-gray-200 rounded-lg px-3 py-2"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
          <select
            {...register('difficulty')}
            name="difficulty"
            className="w-full border border-gray-200 rounded-lg px-3 py-2"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
          <input
            {...register('language')}
            name="language"
            className="w-full border border-gray-200 rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price (USD)</label>
          <input
            {...register('price')}
            name="price"
            type="number"
            step="0.01"
            className="w-full border border-gray-200 rounded-lg px-3 py-2"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" {...register('isFree')} name="isFree" />
          <span className="text-sm text-gray-700">Free</span>
        </label>
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" {...register('isPublished')} name="isPublished" />
          <span className="text-sm text-gray-700">Published</span>
        </label>
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" {...register('isFeatured')} name="isFeatured" />
          <span className="text-sm text-gray-700">Featured</span>
        </label>
      </div>
    </div>
  );
}



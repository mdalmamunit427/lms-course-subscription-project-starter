import Link from 'next/link';
import React from 'react';

type CourseRow = {
    title: string;
    slug: string;
    category?: string;
    difficulty?: string;
    price?: number;
    isPublished: boolean;
    isFeatured?: boolean;
    createdAt: string | number | Date;
};

type CoursesTableProps = {
    courses: CourseRow[];
    togglePublish: (formData: FormData) => Promise<void>;
    removeCourse: (formData: FormData) => Promise<void>;
};

export default function CoursesTable({ courses, togglePublish, removeCourse }: CoursesTableProps) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">All Courses</h2>
                        <p className="text-sm text-gray-600 mt-1">
                            {courses.length} total courses
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white">
                            <option>All Categories</option>
                            <option>Business</option>
                            <option>Finance</option>
                            <option>Strategy</option>
                        </select>
                        <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white">
                            <option>All Statuses</option>
                            <option>Published</option>
                            <option>Unpublished</option>
                        </select>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search title or slug…"
                                className="pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 w-64"
                            />
                            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Course</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Difficulty</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Created</th>
                            <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {(courses as any[]).map((c: any, idx: number) => (
                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-900">{c.title}</span>
                                        <span className="text-xs text-gray-500">/{c.slug}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{c.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 capitalize">
                                        {c.difficulty}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {c.price === 0 ? 'Free' : `$${c.price}`}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${
                                            c.isPublished
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-amber-100 text-amber-700'
                                        }`}>
                                            {c.isPublished ? 'Published' : 'Unpublished'}
                                        </span>
                                        {c.isFeatured && (
                                            <span className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-100 text-purple-700">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {new Date(c.createdAt).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center justify-end gap-2">
                                        <Link href={`/admin/courses/${c.slug}/edit`}>
                                            <button className="px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50">
                                                Edit
                                            </button>
                                        </Link>
                                        <form action={togglePublish}>
                                            <input type="hidden" name="slug" value={c.slug} />
                                            <input type="hidden" name="isPublished" value={String(c.isPublished)} />
                                            <button className="px-3 py-1.5 text-xs font-medium text-indigo-700 border border-indigo-200 rounded-lg hover:bg-indigo-50">
                                                {c.isPublished ? 'Unpublish' : 'Publish'}
                                            </button>
                                        </form>
                                        <form action={removeCourse}>
                                            <input type="hidden" name="slug" value={c.slug} />
                                            <button className="px-3 py-1.5 text-xs font-medium text-rose-700 border border-rose-200 rounded-lg hover:bg-rose-50">
                                                Delete
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-600">
                        Showing <span className="font-semibold">1-{courses.length}</span> of <span className="font-semibold">{courses.length}</span>
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>
                            Previous
                        </button>
                        <button className="px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}



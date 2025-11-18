import React from 'react';

type Resource = {
  title: string;
  url: string;
  type: 'pdf' | 'doc' | 'video' | 'link' | 'other';
};

type ResourcesListProps = {
  resources?: Resource[];
};

export function ResourcesList({ resources }: ResourcesListProps) {
  if (!resources || resources.length === 0) return null;
  return (
    <div className="mt-6 pt-6 border-t border-gray-200">
      <h3 className="text-lg font-bold text-gray-900 mb-3">Resources</h3>
      <div className="space-y-2">
        {resources.map((resource, idx) => (
          <a
            key={`${resource.url}-${idx}`}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
          >
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
              {resource.type === 'pdf'
                ? '📄'
                : resource.type === 'doc'
                ? '📝'
                : resource.type === 'video'
                ? '🎥'
                : '🔗'}
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                {resource.title}
              </p>
              <p className="text-xs text-gray-500 uppercase">{resource.type}</p>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ResourcesList;



import React from 'react';

type SidebarLesson = {
  _id: string;
  title: string;
  videoUrl?: string;
  videoDuration?: number;
};

type SidebarModule = {
  _id: string;
  title: string;
  lessons: SidebarLesson[];
};

type CourseContentSidebarProps = {
  modules: SidebarModule[];
  expandedModules: Set<string>;
  onToggleModule: (moduleId: string) => void;
  currentLessonId?: string;
  completedLessons: Set<string>;
  onSelectLesson: (module: any, lesson: any) => void;
  totalLessons?: number;
};

const formatDuration = (seconds?: number) => {
  if (!seconds) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export function CourseContentSidebar({
  modules,
  expandedModules,
  onToggleModule,
  currentLessonId,
  completedLessons,
  onSelectLesson,
  totalLessons,
}: CourseContentSidebarProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-6">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-bold text-gray-900">Course Content</h3>
        <p className="text-sm text-gray-600 mt-1">
          {modules.length} modules{typeof totalLessons === 'number' ? ` • ${totalLessons} lessons` : ''}
        </p>
      </div>

      <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
        {modules.map((module, moduleIdx) => {
          const moduleCompletedCount = module.lessons.filter(l => completedLessons.has(l._id)).length;
          const moduleProgress =
            module.lessons.length > 0 ? Math.round((moduleCompletedCount / module.lessons.length) * 100) : 0;

          return (
            <div key={module._id} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => onToggleModule(module._id)}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-gray-900 text-sm">
                      Module {moduleIdx + 1}: {module.title}
                    </p>
                    {moduleProgress === 100 && (
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-xs text-gray-600">
                      {moduleCompletedCount}/{module.lessons.length} completed
                    </p>
                    {moduleProgress > 0 && moduleProgress < 100 && (
                      <div className="flex-1 max-w-[100px] bg-gray-200 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 transition-all duration-300"
                          style={{ width: `${moduleProgress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    expandedModules.has(module._id) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expandedModules.has(module._id) && (
                <div className="bg-gray-50">
                  {module.lessons.map((lesson, lessonIdx) => {
                    const isCompleted = completedLessons.has(lesson._id);
                    const isCurrent = currentLessonId === lesson._id;
                    return (
                      <button
                        key={lesson._id}
                        onClick={() => onSelectLesson(module, lesson)}
                        className={`w-full p-4 pl-8 flex items-center gap-3 hover:bg-gray-100 transition-colors text-left border-l-4 relative ${
                          isCurrent
                            ? 'border-blue-600 bg-blue-50 hover:bg-blue-100'
                            : isCompleted
                            ? 'border-green-400 bg-green-50/50'
                            : 'border-transparent'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${
                            isCurrent
                              ? 'bg-blue-600 text-white'
                              : isCompleted
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-200 text-gray-600'
                          }`}
                        >
                          {isCompleted ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            lessonIdx + 1
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className={`font-medium text-sm mb-1 ${
                              isCurrent ? 'text-blue-900' : isCompleted ? 'text-gray-700' : 'text-gray-900'
                            }`}
                          >
                            {lesson.title}
                            {isCompleted && !isCurrent && <span className="ml-2 text-xs text-green-600">✓</span>}
                          </p>
                          <div className="flex items-center gap-2">
                            {!!lesson.videoDuration && (
                              <p className="text-xs text-gray-600">{formatDuration(lesson.videoDuration)}</p>
                            )}
                            {isCompleted && <span className="text-xs text-green-600 font-medium">Completed</span>}
                          </div>
                        </div>
                        {lesson.videoUrl && !isCompleted && (
                          <svg
                            className={`w-5 h-5 shrink-0 ${isCurrent ? 'text-blue-600' : 'text-gray-400'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CourseContentSidebar;



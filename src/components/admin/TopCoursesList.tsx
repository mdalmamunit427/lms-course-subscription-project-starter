import React from 'react';

type TopCourse = {
  title: string;
  enrolled: number;
  rating: number | string;
  revenue: string;
};

interface TopCoursesListProps {
  topCourses: TopCourse[];
}

export default function TopCoursesList({ topCourses }: TopCoursesListProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-bold text-gray-900">Top Courses</h3>
        <p className="text-xs text-gray-600 mt-1">Best performing</p>
      </div>
      <div className="p-6 space-y-4">
        {topCourses.map((course:any, index:number) => (
          <div key={index} className="border border-gray-100 rounded-xl p-4 hover:border-indigo-200 hover:shadow-sm transition-all">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-sm text-gray-900 flex-1">{course.title}</h4>
              <span className="text-lg ml-2">🏆</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">{course.enrolled} enrolled</span>
              <span className="flex items-center text-amber-600">
                ⭐ {course.rating}
              </span>
            </div>
            <div className="mt-2 pt-2 border-t border-gray-100">
              <span className="text-sm font-semibold text-emerald-600">{course.revenue}</span>
              <span className="text-xs text-gray-500 ml-1">revenue</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



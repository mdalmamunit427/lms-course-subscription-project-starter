'use client';

import Link from 'next/link';
import { UserButton, useClerk } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

interface DashboardNavProps {
  role: 'admin' | 'student';
  userName?: string;
  onCloseMobile?: () => void;
  isMobileMenuOpen?: boolean;
}

type NavLink = {
  href: string;
  label: string;
  icon: string;
  divider?: boolean;
};

export default function DashboardNav({ role, userName, onCloseMobile, isMobileMenuOpen }: DashboardNavProps) {
  const pathname = usePathname();
  const { signOut } = useClerk();

  const studentLinks: NavLink[] = [
    { href: '/dashboard', label: 'My Courses', icon: '📚' },
    { href: '/dashboard/progress', label: 'Progress', icon: '📊' },
    { href: '/dashboard/settings', label: 'Settings', icon: '⚙️' },
  ];

  const adminLinks: NavLink[] = [
    { href: '/admin', label: 'Admin Overview', icon: '📈' },
    { href: '/admin/users', label: 'Users', icon: '👥' },
    { href: '/admin/courses', label: 'Courses', icon: '📚' },
    { href: '/admin/analytics', label: 'Analytics', icon: '📊' },
    { href: '/dashboard', label: 'Student View', icon: '🎓', divider: true },
    { href: '/admin/settings', label: 'Settings', icon: '⚙️' },
  ];

  const links = role === 'admin' ? adminLinks : studentLinks;

  const handleLinkClick = () => {
    // Close mobile menu when a link is clicked
    if (onCloseMobile) {
      onCloseMobile();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200 shadow-xl lg:shadow-none">
      {/* Logo/Header */}
      <div className="flex items-center justify-between h-14 px-4 border-b border-gray-200">
        <Link href={role === 'admin' ? '/admin' : '/dashboard'} onClick={handleLinkClick}>
          <span className="text-sm font-semibold text-gray-900">
            {role === 'admin' ? '👨‍💼 Admin' : '🎓 Dashboard'}
          </span>
        </Link>
        
        {/* Mobile Close Button */}
        {isMobileMenuOpen && onCloseMobile && (
          <button
            onClick={onCloseMobile}
            className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <div key={link.href}>
              {link.divider && <div className="border-t border-gray-100 my-2" />}
              <Link
                href={link.href}
                onClick={handleLinkClick}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="mr-2 text-base">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            </div>
          );
        })}
      </nav>

      {/* User Profile Section */}
      <div className="px-3 py-3 border-t border-gray-100 space-y-3">
        <div className="flex items-center gap-2">
          <UserButton 
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "w-8 h-8"
              }
            }}
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-700 truncate">
              {userName || 'User'}
            </p>
            <p className="text-xs text-gray-400 truncate">
              {role === 'admin' ? 'Admin' : 'Student'}
            </p>
          </div>
        </div>
        
        {/* Logout Button */}
        <button
          onClick={() => signOut({ redirectUrl: '/' })}
          className="w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors font-medium text-sm"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Sign Out
        </button>
      </div>
    </div>
  );
}

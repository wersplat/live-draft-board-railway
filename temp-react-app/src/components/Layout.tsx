'use client'

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { user, signOut } = useAuth();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/rankings', label: 'Player Rankings' },
    { path: '/matches', label: 'Recent Matches' },
    { path: '/standings', label: 'Standings' },
    { path: '/statistics', label: 'Statistics' },
    { path: '/media', label: 'Media' },
    { path: '/draft-pool', label: 'Draft Pool' },
    { path: '/draft', label: 'Live Draft' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-legends-blue-900 transition-colors duration-200">
      <header className="bg-white/95 dark:bg-legends-blue-900/95 backdrop-blur-md border-b border-gray-200 dark:border-legends-blue-800 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Title */}
            <Link href="/" className="flex items-center gap-2" aria-label="Legends Basketball Association Home">
              <span className="text-2xl font-bold bg-gradient-to-r from-legends-purple-600 via-legends-red-600 to-legends-blue-600 dark:from-legends-purple-400 dark:via-legends-red-400 dark:to-legends-blue-400 bg-clip-text text-transparent">
                Legends Basketball Association
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4">
              <ul className="flex items-center gap-4 text-sm" role="list">
                {navItems.map((item) => (
                  <li key={item.path} role="none">
                    <Link
                      href={item.path}
                      className={`relative px-2 py-1 transition focus:outline-none focus:ring-2 focus:ring-legends-purple-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-legends-blue-900 rounded ${
                        isActive(item.path)
                          ? 'text-legends-purple-600 dark:text-legends-purple-400 font-semibold'
                          : 'text-gray-700 dark:text-neutral-200 hover:text-legends-purple-600 dark:hover:text-legends-purple-400'
                      }`}
                      aria-current={isActive(item.path) ? 'page' : undefined}
                    >
                      {item.label}
                      {isActive(item.path) && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-legends-purple-400" aria-hidden="true"></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Auth Section */}
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200 dark:border-legends-blue-800">
                {user ? (
                  <>
                    <span className="text-sm text-gray-700 dark:text-neutral-200">
                      {user.email}
                    </span>
                    <button
                      onClick={() => signOut()}
                      className="px-3 py-1 text-sm text-legends-red-600 dark:text-legends-red-400 hover:text-legends-red-800 dark:hover:text-legends-red-300 transition-colors"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="px-3 py-1 text-sm text-legends-purple-600 dark:text-legends-purple-400 hover:text-legends-purple-800 dark:hover:text-legends-purple-300 transition-colors"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              {user ? (
                <span className="text-sm text-gray-700 dark:text-neutral-200 mr-2">
                  {user.email}
                </span>
              ) : (
                <Link
                  href="/login"
                  className="px-3 py-1 text-sm text-legends-purple-600 dark:text-legends-purple-400 mr-2"
                >
                  Sign In
                </Link>
              )}
              <button
                id="mobile-menu-button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 dark:text-neutral-200 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-legends-purple-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-legends-blue-900 rounded p-1"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div id="mobile-menu" className="lg:hidden mt-4 pb-2" role="menu">
              <ul className="space-y-1" role="list">
                {navItems.map((item) => (
                  <li key={item.path} role="none">
                    <Link
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-label={`Navigate to ${item.label} page`}
                      className={`block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-legends-blue-800 focus:outline-none focus:ring-2 focus:ring-legends-purple-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-legends-blue-900 ${
                        isActive(item.path)
                          ? 'bg-gray-100 dark:bg-legends-blue-800 text-legends-purple-600 dark:text-legends-purple-400'
                          : 'text-gray-700 dark:text-neutral-200'
                      }`}
                      aria-current={isActive(item.path) ? 'page' : undefined}
                      role="menuitem"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                {user && (
                  <li role="none">
                    <button
                      onClick={() => {
                        signOut();
                        setMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-legends-blue-800 text-legends-red-600 dark:text-legends-red-400"
                      role="menuitem"
                    >
                      Sign Out
                    </button>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow bg-white dark:bg-legends-blue-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </div>
      </main>

      <footer className="bg-white dark:bg-legends-blue-900 border-t border-gray-200 dark:border-legends-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-500 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} Legends Basketball Association. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

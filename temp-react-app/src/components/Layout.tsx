import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { user, signOut } = useAuth();
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-indigo-600">🏀 UPA Draft</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/' 
                  ? 'bg-indigo-100 text-indigo-700' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Draft Board
            </Link>
            {user && (
              <Link 
                to={`/teams/${user.id}`}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname.startsWith('/teams/') 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                My Team
              </Link>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm text-gray-700">
                  {user.email}
                </span>
                <button
                  onClick={() => signOut()}
                  className="px-3 py-1 text-sm text-red-600 hover:text-red-800"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-3 py-1 text-sm text-indigo-600 hover:text-indigo-800"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} UPA Summer Championship. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

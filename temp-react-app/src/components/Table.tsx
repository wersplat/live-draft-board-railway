import type { ReactNode } from 'react';

interface TableProps {
  headers: string[];
  children: ReactNode;
  className?: string;
}

export default function Table({ headers, children, className = '' }: TableProps) {
  return (
    <div className={`bg-white dark:bg-legends-blue-900/50 shadow rounded-lg overflow-hidden ${className}`}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-legends-blue-800">
          <thead className="bg-gray-50 dark:bg-legends-blue-800/50">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-legends-blue-900/30 divide-y divide-gray-200 dark:divide-legends-blue-800">
            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
}


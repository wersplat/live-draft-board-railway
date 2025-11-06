'use client'

import { useQuery } from '@tanstack/react-query';
import { standingsApi } from '@/services/standings';
import Card from '@/components/Card';
import { useState } from 'react';
import type { ReactNode } from 'react';

type SortField = 'rank' | 'team' | 'wins' | 'losses' | 'win_percentage';
type SortDirection = 'asc' | 'desc';

export default function StandingsPage() {
  const [sortField, setSortField] = useState<SortField>('win_percentage');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const { data: standings, isLoading, error } = useQuery({
    queryKey: ['standings'],
    queryFn: () => standingsApi.getAll(),
  });

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const sortedStandings = standings ? [...standings].sort((a, b) => {
    let aValue: number | string;
    let bValue: number | string;

    switch (sortField) {
      case 'team':
        aValue = a.team_name.toLowerCase();
        bValue = b.team_name.toLowerCase();
        break;
      case 'wins':
        aValue = a.wins;
        bValue = b.wins;
        break;
      case 'losses':
        aValue = a.losses;
        bValue = b.losses;
        break;
      case 'win_percentage':
        aValue = a.win_percentage;
        bValue = b.win_percentage;
        break;
      default:
        return 0;
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return sortDirection === 'asc'
      ? (aValue as number) - (bValue as number)
      : (bValue as number) - (aValue as number);
  }) : [];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-legends-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <p className="text-red-600 dark:text-legends-red-400">
          Error loading standings. Please try again later.
        </p>
      </Card>
    );
  }

  const SortButton = ({ field, children }: { field: SortField; children: ReactNode }) => (
    <button
      onClick={() => handleSort(field)}
      className="flex items-center gap-1 hover:text-legends-purple-600 dark:hover:text-legends-purple-400"
    >
      {children}
      {sortField === field && (
        <span className="text-legends-purple-600 dark:text-legends-purple-400">
          {sortDirection === 'asc' ? '↑' : '↓'}
        </span>
      )}
    </button>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          League Standings
        </h1>
        <p className="text-gray-600 dark:text-neutral-300">
          Current season standings - Click column headers to sort
        </p>
      </div>

      {sortedStandings.length > 0 ? (
        <div className="bg-white dark:bg-legends-blue-900/50 shadow rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-legends-blue-800">
              <thead className="bg-gray-50 dark:bg-legends-blue-800/50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                    Rank
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                    <SortButton field="team">Team</SortButton>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                    <SortButton field="wins">Wins</SortButton>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                    <SortButton field="losses">Losses</SortButton>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                    <SortButton field="win_percentage">Win %</SortButton>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                    Games Played
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-legends-blue-900/30 divide-y divide-gray-200 dark:divide-legends-blue-800">
                {sortedStandings.map((standing, index) => (
                  <tr key={standing.team_id} className="hover:bg-gray-50 dark:hover:bg-legends-blue-800/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {standing.team_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-300">
                      {standing.wins}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-300">
                      {standing.losses}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-300">
                      {(standing.win_percentage * 100).toFixed(1)}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-300">
                      {standing.games_played}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Card>
          <p className="text-center text-gray-500 dark:text-neutral-400 py-8">
            No standings data available.
          </p>
        </Card>
      )}
    </div>
  );
}

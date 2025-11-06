'use client'

import { useQuery } from '@tanstack/react-query';
import { playersApi, type Player } from '@/services/supabase';
import Table from '@/components/Table';
import PlayerLink from '@/components/PlayerLink';
import Card from '@/components/Card';
import { useState } from 'react';

export default function PlayerRankingsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const { data: players, isLoading, error } = useQuery({
    queryKey: ['players'],
    queryFn: () => playersApi.getAll(),
  });

  const filteredPlayers = players?.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.position?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.team?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

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
          Error loading players. Please try again later.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Player Rankings
        </h1>
        <p className="text-gray-600 dark:text-neutral-300">
          View all players and click to see their full profile on Pro-Am Rankings
        </p>
      </div>

      <Card>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search players by name, position, or team..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-legends-blue-800 rounded-lg focus:ring-2 focus:ring-legends-purple-500 focus:border-transparent dark:bg-legends-blue-900 dark:text-white"
          />
        </div>

        {filteredPlayers.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-neutral-400 py-8">
            No players found matching your search.
          </p>
        ) : (
          <Table headers={['Rank', 'Player', 'Position', 'Team']}>
            {filteredPlayers.map((player: Player, index: number) => (
              <tr key={player.id} className="hover:bg-gray-50 dark:hover:bg-legends-blue-800/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <PlayerLink playerId={player.id} playerName={player.name} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-300">
                  {player.position || 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-300">
                  {player.team || 'N/A'}
                </td>
              </tr>
            ))}
          </Table>
        )}
      </Card>
    </div>
  );
}

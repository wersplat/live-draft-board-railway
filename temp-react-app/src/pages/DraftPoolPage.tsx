import { useQuery } from '@tanstack/react-query';
import { draftPoolApi } from '../services/draftPool';
import Table from '../components/Table';
import Card from '../components/Card';
import { useState } from 'react';

const DraftPoolPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [positionFilter, setPositionFilter] = useState<string>('');

  const { data: players, isLoading, error } = useQuery({
    queryKey: ['draft-pool', positionFilter],
    queryFn: () => positionFilter 
      ? draftPoolApi.getByPosition(positionFilter)
      : draftPoolApi.getAll(),
  });

  const filteredPlayers = players?.filter(player =>
    player.player_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.position?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.team?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const positions = ['PG', 'SG', 'SF', 'PF', 'C'];

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
          Error loading draft pool. Please try again later.
        </p>
        {error instanceof Error && (
          <p className="text-sm text-gray-500 dark:text-neutral-400 mt-2">
            {error.message}
          </p>
        )}
      </Card>
    );
  }

  if (!players || players.length === 0) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Draft Pool
          </h1>
          <p className="text-gray-600 dark:text-neutral-300">
            Available players for the upcoming draft
          </p>
        </div>
        <Card>
          <p className="text-center text-gray-500 dark:text-neutral-400 py-8">
            No players found in the draft pool for Legends Basketball Association.
            <br />
            <span className="text-sm mt-2 block">
              Check the browser console for debugging information.
            </span>
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Draft Pool
        </h1>
        <p className="text-gray-600 dark:text-neutral-300">
          Available players for the upcoming draft
        </p>
      </div>

      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-2">
              Search Players
            </label>
            <input
              type="text"
              placeholder="Search by name, position, or team..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-legends-blue-800 rounded-lg focus:ring-2 focus:ring-legends-purple-500 focus:border-transparent dark:bg-legends-blue-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-2">
              Filter by Position
            </label>
            <select
              value={positionFilter}
              onChange={(e) => setPositionFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-legends-blue-800 rounded-lg focus:ring-2 focus:ring-legends-purple-500 focus:border-transparent dark:bg-legends-blue-900 dark:text-white"
            >
              <option value="">All Positions</option>
              {positions.map(pos => (
                <option key={pos} value={pos}>{pos}</option>
              ))}
            </select>
          </div>
        </div>

        {filteredPlayers.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-neutral-400 py-8">
            No players found in the draft pool matching your criteria.
          </p>
        ) : (
          <Table headers={['Player Name', 'Position', 'Team', 'Status']}>
            {filteredPlayers.map((player) => (
              <tr key={player.player_id} className="hover:bg-gray-50 dark:hover:bg-legends-blue-800/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {player.player_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-300">
                  {player.position || 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-300">
                  {player.team || 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    !player.status || player.status.toLowerCase() === 'available'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                  }`}>
                    {player.status || 'Available'}
                  </span>
                </td>
              </tr>
            ))}
          </Table>
        )}
      </Card>
    </div>
  );
};

export default DraftPoolPage;


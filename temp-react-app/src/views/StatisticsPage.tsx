import { useQuery } from '@tanstack/react-query';
import { statisticsApi } from '../services/statistics';
import Card from '../components/Card';

const StatisticsPage = () => {
  const { data: stats, isLoading, error } = useQuery({
    queryKey: ['league-statistics'],
    queryFn: () => statisticsApi.getLeagueStats(),
  });

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
          Error loading statistics. Please try again later.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          League Statistics
        </h1>
        <p className="text-gray-600 dark:text-neutral-300">
          Comprehensive league-wide statistics and metrics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-legends-purple-600 dark:text-legends-purple-400 mb-2">
              {stats?.total_teams || 0}
            </div>
            <div className="text-sm text-gray-600 dark:text-neutral-300">
              Total Teams
            </div>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-legends-red-600 dark:text-legends-red-400 mb-2">
              {stats?.total_players || 0}
            </div>
            <div className="text-sm text-gray-600 dark:text-neutral-300">
              Total Players
            </div>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-legends-blue-600 dark:text-legends-blue-400 mb-2">
              {stats?.total_matches || 0}
            </div>
            <div className="text-sm text-gray-600 dark:text-neutral-300">
              Total Matches
            </div>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-legends-purple-600 dark:text-legends-purple-400 mb-2">
              {stats?.average_points_per_game?.toFixed(1) || '0.0'}
            </div>
            <div className="text-sm text-gray-600 dark:text-neutral-300">
              Avg Points/Game
            </div>
          </div>
        </Card>
      </div>

      {stats?.top_scorer && (
        <Card>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Top Scorer
          </h2>
          <div className="space-y-2">
            <p className="text-lg text-gray-700 dark:text-neutral-300">
              <span className="font-semibold">{stats.top_scorer.player_name}</span>
            </p>
            <p className="text-gray-600 dark:text-neutral-400">
              Total Points: <span className="font-semibold text-legends-purple-600 dark:text-legends-purple-400">
                {stats.top_scorer.total_points}
              </span>
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default StatisticsPage;


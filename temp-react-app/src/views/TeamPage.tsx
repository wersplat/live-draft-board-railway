import { useParams } from 'react-router-dom';
import { useDraft } from '../context/DraftContext/useDraft';
import type { Player, DraftPick } from '../services/supabase';

const TeamPage = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const { teams, draftPicks, players } = useDraft();

  // Find the current team
  const team = teams.find((t: { id: string | undefined }) => t.id === teamId);
  
  // Filter picks for this team
  const teamPicks = draftPicks
    .filter((pick): pick is DraftPick & { player_id: string } => 
      pick.team_id === teamId && pick.player_id !== null
    )
    .sort((a, b) => a.pick_number - b.pick_number);

  // Get player details for each pick
  const picksWithPlayers = teamPicks.map(pick => {
    const player = players.find((p: Player) => p.id === pick.player_id);
    return {
      ...pick,
      player
    };
  });

  // Calculate team statistics
  const totalPicks = teamPicks.length;
  const positions = picksWithPlayers.reduce<Record<string, number>>((acc, pick) => {
    if (!pick.player) return acc;
    const position = pick.player.position;
    acc[position] = (acc[position] || 0) + 1;
    return acc;
  }, {});

  if (!team) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900">Team not found</h3>
        <p className="mt-2 text-sm text-gray-500">The requested team could not be found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Team Header */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-8 sm:px-8">
          <div className="flex items-center space-x-6">
            <div className="flex-shrink-0">
              {team?.logo ? (
                <img 
                  className="h-24 w-24 rounded-full" 
                  src={team.logo} 
                  alt={`${team?.name || 'Team'} logo`} 
                />
              ) : (
                <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-400">
                  {team?.name?.charAt(0) || '?'}
                </div>
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{team.name}</h1>
              <div className="mt-2 flex flex-wrap gap-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">Total Picks</span>
                  <p className="text-2xl font-semibold">{totalPicks}</p>
                </div>
                {Object.entries(positions).map(([position, count]) => (
                  <div key={position}>
                    <span className="text-sm font-medium text-gray-500">{position}s</span>
                    <p className="text-2xl font-semibold">{String(count)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Picks */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Draft Picks</h3>
        </div>
        
        {picksWithPlayers.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No picks made yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pick
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Player
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Team
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {picksWithPlayers.map((pick) => {
                  const player = pick.player as Player | undefined;
                  return (
                    <tr key={pick.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {pick.pick_number}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {player?.name || 'Unknown Player'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {player?.position || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {player?.team || 'N/A'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Team Needs Analysis */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Team Needs</h3>
        </div>
        <div className="p-6">
          {Object.keys(positions).length === 0 ? (
            <p className="text-sm text-gray-500">No position data available yet.</p>
          ) : (
            <div className="space-y-4">
              {Object.entries(positions).map(([position, count]) => (
                <div key={position}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">{position}</span>
                    <span className="text-gray-500">{count} players</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full" 
                      style={{ width: `${Math.min(100, (count / 5) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;

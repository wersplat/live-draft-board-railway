import { useDraft } from '../context/DraftContext/useDraft';
import { formatTime } from '../utils/formatTime';
import type { Team, DraftPick } from '../services/supabase';

interface DraftBoardProps {
  currentTeam: Team | undefined;
  currentPick: number;
  timeLeft: number;
  isPaused: boolean;
  onTogglePause: () => void;
  onResetDraft: () => void;
  isAdmin: boolean;
}

const DraftBoard = ({
  currentTeam,
  currentPick,
  timeLeft,
  isPaused,
  onTogglePause,
  onResetDraft,
  isAdmin
}: DraftBoardProps) => {
  const { teams, draftPicks } = useDraft();

  const renderDraftPicks = () => {
    return draftPicks.slice().reverse().map((pick: DraftPick) => (
      <tr key={pick.id} className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {pick.pick_number}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {teams.find((t: Team) => t.id === pick.team_id)?.name || 'Unknown Team'}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {pick.player_name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {pick.player_position}
        </td>
      </tr>
    ));
  };

  return (
    <div className="space-y-8">
      {/* Draft Header */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Draft Board</h1>
            <p className="mt-1 text-sm text-gray-500">
              {draftPicks.length} picks made • {teams.length * 16 - draftPicks.length} players remaining
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <div className="text-center">
              <div className="text-sm font-medium text-gray-500">Current Pick</div>
              <div className="text-2xl font-bold text-indigo-600">#{currentPick}</div>
            </div>
            
            <div className="h-12 w-px bg-gray-200"></div>
            
            <div className="text-center">
              <div className="text-sm font-medium text-gray-500">On the Clock</div>
              <div className="text-xl font-semibold">{currentTeam?.name || 'Loading...'}</div>
            </div>
            
            <div className="h-12 w-px bg-gray-200"></div>
            
            <div className="text-center">
              <div className="text-sm font-medium text-gray-500">Time Remaining</div>
              <div className={`text-2xl font-mono ${
                timeLeft <= 10 ? 'text-red-600' : 'text-gray-900'
              }`}>
                {formatTime(timeLeft)}
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={onTogglePause}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium text-gray-700 transition-colors"
              >
                {isPaused ? 'Resume' : 'Pause'}
              </button>
              {isAdmin && (
                <button
                  onClick={onResetDraft}
                  className="px-4 py-2 bg-red-50 hover:bg-red-100 rounded-md text-sm font-medium text-red-700 transition-colors"
                >
                  Reset Draft
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Draft Picks Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Picks</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pick
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Team
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Player
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Position
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {draftPicks.length > 0 ? (
                renderDraftPicks()
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                    No picks have been made yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DraftBoard;

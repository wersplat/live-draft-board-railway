import { useDraft } from '../context/DraftContext/useDraft';
import { useAuth } from '../context/AuthContext';
import DraftBoard from '../components/DraftBoard';
import type { Player } from '../services/supabase';

const HomePage = () => {
  const { user } = useAuth();
  const { 
    teams, 
    players,
    currentPick, 
    isLoading, 
    togglePause,
    resetDraft,
    isPaused,
    timeLeft,
    selectPlayer
  } = useDraft();

  const currentTeam = teams[(currentPick - 1) % teams.length];
  const isAdmin = user?.email?.endsWith('@admin.com') ?? false;

  const handleSelectPlayer = (player: Player) => {
    selectPlayer(player.id);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <DraftBoard 
        currentTeam={currentTeam}
        currentPick={currentPick}
        timeLeft={timeLeft}
        isPaused={isPaused}
        onTogglePause={togglePause}
        onResetDraft={resetDraft}
        isAdmin={isAdmin}
      />
      
      {/* Available Players */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Available Players</h3>
        </div>
        <div className="overflow-y-auto" style={{ maxHeight: '600px' }}>
          {players.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No players available
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {players.map((player: Player) => (
                <li key={player.id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{player.name}</p>
                      <p className="text-sm text-gray-500">{player.position} • {player.team}</p>
                    </div>
                    <button
                      onClick={() => handleSelectPlayer(player)}
                      className={`inline-flex items-center px-3 py-1.5 border text-xs font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        isPaused 
                          ? 'bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed'
                          : 'bg-indigo-600 text-white border-transparent hover:bg-indigo-700 focus:ring-indigo-500'
                      }`}
                      disabled={isPaused}
                    >
                      Draft
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

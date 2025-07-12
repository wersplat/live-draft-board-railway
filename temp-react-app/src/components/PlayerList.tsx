import type { Player } from '../services/supabase';

/**
 * Props for the PlayerList component.
 * @interface PlayerListProps
 * @property {Player[]} players - Array of players to display
 * @property {(player: Player) => void} [onSelectPlayer] - Callback when a player is selected
 * @property {boolean} [isLoading=false] - Whether the component is in a loading state
 * @property {string} [emptyStateMessage='No players available'] - Message to display when no players are available
 * @property {boolean} [showTeam=true] - Whether to show the team column
 * @property {boolean} [showPosition=true] - Whether to show the position column
 * @property {string | number} [maxHeight='none'] - Maximum height of the scrollable container
 * @property {boolean} [showDraftButton=false] - Whether to show the draft button
 * @property {boolean} [isDraftInProgress=true] - Whether the draft is currently in progress (affects button states)
 */
interface PlayerListProps {
  players: Player[];
  onSelectPlayer?: (player: Player) => void;
  isLoading?: boolean;
  emptyStateMessage?: string;
  showTeam?: boolean;
  showPosition?: boolean;
  maxHeight?: string | number;
  showDraftButton?: boolean;
  isDraftInProgress?: boolean;
}

/**
 * A reusable component for displaying a list of players with sorting and selection capabilities.
 * 
 * @component
 * @example
 * const players = [
 *   { id: '1', name: 'John Doe', position: 'QB', team: 'DAL', available: true },
 *   { id: '2', name: 'Jane Smith', position: 'RB', team: 'SF', available: true }
 * ];
 * 
 * return (
 *   <PlayerList 
 *     players={players}
 *     onSelectPlayer={(player) => console.log('Selected:', player)}
 *     isLoading={false}
 *     showTeam={true}
 *     showPosition={true}
 *     maxHeight="400px"
 *     showDraftButton={true}
 *     isDraftInProgress={true}
 *   />
 * );
 */
const PlayerList = ({
  players = [],
  onSelectPlayer,
  isLoading = false,
  emptyStateMessage = 'No players available',
  showTeam = true,
  showPosition = true,
  maxHeight = 'none',
  showDraftButton = false,
  isDraftInProgress = true,
}: PlayerListProps) => {
  // Show loading state if data is being fetched
  if (isLoading) {
    return (
      <div 
        className="flex justify-center items-center p-8"
        role="status"
        aria-live="polite"
        aria-busy={true}
      >
        <div 
          className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"
          aria-hidden="true"
        ></div>
        <span className="sr-only">Loading players...</span>
      </div>
    );
  }

  // Show empty state if no players are available
  if (players.length === 0) {
    return (
      <div 
        className="p-6 text-center text-gray-500"
        role="status"
        aria-live="polite"
      >
        {emptyStateMessage}
      </div>
    );
  }

  return (
    <div 
      className="overflow-x-auto" 
      style={{ maxHeight }}
      role="region"
      aria-label="Players list"
      tabIndex={0}
    >
      <div className="inline-block min-w-full align-middle">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
            <th 
              scope="col" 
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              id="player-name-header"
            >
              Player
            </th>
            {showPosition && (
              <th 
                scope="col" 
                className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                id="player-position-header"
              >
                Position
              </th>
            )}
            {showTeam && (
              <th 
                scope="col" 
                className="px-3 py-3 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                id="player-team-header"
              >
                <span className="hidden sm:inline">Player</span>
                <span className="sm:hidden">Player Info</span>
              </th>
            )}
            {showDraftButton && onSelectPlayer && (
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Draft</span>
              </th>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {players.map((player) => (
            <tr 
              key={player.id} 
              className="hover:bg-gray-50"
              onClick={() => onSelectPlayer?.(player)}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && onSelectPlayer) {
                  e.preventDefault();
                  onSelectPlayer(player);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Select ${player.name}, ${player.position}, ${player.team}`}
            >
              <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10">
                    {player.photo_url ? (
                      <img 
                        className="h-8 w-8 sm:h-10 sm:w-10 rounded-full" 
                        src={player.photo_url} 
                        alt="" 
                        loading="lazy"
                        width={40}
                        height={40}
                      />
                    ) : (
                      <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm sm:text-base">
                        {player.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="ml-2 sm:ml-4 min-w-0">
                    <div className="text-sm font-medium text-gray-900 truncate" id={`player-name-${player.id}`}>
                      {player.name}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 flex items-center">
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-2xs sm:text-xs font-medium bg-blue-100 text-blue-800 mr-1 sm:mr-2">
                        {player.position}
                      </span>
                      {showTeam && (
                        <span className="truncate" id={`player-team-${player.id}`}>
                          {player.team}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </td>
              {showTeam && (
                <td className="hidden sm:table-cell px-4 sm:px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900" aria-labelledby={`player-team-${player.id} player-team-header`}>
                    {player.team}
                  </div>
                </td>
              )}
              {showDraftButton && onSelectPlayer && (
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPlayer?.(player);
                    }}
                    onKeyDown={(e) => {
                      if ((e.key === 'Enter' || e.key === ' ') && onSelectPlayer) {
                        e.stopPropagation();
                        e.preventDefault();
                        onSelectPlayer(player);
                      }
                    }}
                    disabled={!isDraftInProgress}
                    className={`inline-flex items-center px-2 sm:px-3 py-1 border text-xs font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap ${
                      isDraftInProgress
                        ? 'bg-indigo-600 text-white border-transparent hover:bg-indigo-700 focus:ring-indigo-500'
                        : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                    }`}
                    aria-label={`Draft ${player.name}`}
                  >
                    <span className="hidden sm:inline">Draft</span>
                    <span className="sm:hidden">+</span>
                    <span className="sr-only"> {player.name}</span>
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayerList;

import type { Team, Player, DraftPick } from '../services/supabase';

/**
 * Props for the TeamCard component.
 * @interface TeamCardProps
 * @property {Team} team - The team data to display
 * @property {DraftPick[]} picks - Array of draft picks for the team
 * @property {Player[]} players - Array of all players (used to resolve player details for picks)
 * @property {boolean} [isCurrentTeam=false] - Whether this team is currently on the clock
 * @property {(player: Player) => void} [onSelectPlayer] - Callback when a player is selected
 * @property {boolean} [isDraftInProgress=true] - Whether the draft is currently in progress
 */
interface TeamCardProps {
  team: Team;
  picks: DraftPick[];
  players: Player[];
  isCurrentTeam?: boolean;
  onSelectPlayer?: (player: Player) => void;
  isDraftInProgress?: boolean;
}

/**
 * A card component that displays team information, draft picks, and available players.
 * 
 * @component
 * @example
 * const team = { id: '1', name: 'Team A', logo: 'url-to-logo' };
 * const picks = [{ id: '1', pick_number: 1, team_id: '1', player_id: '101' }];
 * const players = [{ id: '101', name: 'John Doe', position: 'QB', team: 'DAL', available: false }];
 * 
 * return (
 *   <TeamCard 
 *     team={team}
 *     picks={picks}
 *     players={players}
 *     isCurrentTeam={true}
 *     onSelectPlayer={(player) => console.log('Player selected:', player)}
 *     isDraftInProgress={true}
 *   />
 * );
 */
const TeamCard = ({
  team,
  picks = [],
  players = [],
  isCurrentTeam = false,
  onSelectPlayer,
  isDraftInProgress = true,
}: TeamCardProps) => {
  // Get player details for each pick
  const picksWithPlayers = picks
    .filter((pick): pick is DraftPick & { player_id: string } => pick.player_id !== null)
    .map(pick => ({
      ...pick,
      player: players.find(p => p.id === pick.player_id)
    }))
    .filter(pick => pick.player) as Array<DraftPick & { player: Player }>;

  /**
   * Counts the number of players at each position for the team.
   * @type {Record<string, number>}
   */
  const positionCounts = picksWithPlayers.reduce<Record<string, number>>((acc, { player }) => {
    const position = player.position;
    acc[position] = (acc[position] || 0) + 1;
    return acc;
  }, {});

  /**
   * Determines the team's positional needs based on current roster.
   * @returns {string[]} Array of position needs in the format "POS (current/required)"
   * @example
   * // Returns ["QB (0/1)", "RB (1/2)"]
   * teamNeeds();
   */
  const teamNeeds = () => {
    const needs: string[] = [];
    const positionRequirements = {
      'QB': 1,
      'RB': 2,
      'WR': 2,
      'TE': 1,
      'FLEX': 1,
      'K': 1,
      'DEF': 1
    };

    Object.entries(positionRequirements).forEach(([position, required]) => {
      const current = positionCounts[position] || 0;
      if (current < required) {
        needs.push(`${position} (${current}/${required})`);
      }
    });

    return needs.length > 0 ? needs : ['No immediate needs'];
  };

  return (
    <article 
      className={`bg-white rounded-lg shadow overflow-hidden w-full ${
        isCurrentTeam ? 'ring-2 ring-indigo-500' : ''
      }`}
      aria-labelledby={`team-${team.id}-name`}
      aria-describedby={`team-${team.id}-picks`}
    >
      {/* Team Header */}
      <div className="px-3 py-4 sm:px-4 md:px-6 bg-gray-50">
        <div className="flex items-start sm:items-center">
          {team.logo ? (
            <div className="flex-shrink-0">
              <img 
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full mr-3 sm:mr-4" 
                src={team.logo} 
                alt="" 
                aria-hidden="true"
                width={48}
                height={48}
                loading="lazy"
              />
            </div>
          ) : (
            <div 
              className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-200 flex items-center justify-center text-lg sm:text-xl font-bold text-gray-500 mr-3 sm:mr-4"
              aria-hidden="true"
            >
              {team.name.charAt(0)}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h3 id={`team-${team.id}-name`} className="text-base sm:text-lg font-medium text-gray-900 truncate">
              {team.name}
              {isCurrentTeam && (
                <span className="sr-only"> (current team on the clock)</span>
              )}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              <span>{picks.length} {picks.length === 1 ? 'pick' : 'picks'}</span>
              <span aria-hidden="true"> • </span>
              <span className="whitespace-normal">{teamNeeds().join(', ')}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Team Picks */}
      <div className="border-t border-gray-200">
        <div className="px-3 py-2 sm:px-4 sm:py-3 bg-gray-50">
          <h4 id={`team-${team.id}-picks`} className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Draft Picks
          </h4>
        </div>
        <div className="divide-y divide-gray-200">
          {picksWithPlayers.length > 0 ? (
            <ul className="divide-y divide-gray-200 max-h-48 overflow-y-auto">
              {picksWithPlayers.map(({ pick_number, player }) => (
                <li key={`${team.id}-${pick_number}`} className="px-3 py-2 sm:px-4 sm:py-3 hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 text-sm font-medium text-gray-500">
                      {pick_number}.
                    </div>
                    <div className="ml-2 min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {player.name}
                      </p>
                      <p className="text-xs text-gray-500 flex items-center">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                          {player.position}
                        </span>
                        <span className="truncate">{player.team}</span>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-3 text-sm text-gray-500">
              No picks made yet
            </div>
          )}
        </div>
      </div>

      {/* Available Players (only show for current team during draft) */}
      {isCurrentTeam && isDraftInProgress && onSelectPlayer && (
        <div className="border-t border-gray-200">
          <div id={`team-${team.id}-available`} className="sr-only">
            Available players for {team.name}. Use arrow keys to navigate and Enter to select a player.
          </div>
          <div className="px-3 py-2 sm:px-4 sm:py-3 bg-gray-50">
            <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Available Players
            </h4>
          </div>
          <div className="max-h-48 overflow-y-auto">
            {players.filter(p => p.available).length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {players
                  .filter(player => player.available)
                  .slice(0, 5) // Show top 5 available players
                  .map((player) => (
                    <li key={player.id} className="px-3 py-2 sm:px-4 hover:bg-gray-50">
                      <button
                        onClick={() => onSelectPlayer?.(player)}
                        onKeyDown={(e) => {
                          if ((e.key === 'Enter' || e.key === ' ') && onSelectPlayer) {
                            e.preventDefault();
                            onSelectPlayer(player);
                          }
                        }}
                        className="w-full text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md p-2"
                        aria-describedby={`team-${team.id}-available`}
                        aria-label={`Select ${player.name}, ${player.position}, ${player.team}`}
                        tabIndex={0}
                      >
                        <p className="text-sm font-medium text-gray-900 truncate">{player.name}</p>
                        <p className="text-xs text-gray-500 flex items-center mt-1">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-2xs font-medium bg-indigo-100 text-indigo-800 mr-2">
                            {player.position}
                          </span>
                          <span className="truncate">{player.team}</span>
                        </p>
                      </button>
                    </li>
                  ))}
              </ul>
            ) : (
              <div className="px-4 py-3 text-sm text-gray-500">
                No available players
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
};

export default TeamCard;

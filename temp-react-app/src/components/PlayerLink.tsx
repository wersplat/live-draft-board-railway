interface PlayerLinkProps {
  playerId: string;
  playerName: string;
  className?: string;
}

export default function PlayerLink({ playerId, playerName, className = '' }: PlayerLinkProps) {
  const proamRankUrl = `https://proamrank.gg/players/${playerId}`;
  
  return (
    <a
      href={proamRankUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-legends-purple-600 dark:text-legends-purple-400 hover:text-legends-purple-800 dark:hover:text-legends-purple-300 underline transition-colors ${className}`}
    >
      {playerName}
    </a>
  );
}


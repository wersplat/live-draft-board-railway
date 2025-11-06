import Card from '@/components/Card';

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Legends Basketball Association
        </h1>
        <p className="text-lg text-gray-600 dark:text-neutral-300">
          The premier competitive basketball league
        </p>
      </div>

      <Card>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 dark:text-neutral-300 mb-4">
          The Legends Basketball Association is dedicated to providing the highest level of competitive basketball 
          while fostering sportsmanship, teamwork, and excellence both on and off the court.
        </p>
        <p className="text-gray-700 dark:text-neutral-300">
          We strive to create an environment where players can showcase their skills, compete at the highest level, 
          and build lasting relationships within the basketball community.
        </p>
      </Card>

      <Card>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          League History
        </h2>
        <p className="text-gray-700 dark:text-neutral-300 mb-4">
          Founded with a vision to elevate competitive basketball, the Legends Basketball Association has grown 
          into one of the most respected leagues in the sport. Our commitment to fair play, competitive balance, 
          and player development has made us a destination for top talent.
        </p>
        <p className="text-gray-700 dark:text-neutral-300">
          Over the years, we've seen countless memorable moments, championship runs, and the development of 
          players who have gone on to achieve greatness at all levels of the game.
        </p>
      </Card>

      <Card>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          What Makes Us Different
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-neutral-300">
          <li>Comprehensive player rankings and statistics tracking</li>
          <li>Transparent draft process with live updates</li>
          <li>Regular season and playoff competition</li>
          <li>Integration with Pro-Am Rankings for comprehensive player profiles</li>
          <li>Media coverage and highlights</li>
          <li>Community-focused approach to competitive basketball</li>
        </ul>
      </Card>
    </div>
  );
}

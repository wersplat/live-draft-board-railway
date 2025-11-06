import { Link } from 'react-router-dom';
import Card from '../components/Card';

const HomePage = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Legends Basketball Association
        </h1>
        <p className="text-xl text-gray-600 dark:text-neutral-300 mb-8">
          The premier competitive basketball league
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <Link to="/rankings" className="block">
            <div className="text-center">
              <div className="text-4xl mb-4">🏀</div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Player Rankings
              </h2>
              <p className="text-gray-600 dark:text-neutral-300">
                View all players and their profiles
              </p>
            </div>
          </Link>
        </Card>

        <Card>
          <Link to="/matches" className="block">
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Recent Matches
              </h2>
              <p className="text-gray-600 dark:text-neutral-300">
                Latest game results and scores
              </p>
            </div>
          </Link>
        </Card>

        <Card>
          <Link to="/standings" className="block">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Standings
              </h2>
              <p className="text-gray-600 dark:text-neutral-300">
                Current league standings
              </p>
            </div>
          </Link>
        </Card>

        <Card>
          <Link to="/statistics" className="block">
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Statistics
              </h2>
              <p className="text-gray-600 dark:text-neutral-300">
                League-wide stats and metrics
              </p>
            </div>
          </Link>
        </Card>

        <Card>
          <Link to="/draft-pool" className="block">
            <div className="text-center">
              <div className="text-4xl mb-4">👥</div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Draft Pool
              </h2>
              <p className="text-gray-600 dark:text-neutral-300">
                Available players for draft
              </p>
            </div>
          </Link>
        </Card>

        <Card>
          <Link to="/draft" className="block">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Live Draft
              </h2>
              <p className="text-gray-600 dark:text-neutral-300">
                Follow the draft in real-time
              </p>
            </div>
          </Link>
        </Card>
      </div>

      <Card>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            About Legends Basketball Association
          </h2>
          <p className="text-gray-700 dark:text-neutral-300 mb-4">
            The Legends Basketball Association is dedicated to providing the highest level of competitive basketball 
            while fostering sportsmanship, teamwork, and excellence both on and off the court.
          </p>
          <Link
            to="/about"
            className="inline-block px-6 py-2 bg-legends-purple-600 text-white rounded-lg hover:bg-legends-purple-700 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default HomePage;

import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { DraftProvider } from './context/DraftContext';
import Layout from './components/Layout';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import TeamPage from './views/TeamPage';
import NotFoundPage from './views/NotFoundPage';
import AboutPage from './views/AboutPage';
import PlayerRankingsPage from './views/PlayerRankingsPage';
import RecentMatchesPage from './views/RecentMatchesPage';
import StandingsPage from './views/StandingsPage';
import StatisticsPage from './views/StatisticsPage';
import MediaPage from './views/MediaPage';
import DraftPoolPage from './views/DraftPoolPage';
import LiveDraftPage from './views/LiveDraftPage';
import './styles/index.css';

function App() {
  return (
    <AuthProvider>
      <DraftProvider>
        <div className="min-h-screen bg-white dark:bg-legends-blue-900 transition-colors duration-200">
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/teams/:teamId" element={<TeamPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/rankings" element={<PlayerRankingsPage />} />
              <Route path="/matches" element={<RecentMatchesPage />} />
              <Route path="/standings" element={<StandingsPage />} />
              <Route path="/statistics" element={<StatisticsPage />} />
              <Route path="/media" element={<MediaPage />} />
              <Route path="/draft-pool" element={<DraftPoolPage />} />
              <Route path="/draft" element={<LiveDraftPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
          <Toaster position="bottom-right" />
        </div>
      </DraftProvider>
    </AuthProvider>
  );
}

export default App;

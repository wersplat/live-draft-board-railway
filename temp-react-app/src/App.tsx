import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { DraftProvider } from './context/DraftContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import TeamPage from './pages/TeamPage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import PlayerRankingsPage from './pages/PlayerRankingsPage';
import RecentMatchesPage from './pages/RecentMatchesPage';
import StandingsPage from './pages/StandingsPage';
import StatisticsPage from './pages/StatisticsPage';
import MediaPage from './pages/MediaPage';
import DraftPoolPage from './pages/DraftPoolPage';
import LiveDraftPage from './pages/LiveDraftPage';
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

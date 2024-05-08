import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './Layout';
import { lazy } from 'react';
import SearchPage from './pages/Search';
const Home = lazy(() => import('./pages/Home'));
import Anime from './pages/Anime';
import AnimePlayerPage from './pages/AnimePlayer';
import { ToastBar, Toaster } from 'react-hot-toast';
import 'tailwindcss/tailwind.css';
import ErrorPage from './pages/Error';
import SettingsPage from './pages/Settings';
import { TermsAndConditions } from './pages/Terms-and-Conditions';
import RecentPage from './pages/Recent';
import PopularPage from './pages/Popular';
// const Search = lazy(() => import('./pages/Search'));

export default function App() {
  return (
    <ChakraProvider>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/anime/:id" element={<Anime />} />
            <Route path="/anime/:id/watch" element={<AnimePlayerPage />} />
            <Route path="/recent" element={<RecentPage />} />
            <Route path="/popular" element={<PopularPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route
              path="*"
              element={<ErrorPage errorMessage="404 Page not Found!" />}
            />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

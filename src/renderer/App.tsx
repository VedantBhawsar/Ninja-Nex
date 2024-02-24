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
// const Search = lazy(() => import('./pages/Search'));

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="anime/:id" element={<Anime />} />
            <Route path="anime/:id/watch" element={<AnimePlayerPage />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

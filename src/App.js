import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandinPage';
import MoviesPage from './components/MoodPage';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#20202c', minHeight: '100vh' }}>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/movies/:genere" element={<MoviesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
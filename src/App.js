import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandinPage';
import MoviesPage from './components/MoodPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import "./App.css"

function App() {
  return (
    <Router>
      <div style={{  backgroundColor: "#1a1a25", minHeight: '100vh' }}>
      <div style={{ paddingTop: "25px" }}>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/movies/:genere" element={<MoviesPage />} />
        </Routes>
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

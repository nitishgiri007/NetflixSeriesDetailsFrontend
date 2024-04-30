import LandingPage from "./components/LandinPage";
import MoodPage from "./components/MoodPage";

function App() {
  return (
    <div style={{ backgroundColor: "#20202c", minHeight: "100vh" }}>
      <MoodPage />
      <LandingPage />
    </div>
  );
}

export default App;


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from './components/LandingPage';
import { SIgninpage } from './pages/SIgninpage';
import { Leaderboard } from "./pages/Leaderboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landingpage" element={<LandingPage/> } />
        <Route path="/user" element={<SIgninpage/> } />
        <Route path="/leaderboard" element={<Leaderboard/> } />
      </Routes>
    </Router>
  )
}

export default App;
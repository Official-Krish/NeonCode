
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from './components/LandingPage';
import { SIgninpage } from './pages/SIgninpage';
import { LoggedLandingPage } from "./components/LoggedLandingpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landingpage" element={<LandingPage/> } />
        <Route path="/signin" element={<SIgninpage/> } />
        <Route path="/user" element={<LoggedLandingPage/> } />
      </Routes>
    </Router>
  )
}

export default App;
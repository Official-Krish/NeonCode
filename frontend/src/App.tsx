
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from './components/LandingPage';
import { SIgninpage } from './pages/SIgninpage';
import { SigninGoogle } from "./pages/SigninGoogle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landingpage" element={<LandingPage/> } />
        <Route path="/user" element={<SIgninpage/> } />
        {/* <Route path="/signintest" element={<SigninGoogle/> } /> */}
      </Routes>
    </Router>
  )
}

export default App;
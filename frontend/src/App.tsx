
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from './components/LandingPage';
import { SIgninpage } from './pages/SIgninpage';
import { Leaderboard } from "./pages/Leaderboard";
import { ProblemList } from "./components/ProblemList";


const problemList = [
  { id: "1", problemName: "Two Sum", tags: ["Array", "Hash Table"] },
  { id: "2", problemName: "Reverse String", tags: ["String"] },
  { id: "3", problemName: "Palindrome Check", tags: ["String"] },
  { id: "4", problemName: "Merge Intervals", tags: ["Array", "Sorting"] },
];
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landingpage" element={<LandingPage/> } />
        <Route path="/user" element={<SIgninpage/> } />
        {/* <Route path="/leaderboard" element={<Leaderboard/> } /> */}
        <Route path="/problemlist" element={<ProblemList problemList={problemList}/> } />
      </Routes>
    </Router>
  )
}

export default App;
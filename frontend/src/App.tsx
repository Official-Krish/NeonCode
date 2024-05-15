
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from './components/LandingPage';
import { SIgninpage } from './pages/SIgninpage';
import { Leaderboard } from "./pages/Leaderboard";
import { ProblemList } from "./components/ProblemList";
import { Submissions } from "./components/Submissions";
import { RecoilRoot } from "recoil";



const problemList = [
  { id: "1", problemName: "Two Sum", tags: ["Array", "Hash Table"] },
  { id: "2", problemName: "Reverse String", tags: ["String"] },
  { id: "3", problemName: "Palindrome Check", tags: ["String"] },
  { id: "4", problemName: "Merge Intervals", tags: ["Array", "Sorting"] },
];
const leaderboard = [
  { id: "1", image: "Two Sum", name : "Krish", points : 5 },
  { id: "2", image: "Two Sum", name : "Rakshita", points : 4, },
  { id: "3", image: "Two Sum", name : "Priyansh", points : 3, },
  { id: "4", image: "Two Sum", name : "Aseem", points : 2  }
];

function App() {
  return (
    <RecoilRoot>
      <Handler/>
    </RecoilRoot>
  );
}

function Handler() {
  return (
    <Router>
      <Routes>
        <Route path="/landingpage" element={<LandingPage/> } />
        <Route path="/user" element={<SIgninpage/> } />
        <Route path="/leaderboard" element={<Leaderboard leaderboard={leaderboard}/> } />
        <Route path="/problemlist" element={<ProblemList problemList={problemList}/> } />
        <Route path="/submissions" element={<Submissions/> } />
      </Routes>
    </Router>
  )
}

export default App;
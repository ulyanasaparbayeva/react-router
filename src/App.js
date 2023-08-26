
import {Routes, Route} from "react-router-dom";
import Download from './pages/Download'
import Premium from './pages/Premium'
import Expert from './pages/Expert'
import Home from './pages/Home'
import Nav from './components/Nav'
import Area from './auth/Area'
import Length from './auth/Length'
import Scientific from './auth/Scientific'
import Trigonemtry from './routes/Trigonemtry'
import Geometry from './routes/Geometry'
import Calculus from './routes/Calculus'
import Arifmetic from './routes/Arifmetic'
import Lessons from './pages/Lessons'
import Algebra from './routes/Algebra'
import All from './routes/All'


import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/Download" element={<Download/>} />
        <Route path="/Premium" element={<Premium/>} />
        <Route path="/Expert" element={<Expert/>}>
          <Route path="All" element={<All/>} />
          <Route path="Algebra" element={<Algebra/>} />
          <Route path="Arifmetic" element={<Arifmetic/>} />
          <Route path="Calculus" element={<Calculus/>} />
          <Route path="Geometry" element={<Geometry/>} />
          <Route path="Trigonemtry" element={<Trigonemtry/>} />
        </Route>
        <Route path="/Lessons" element={<Lessons/>}>
          <Route path="Area" element={<Area/>} />
          <Route path="Length" element={<Length/>} />
          <Route path="Scientific" element={<Scientific/>} />
        </Route>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;

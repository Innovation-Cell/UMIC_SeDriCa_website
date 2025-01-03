import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Competition from './components/Competitions/Competitions';
import Sponsors from './components/Sponsors/Sponsors';
import Sedrica from './components/Sedrica-Homepage/Sedrica';
import Homepage from './components/Umic(Home)/Homepage';
import MRgro from './components/RGroup/MRgro';
import MGallery from './components/Gallery/MGallery';
import MedBlo from './components/MediaBlog/MedBlo';
import Subsystems from "./components/Subsystems/Subsystems";
import Mash from "./components/Mashruwala/mash"

function App() {
  return (
    <div className="App">
      <Router>

          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/competitions" element={<Competition />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/Teams/Sedrica" element={<Sedrica />} />
            <Route path="/Subsystems" element={<Subsystems />} />
            <Route path="/MediaBlog" element={<MedBlo />} />
            <Route path="/Gallery" element={<MGallery />} />
            <Route path="/ResearchGroup" element={<MRgro />} />
            <Route path="/Benefactors" element={<Mash />} />
          </Routes>
       
      </Router>
    </div>
  );
}

export default App;

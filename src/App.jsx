import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
import Index from './pages/Index/Index';
import Game from './pages/Game/Game';
import Project from './components/Project/Project';
// import Project from './pages/Project/Project';
// import Game from './pages/Game/Game';
import './sass/app.scss'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/game" element={<Game/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
import Index from './pages/Index/Index';
import Game from './pages/Game/Game';
import Budget from './pages/Budget/Budget';
import './sass/app.scss'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/budget" element={<Budget/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

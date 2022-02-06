import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
import Index from './pages/Index/Index';
import Budget from './pages/Budget/Budget';
import PayCalculate from './pages/PayCalculate/PayCalculate';
import './sass/app.scss'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/budget" element={<Budget/>}/>
          <Route path="/pay" element={<PayCalculate/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

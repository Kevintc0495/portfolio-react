import React from "react";
import './sass/app.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './pages/Index/Index';
import Budget from './pages/Budget/Budget';
import PayCalculate from './pages/PayCalculate/PayCalculate';
import Pokemon from "./pages/Pokemon/Pokemon";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/budget" element={<Budget/>}/>
          <Route path="/pay" element={<PayCalculate/>}/>
          <Route path="/pokemon" element={<Pokemon/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

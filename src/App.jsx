import React from "react";
import './sass/app.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './pages/Index/Index';
import PayCalculate from './pages/PayCalculate/PayCalculate';
import Pokemons from "./pages/Pokemons/Pokemons";
import Pokemon from "./pages/Pokemon/Pokemon";
import { UrlProvider } from "./context/UrlContext";

function App() {

  return (
    <div className="App">
      <UrlProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/pay" element={<PayCalculate/>}/>
            <Route path="/pokemons" element={<Pokemons/>}/>
            <Route path="/pokemons/:name" element={<Pokemon/>}/>
          </Routes>
        </Router>
      </UrlProvider>
    </div>
  )
}

export default App

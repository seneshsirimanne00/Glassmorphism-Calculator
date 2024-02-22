import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home';
import Calculator from './components/calculator/calculator';
import background from "./img/bak.png";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, height: "100vh" , backgroundSize: "100vw 100vh"}}>
      <Routes>
        <Route path="/" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;

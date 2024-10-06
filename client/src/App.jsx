import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Main from "./pages/Main";
import Flags from "./pages/Flags";


import Landing from "./pages/Landing";
//functions
import Connection from "./pages/connection";
import Games from "./pages/Games";

function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Connection" element={<Connection />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Flags" element={<Flags/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

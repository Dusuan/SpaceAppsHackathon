import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Main from "./pages/Main";
import './App.css';
import { useState, useEffect } from 'react';
import Main from './pages/Main';

import Landing from "./pages/Landing";

//functions
import { getTests } from "./functions/test";
import Connection from "./pages/connection";

function App() {
  const [data, setData] = useState("Hello World");

  useEffect(() => {
    getTests()
      .then((res) => {
        setData(res.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <p>{data}</p>
      <Connection></Connection>
    </div>
  );
}

export default App;

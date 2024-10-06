import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Main from "./pages/Main";
import Landing from "./pages/Landing";
import Flags from "./pages/Flags";
import Games from "./pages/Games";

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
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Connections" element={<Connection />} />
          <Route path="/Flags" element={<Flags />} />
          <Route path="/Games" element={<Games />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

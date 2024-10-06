
import './App.css';
import { useState, useEffect } from 'react';
 import Main from './pages/Main';


//functions
import { getTests } from './functions/test';
import Connection from './pages/Connections/connection';


function App() {
  const [data, setData] = useState("Hello World");

  useEffect(() => {
    getTests().then((res) => {
      setData(res.message);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;

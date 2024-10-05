import { set } from 'mongoose';
import './App.css';
import { useState, useEffect } from 'react';

//functions
import { getTests } from './functions/test';

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
      <p>{data}</p>
    </div>
  );
}

export default App;

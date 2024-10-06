
import './App.css';
import { useState, useEffect } from 'react';
 import Main from './pages/Main';


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
      <Main />
      <p>{data}</p>
      <h1 className='text-9xl'>Hello World actualizado</h1>
    </div>
  );
}

export default App;


import './App.css';
import { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
 import Main from './pages/Main';

>>>>>>> be5bcc790106e54625d99b1d4cb87bce951fbe55

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
      <p>{data}</p>
      <h1 className='text-9xl'>Hello world</h1>
    </div>
  );
}

export default App;

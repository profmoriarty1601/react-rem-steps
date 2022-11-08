import './App.css';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function App() {

  const [count, setCount] = useState(1);
  function updateCounter() {
    let random_val = Math.floor(Math.random() * 10);
    setCount((prev) => {
      console.warn("Previous Val : " + prev);
      if (prev < 2) {
        alert("LOW Value !!!");        
      }

      return random_val;
    })
  }

  return (
    <div className="App">
      <h1>React World !!!</h1>
      <h2>Previous Statte</h2>
      <br />
      <h3>{count}</h3>
      <br />
      <Button onClick={updateCounter}>Update Counter !</Button>
    </div>
  );
}

export default App;
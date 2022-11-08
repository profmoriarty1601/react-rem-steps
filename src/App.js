import './App.css';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import User from './User';

function App() {

  const [count, setCount] = useState(0);  

  return (
    <div className="App">
      <h1>React World !!!</h1>
      <h2>Previous Props with Hooks</h2>
      <br />
      <User count={count} />
      {/* <h3>Count : {count}</h3> */}
      <br />
      <Button onClick={()=>setCount(Math.ceil(Math.random()*10))}> Update Counter </Button>
    </div>
  );
}

export default App;
import './App.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import { CommonContext } from './components/CommonContext';

function App() {  

  return (
    <div className="App">
      <h1>React World !!!</h1>
      <h2>Context API</h2>
      <br />
      <CommonContext.Provider >
        <h4>CommonContext</h4>
      </CommonContext.Provider>
    </div>
  );
}

export default App;
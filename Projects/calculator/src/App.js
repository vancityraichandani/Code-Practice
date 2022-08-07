import logo from './logo.svg';
import './App.css';
import ButtonCreator from './components/ButtonCreator';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1><strong><i><span style={{color:'red'}}>R</span><span style={{color:'green'}}>G</span><span style={{color:'blue'}}>B</span> CALCULATOR</i></strong> </h1>
      <ButtonCreator />
    </div>
  );
}

export default App;

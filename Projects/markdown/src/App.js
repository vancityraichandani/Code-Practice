import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('')
  return (
    <div className="App">
      <Editor text={text} setText={setText} />
      <Viz />
    </div>
  );
}

export default App;

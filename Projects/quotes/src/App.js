import logo from './logo.svg';
import './App.css';
import Refresh from './components/Refresh';
import Quote from './components/Quote';
import { useState } from 'react';
import quotes from './constants/quotes'

function App() {
  
  const [quote, setquote] = useState("")
  const [author, setauthor] = useState("")

  return (
    <div className="App">
      <Refresh quotes={quotes} quote={quote} setquote={setquote} author={author} setauthor={setauthor} />
      <Quote quotes={quotes} quote={quote} setquote={setquote} author={author} setauthor={setauthor} />
    </div>
  );
}

export default App;
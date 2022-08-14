import './App.css';
import Refresh from './components/Refresh';
import Quote from './components/Quote';
import { useState } from 'react';
import quotes from './constants/quotes'
import { useSelector } from 'react-redux'

function App() {

  const quote = useSelector((state)=>state.quote)
  const author = useSelector((state)=>state.author)

    // const [quote, setquote] = useState("")
    // const [author, setauthor] = useState("")

    return (
      <div className="App">
        <Refresh quotes={quotes} quote={quote} author={author} />
        <Quote quotes={quotes} quote={quote} author={author} />
      </div>
    );
  }

export default App;
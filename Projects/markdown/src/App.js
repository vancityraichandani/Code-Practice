import './App.css';
import { useState } from 'react';
import Viz from './components/Viz';
import Editor from './components/Editor';
import { Typography } from '@mui/material';

function App() {

  const [text, setText] = useState('')

  return (
    <div className="App">
      <Typography sx={{paddingTop:3,fontSize:30, fontWeight:'bold', fontFamily:'Consolas', color: 'purple'}}>
        # <i> Welcome to Markdown Previewer </i>#
      </Typography>
      <Editor text={text} setText={setText} />
      <Viz text={text} setText={setText} />
    </div>
  );
}

export default App;
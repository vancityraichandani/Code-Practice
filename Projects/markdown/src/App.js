import './App.css';
import { useState } from 'react';
import Viz from './components/Viz';
import Editor from './components/Editor';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux'

function App() {

  const text = useSelector((state) => state.text)
  // const text = "1"
  return (
    <div className="App">
      <Typography sx={{ paddingTop: 3, fontSize: 30, fontWeight: 'bold', fontFamily: 'Consolas', color: 'purple' }}>
        # <i> Welcome to Markdown Previewer </i>#
      </Typography>
      <Editor text={text} />
      <Viz text={text} />
    </div>
  );
}

export default App;
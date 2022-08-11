import { useEffect, useState } from 'react';
import './App.css';
import Control from './components/Control';
import Timer from './components/Timer';
import Header from './components/Header';

function App() {

  const [time, setTime] = useState(25 * 60)
  const [minutes, setMinutes] = useState(time / 60)
  const [seconds, setSeconds] = useState(time % 60 < 10 ? '0' + time % 60 : time % 60)
  const fixedSec = seconds
  const fixedMin = minutes
  const [play, setPlay] = useState(false)

  const data = {
    play, setPlay,time, setTime, minutes,setMinutes, seconds, setSeconds, fixedSec, fixedMin
  }

  return (
    <div className="App">
      <Header />
      <Timer data={data}/>
      <Control data={data}/>
    </div>
  );
}

export default App;

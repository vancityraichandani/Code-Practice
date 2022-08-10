import { useEffect, useState } from 'react';
import './App.css';
import Control from './components/Control';
import Timer from './components/Timer';

function App() {

  const [time, setTime] = useState(25 * 60)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    setMinutes(time / 60)
    setSeconds(time % 60 < 10 ? '0' + time % 60 : time % 60)
  }, [])

  const data = {
    time, setTime, minutes, seconds, setSeconds
  }

  return (
    <div className="App">
      <Timer data={data}/>
      <Control data={data}/>
    </div>
  );
}

export default App;

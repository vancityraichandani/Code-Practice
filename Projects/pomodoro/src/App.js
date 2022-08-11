import { useEffect, useState } from 'react';
import './App.css';
import Control from './components/Control';
import Timer from './components/Timer';
import Header from './components/Header';

let s = 5
function App() {

  const [time, setTime] = useState(25 * 60)
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState(5)

  // useEffect(() => {
  //   setMinutes(time / 60)
  //   setSeconds(time % 60 < 10 ? '0' + time % 60 : time % 60)
  // }, [])

  const data = {
    time, setTime, minutes, seconds, setSeconds
  }

  function resolveAfter1Second() {
    // setSeconds(parseInt(seconds) + 1)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('res')
      }, 1000)
    });
  }

  async function handleClick() {
    // const result = await resolveAfter1Second();
    // handleClick()
    // while(seconds < 20){
    // setSeconds(parseInt(seconds) + 1)
    // const result = await resolveAfter1Second();
    // }
    while (s < 20) {
      s++
      const result = await resolveAfter1Second();
      setSeconds(s)
    }
  }

  return (
    <div className="App">
      <Header />
      {/* <Timer data={data}/>
      <Control data={data}/> */}
      <div>
        <span style={{ fontSize: 80 }} >{minutes}:</span>
        <span style={{ fontSize: 80 }} >{seconds}</span>
      </div>
      <button
        onClick={handleClick}>
        Play
      </button>
    </div>
  );
}

export default App;

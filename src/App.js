import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(false);
  let timerId = useRef();
  useEffect(() => {
    clearInterval(timerId.current)
  }, [])
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setTime((time) => time + 1)
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
    setTime(0);
  }
  const handlePause = () => {
   if(paused) {
    setPaused(false)
    handleStart();
   } else {
    clearInterval(timerId.current);
    setPaused(true)
   }
    
  }
  
  return (
    <>
      <h1>{time}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handlePause}>{paused ? 'Resume' : 'Pause'}</button>
    </>
  );
}

export default App;

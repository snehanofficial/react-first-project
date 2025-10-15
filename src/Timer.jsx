import React, { useEffect, useState } from 'react'
import BackBtn from './BackBtn';

export default function Timer() {
    const [time, setTime] = useState(0);
    const [delay, setDelay] = useState(1000);
    const [isRunning, setRunning] = useState(true);
    
    useEffect(() => {
      if (isRunning) {
        let interval = setInterval(() => {
            setTime(t => t+1)
        }, delay);

        return () => {clearInterval(interval)};
      }
    }, [delay, isRunning])
  return (
    <div style={{textAlign:'center'}}>
      <h2>Timer ⏱️</h2>
      <h3 id="timer-display" style={{display:'inline-block'}}>{time} s </h3> <button onClick={() => setRunning(!isRunning)}>{(isRunning) ? "Pause" : "Resume"}</button><br />
      <label htmlFor="delayInput">Enter the time interval: </label>
      <input type="number" id='delayInput' value={delay} placeholder='Enter time interval' onChange={(e) => {setDelay(e.target.value)}}/>
      <br /><br /><BackBtn label={'Back to List'} /> <br /><br />
    </div>
  )
}

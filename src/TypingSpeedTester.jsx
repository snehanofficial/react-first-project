import React, { useEffect, useMemo, useRef, useState } from 'react'
import BackBtn from './BackBtn';

export default function TypingSpeedTester() {
    const textToType = "Practice makes a man perfect!"

    const [time, setTime] = useState(0.00);
    const [textInput, setTextInput] = useState("");
    const timerRef = useRef(null);
    const textInputRef = useRef(null);
    
    useEffect(() => {
        textInputRef.current.focus();
    }, []);

    const setTimer = () => {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => setTime((t) => t + 1), 1000);
        }
    }

    const stopTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    }

    const reset = () => {
        stopTimer();
        setTime(0);
        setTextInput("");
    }

    useEffect(() => {
        if (textInput === textToType) stopTimer();
    }, [textInput]);
    
    const accuracy = useMemo(() => {
    let correct = 0;
    for (let i = 0; i < textInput.length; i++) {
        if (textInput[i] === textToType[i]) correct++;
    }
    return ((correct / textToType.length) * 100).toFixed(1);
    }, [textInput]);

    const wpm = useMemo(() => {
    const words = textInput.trim().split(/\s+/).length;
    return (time > 0) ? ((words / time) * 60).toFixed(1) : 0;
    }, [textInput, time]);



  return (
    <div>
        <h1>Typing Speed Checker ⌨️</h1>
        <p><b>Text to type:</b> <mark>{textToType}</mark></p>
        <textarea name="textInput" id="textInput" cols="40" rows="10" ref={textInputRef} value={textInput} onChange={(e) => {setTextInput(e.target.value); setTimer();}}></textarea>
        <h3>Time elapsed: {time}s</h3>
        <h3>Accuracy: {accuracy}</h3>
        <h3>WPM: {wpm}</h3>
        <button onClick={reset}>Reset</button><br /><br />
        <BackBtn label={'Back to List'} /> <br /><br /> 
    </div>
  )
}

import React, { useState } from 'react'

export default function Home() {
const [count, setCount] = useState(0);
  function handleClick() {
    if (count<10) {
      console.log(count);
      setCount(count+1);
    } else if (count<50){
      console.log(count);
      setCount(count+5);
    } else {
      console.log("Limit Exceeded!");
    }
}
  return (
    <div>
      <br />
      <h1>This is Home page.</h1>
      You have clicked the below button {count} times. <br />
      <button onClick={handleClick}>Click me</button> <br /> <br />
    </div>
  )
}

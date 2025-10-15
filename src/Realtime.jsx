import React, { useState } from 'react'
import RealtimeOutput from './RealtimeOutput'
import BackBtn from './BackBtn';

export default function Calc() {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
  return (
    <>
    <div>
      <input type="text" placeholder='Enter your Name' onChange={(event) => {setName(event.target.value)}}/> <br /><br />
      <input type="number" placeholder='Enter your Age' onChange={(event) => {setAge(event.target.value)}}/> <br /><br />
      <input type="number" placeholder='Enter your Phone Number' onChange={(event) => {setPhoneNumber(event.target.value)}}/> <br /><br />
    </div>
    <RealtimeOutput name={name} age={age} phoneNumber={phoneNumber} />
    <BackBtn label={'Back to List'} /> <br /><br /> 
    </>
  )
}

import React from 'react'

export default function RealtimeOutput(props) {
  return (
    <div>
      <h3>Your Name: {props.name}</h3>
      <h2>Your Age: {props.age}</h2>
      <h2>Your Phone Number: {props.phoneNumber}</h2>
    </div>
  )
}

import React from 'react'
import { useSearchParams } from 'react-router-dom';
import BackBtn from './BackBtn';

export default function StudentProfile() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const department = searchParams.get("department");
    const email = searchParams.get("email");
  return (
    <div>
      <h1>Student Profile 🧑🏻‍🎓</h1>
      <h3>Enrollment Number: 2025U{department}{id}</h3>
      <h3>Name: {name}</h3>
      <h3>Department: {department}</h3>
      <h3>Email: <a href={`mailto:${email}`}>{email}</a></h3>
      <br /><br /><BackBtn label={'Back to List'} /> <br /><br />
    </div>
  )
}

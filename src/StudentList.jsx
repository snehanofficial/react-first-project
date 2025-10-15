import React from 'react'
import { useNavigate } from 'react-router-dom';
import BackBtn from './BackBtn';

export default function StudentList() {
    const navigate = useNavigate();
    let students = [
        {id:1154, name:"SNEHAN S", department:"IT", email:"snehans.it25@bitsathy.ac.in"},
        {id:1018, name:"SREEHARI S", department:"IT", email:"sreeharis.it25@bitsathy.ac.in"},
        {id:1070, name:"RISHABH M", department:"IT", email:"rishabhm.it25@bitsathy.ac.in"}
    ];
  return (
    <div>
      <h2>Students List</h2>
      <ol>
        {students.map((student, index) => {
            return(
                <>
                <li key={index}>{student.name} - <button onClick={() => navigate(`../student/profile?id=${student.id}&name=${student.name}&department=${student.department}&email=${student.email}`)}>View Profile</button></li><br />
                </>
            )
        })}
      </ol>
      <br /><br /><BackBtn label={'Back to List'} /> <br /><br />
    </div>
  )
}

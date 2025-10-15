import React from 'react'
import { Link } from 'react-router-dom'
import Realtime from './Realtime'
import StudentList from './StudentList'
import Timer from './Timer'
import TodoList from './TodoList'
import TypingSpeedTester from './TypingSpeedTester'

// keep components array here and export it
export const components = [
  { id: 1, name: "realtime", component: Realtime },
  { id: 2, name: "student-list", component: StudentList },
  { id: 3, name: "timer", component: Timer },
  { id: 4, name: "todo-list", component: TodoList },
  { id: 5, name: "typing-speed-tester", component: TypingSpeedTester },
];

export default function Tasks() {
  return (
    <div>
      <h2>Tasks</h2>
      <ol>
        {components.map((component) => (
          <>
          <li key={component.id}>
            <span style={{ textTransform: 'capitalize' }}>{component.name}  </span>
            <Link to={`/tasks/view/${component.name}`}>
              <button type="button">View</button>
            </Link>
          </li><br />
          </>
        ))}
      </ol>
    </div>
  )
}

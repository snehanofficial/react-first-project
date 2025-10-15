import Home from './Home'
import About from './About'
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import LandingPage from './LandingPage';
import Realtime from './Realtime';
import TodoList from './TodoList';
import Timer from './Timer';
import StudentList from './StudentList';
import StudentProfile from './StudentProfile';

export default function App() {
  return (
    <>
    <Routes>
        <Route path='/' element = {<LandingPage /> } >
          <Route path='/home' element = {<Home /> } />
          <Route path='/about' element = {<About /> } />
          <Route path='/contact' element = {<Contact /> } />
          <Route path='/realtime' element = {<Realtime /> } />
          <Route path='/todos' element = {<TodoList /> } />
          <Route path='/timer' element = {<Timer /> } />
          <Route path='/students-list' element = {<StudentList /> } />
          <Route path='/student/profile/' element = {<StudentProfile /> } />
        </Route>
      </Routes>
    </>
    
  )
}

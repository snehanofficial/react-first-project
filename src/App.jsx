import Home from './Home'
import About from './About'
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import LandingPage from './LandingPage';
import Tasks, { components as taskComponents } from './Tasks';
import ViewTask from './ViewTask';
import StudentProfile from './StudentProfile';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='/student/profile/' element = {<StudentProfile /> } />

          {/* tasks routes */}
          <Route path='tasks' element={<Tasks />} />
          <Route path='tasks/view/:task' element={<ViewTask components={taskComponents} />} />
          <Route path='tasks/view/:task/:id' element={<ViewTask components={taskComponents} />} />
        </Route>
      </Routes>
    </>
  )
}

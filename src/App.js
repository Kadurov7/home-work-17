import './App.css';
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import Courses from './pages/Courses';
import Rating from './pages/Rating';
import Students from './pages/Students';
import Materials from './pages/Materials';
import StudentDetails from './details/StudentDetails';
import Late from './pages/Late';
import Waiting from './pages/Waiting';
import Submitted from './pages/Submitted';
import Anouncoments from './pages/Anouncoments';
import Schedule from './pages/Schedule';
import Notification from './pages/Notification';
import MaterialDetails from './details/MaterialDetails';

const MATERIALS = [
  {
      id:1,
      title:"Material 1"
  },
  {
      id:2,
      title:"Material 2"
  }
]; 

const STUDENTS = [
  {
      id:1,
      title:"Student 1"
  },
  {
      id:2,
      title:"student 2"
  }
];


function App() {
  return (
    <div className="App">
     <NavBar/>

     <Routes>
          <Route path='/courses/' element={<Courses/>}>
              <Route path='materials/' element={<Materials materials={MATERIALS}/>}/>

              <Route path='materials/:id/details/' element={<MaterialDetails materials={MATERIALS}/>}>

                <Route path='submited' element={<Submitted/>}/>
                <Route path='waiting' element={<Waiting/>}/>
                <Route path='late' element={<Late/>}/>

              </Route>

              <Route path='students' element={<Students students={STUDENTS}/>}/>
              <Route path='students/:id/details/' element={<StudentDetails students={STUDENTS}/>}/>
              <Route path='rating' element={<Rating/>}/>
          </Route>  

          <Route path='/anouncements' element={<Anouncoments/>}/>
          <Route path='/notifications' element={<Notification/>}/>
          <Route path='/schedule' element={<Schedule/>}/>
          
     </Routes>
    </div>
  );
}

export default App;

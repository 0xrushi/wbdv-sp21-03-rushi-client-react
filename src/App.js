import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './components/main-navbar';


function App() {
  return (
    <BrowserRouter>
    <MainNavbar/>
      <div className="container-fluid container-fluid2 h-100">
          <CourseManager/>
      </div>
    </BrowserRouter>
  );
}

export default App;

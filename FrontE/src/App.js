import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router,Switch,  Routes, Route, Link } from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Alert from './components/Alert';
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {useState} from 'react';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  return (
    <div>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
            <Route path="/" element={<Home showAlert={showAlert}/>} />
              <Route path="About" element={<About />} />
              <Route path="login" element={<Login showAlert={showAlert} />} />
              <Route path="signup" element={<Signup showAlert={showAlert}/>} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
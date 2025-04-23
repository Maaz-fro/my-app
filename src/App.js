import { useState } from 'react';
import './App.css';
import Navbar from './componments/navbar';
import TForm from './componments/TForm';
import Alert from './componments/Alert';
import About from './componments/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const removebodycolor = ()=>{
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
  }

  const toggleMode = (cls) => {
    removebodycolor();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      //document.title = 'TextUtily - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtily is an amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtily Now';
      // }, 1500);
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      //document.title = "TextUtily - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about"  mode={mode} element={<About />} />
            <Route exact path="/" element={<TForm showAlert={showAlert} heading="React App - word counter | lower | upper" mode={mode} />} />
            {/* <TForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

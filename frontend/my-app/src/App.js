// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
import LoginForm from './components/login/LoginForm';
import RegistrationForm from './components/register/RegistrationForm';
import Similar from './components/Home/Similar';




function App() {
  return (
    <div className="App">
     <Router>
      
      <Routes>
      {/* <RegistrationForm /> */}
      <Route path="/" element={<LoginForm/>} />
      <Route path="/registerpage" element={< RegistrationForm/>} />
      <Route path="/homepage" element={< Similar/>} />
      
      {/* <LoginForm/> */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;

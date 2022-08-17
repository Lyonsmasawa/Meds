import {Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Caregivers from './components/Caregivers';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Recruiters from './components/Recruiters';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        < Header />
        <Routes>
          <Route path="/SignUp" element={ <SignUp /> }></Route>
          <Route path="/login" element={ <Login /> }></Route>
          <Route path='/recruiters' element={ <Recruiters /> }></Route>
          <Route path='/caregivers' element={ <Caregivers /> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

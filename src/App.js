import {Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Caregivers from './components/Caregivers';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Recruiters from './components/Recruiters';
import SignUp from './components/SignUp';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className="App">
      <Router>
        < Header />
        <Routes>
          <Route path="/signup" element={ <SignUp /> }></Route>
          <Route path="/login" element={ <Login /> }></Route>
          <Route path='/signupform' element={ <SignUpForm />}></Route>
          <Route path='/' element={<Home /> }></Route>
          <Route path='/recruiters' element={ <Recruiters /> }></Route>
          <Route path='/caregivers' element={ <Caregivers /> }></Route>
          <Route path="*">Oops! page not found.</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import {Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Caregivers from './components/Caregivers';
import Header from './components/Header';
import Home from './components/Home';
import Recruiters from './components/Recruiters';

function App() {
  return (
    <div className="App">
      <Router>
        < Header />
        <Routes>
          <Route path="/" element={ <Home /> }></Route>
          <Route path='/recruiters' element={ <Recruiters /> }></Route>
          <Route path='/caregivers' element={ <Caregivers /> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

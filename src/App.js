import {Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        < Header />
        <Routes>
          <Route path="/" element={ <Home /> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

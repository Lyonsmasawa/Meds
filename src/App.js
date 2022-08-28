import {Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Caregivers from './components/Caregivers';
import Home from './components/Home';
import Login from './components/Login';
import Recruiters from './components/Recruiters';
import SignUp from './components/SignUp';
import SignUpForm from './components/SignUpForm';
import Layout from './components/Layout';
import Careers from './components/Careers';
import RequireAuth from './components/RequireAuth';
import Jobs from './components/Jobs';

const ROLES = {
  'caregiver': "CAREGIVER",
  'provider': 'PROVIDER',
  'admin': 'ADMIN'
}

function App() {
  return (
        <Routes>
          <Route path="/" element={<Layout/> }>
            <Route path='/' element={<Home /> }></Route>
            <Route path="/signup" element={ <SignUp /> }></Route>
            <Route path="/login" element={ <Login /> }></Route>
            <Route path='/signupform' element={ <SignUpForm />}></Route>

            <Route path='/recruiters' element={ <Recruiters /> }></Route>
            <Route path='/caregivers' element={ <Caregivers /> }></Route>

            <Route element={ <RequireAuth  /> }>
              <Route path='/careers' element={ <Careers /> } />
            </Route>
            {/* allowedRoles={[ROLES.caregiver]} */}
            <Route element={ <RequireAuth /> }>
              <Route path='/jobs' element={ <Jobs /> } />
            </Route>

            <Route path="/unauthorized">Unauthorized to be here</Route>

            <Route path="*">Oops! page not found.</Route>
          </Route>
        </Routes>
  );
}

export default App;

import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import { Link, useNavigate } from "react-router-dom"
import './login.css'

const USER_REGEX = /^[a-zA-Z][a-zA-Z]{1,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/auth/register';

const SignUp = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [fname, setfname] = useState('');
  const [validFname, setValidFname] = useState(false);
  const [fnameFocus, setFnameFocus] = useState(false);

  const [lname, setlname] = useState('');
  const [validLname, setValidLname] = useState(false);
  const [lnameFocus, setLnameFocus] = useState(false);

  const [role, setrole] = useState('');
  const [validRole, setValidRole] = useState(false);
  const [roleFocus, setRoleFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const Login = styled.div`
        position: relative;
        min-height: calc(100vh - 82px);
        /* width: 100% !important; */
        color: #557a95;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        /* overflow-x: hidden; */
        margin-top: 82px; 
    `

  return (
    <Login>
      <div className="container px-4 text-center logins" style={{}}>
        <h1>Create your Account</h1>
        <div className="row gx-5">
          <div className="col">
            <div className="p-3 border ">
            <br />
              <div className="con">
                <div className="icon">
                  <i className="fa fas fa-user" aria-hidden="true"></i>
                </div>
              </div>
              <h3 style={{ fontWeight: "700" }}>Caregiver</h3>
              <br />
              <p>
                Are you looking for your dream job?<br />

                Create a unique career profile with Express Team Care
              </p>

              <button className="btn " id="signb"> <Link to="/signup"> Sign Up as Caregiver </Link></button>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border ">
            <br />
              <div className="con">
                <div className="icon">
                  <i className="fa fas fa-briefcase" aria-hidden="true"></i>
                </div>
              </div>
              <h3 style={{ fontWeight: "700" }}>Recruiter</h3>
              <br />
              <p>
                Are you looking for quality candidates?<br />
                Advertise and search with Express Team Care
              </p>
             
             <button className="btn " id="signb"> <Link to="/signup"> Sign Up as Recruiter</Link></button>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop: "1rem"}}>
        <Footer />
      </div>
    </Login>
  )
}

export default SignUp
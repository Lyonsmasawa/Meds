import React, {useRef, useEffect, useState, useContext} from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import './logins.css'
import AuthContext from '../context/AuthProvider'
import axios from '../api/axios'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useLocation, Link } from 'react-router-dom'

const LOGIN_URL = '/auth/login'
const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state?.from|| "/"
  console.log(from)
  const [option, setOption] = useState(1);
  const emailRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const [pwd, setPwd] = useState('');
  const [pwdFocus, setPwdFocus] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, [])

  useEffect(() => {
    const result = EMAIL_REGEX.test(email)
    setValidEmail(result)
  }, [email])
  
  useEffect(() => {
    setErrMsg('');
  }, [email, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email, pwd);

    try {
      const response = await axios.post(LOGIN_URL,
          JSON.stringify({email: user, password: pwd}),
          {
            headers: { 'Content-Type': 'application/json'},
            withCredentials: true
          }
      );
      console.log(JSON.stringify(response?.data?.user?.firstName))
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.user?.roles[0].name;
      const fname =response?.data?.user?.firstName;
      const lname = response?.data?.user?.lastName; 
      const email = response?.data?.user?.email;
      const createdAt = response?.data?.user?.createdAt;

      setAuth({pwd, accessToken, roles, fname, lname, email, createdAt});
      setEmail('');
      setPwd('');
      setEmail('');
      setEmail('');
      navigate(from, {replace: true})
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No server response');
      } else if (err.response?.status === 400) {
        setErrMsg('missing username or password');
      } else if (err.response?.status === 401) {
        setErrMsg('unauthorized');
      } else {
        setErrMsg('login failed');
      }
      errRef.current.focus();
    }

  }
  const Full = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    min-height: calc(100vh - 82px);
    margin-top: 82px; 
  `
  
  const Login = styled.div`
        /* position: relative; */
        /* min-height: calc(100vh - 82px); */
        background: #557A95;
        /* height: 100vh; */
        /* width: 100% !important; */
        color: #557a95;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow-x: hidden;
        margin-top: 30px; 
        width: 40%;
        border-radius: 1rem;
        border: 4px solid #ff9329;
        margin-left: auto;
        margin-right: auto;
    `

  

  // return (
  //   <Login>
      
  //     {/* <div style={{marginTop: "1rem"}}>
  //       <Footer />
  //     </div> */}
  //   </Login>
  // )
  return (
     <Full>
     <Login>
     <div className="alls">
            <div className="container">
              <br />
              <img src="/images/logo2.png" alt="" style={{opacity: ".9"}}/>
              <hr />
              <ul className="options">
                <li className={option === 1 ? "active" : ""} onClick={() => setOption(1)}>
                  Sign in
                </li>
                <li className={option === 3 ? "active" : ""} onClick={() => setOption(3)}>
                  Forgot
                </li>
              </ul>
            </div>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form className="account-form" onSubmit={handleSubmit} style={{color: "white", textAlign: "left"}}>
              <div
                className={
                  "account-form-fields " +
                  (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot")
                }
                > 

                <label htmlFor="email" style={{color: "white", textAlign: "left"}}>
                    Email:
                    <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                </label>
                <input id="email" name="email" type="email" placeholder="E-mail" required 
                  ref={emailRef}
                  autoComplete='off'
                  onChange={(e) => {setUser(e.target.value)
                    setEmail(e.target.value)
                  }}
                  value={email}
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="enote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                />
                <p id="enote" className={emailFocus && !validEmail ? "instructions" : "offscreen"}>
                      <FontAwesomeIcon icon={faInfoCircle} />
                       format: "abc@xyz.com"
                </p>

                <label htmlFor="password" style={option === 3 ? {display : "none"} : {display : "initial"}}>
                    Password:
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  style={option === 3 ? {display : "none"} : {display : "initial"}}
                />

              </div>
              <button className="btn-submit-form" type="submit">
                {option === 1 ? "Sign in" : option === 2 ? "Sign up" : "Reset password"}
              </button>
            </form>
          </div>
     </Login>
     <Footer />
   </Full>
	);
}

export default Login

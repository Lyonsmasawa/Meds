import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './logins.css'

const NAME_REGEX = /^[a-zA-Z][a-zA-Z]{1,23}$/;
const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/auth/register';

const SignUpForm = () => {
  const [option, setOption] = React.useState(2);
  const fnameRef = useRef();
  const lnameRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [fname, setFname] = useState('');
  const [validFname, setValidFname] = useState(false);
  const [fnameFocus, setFnameFocus] = useState(false);

  const [lname, setLname] = useState('');
  const [validLname, setValidLname] = useState(false);
  const [lnameFocus, setLnameFocus] = useState(false);

  const [role, setRole] = useState('');
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

  useEffect(() => {
    fnameRef.current.focus()
  }, [])

  useEffect(() => {
      const result = NAME_REGEX.test(fname)
      console.log(result)
      console.log(fname)
      setValidFname(result)
  }, [fname])

  useEffect(() => {
    const result = NAME_REGEX.test(lname)
    console.log(result)
    console.log(lname)
    setValidLname(result)
  }, [lname])

  useEffect(() => {
    const result = EMAIL_REGEX.test(email)
    setValidEmail(result)
  }, [email])

  useEffect(() => {
      setValidPwd(PWD_REGEX.test(pwd));
      setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  useEffect(() => {
      setErrMsg('');
  }, [fname, lname, email, pwd, matchPwd])

  const Full = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    min-height: calc(100vh - 82px);
    margin-top: 82px; 
  `
  const SignUpForm = styled.div`
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
        overflow-x: none;
        margin-top: 30px; 
        width: 40%;
        border-radius: 1rem;
        border: 4px solid #ff9329;
        margin-left: auto;
        margin-right: auto;
    `

  

  // return (
  //   <SignUpForm>
      
  //     {/* <div style={{marginTop: "1rem"}}>
  //       <Footer />
  //     </div> */}
  //   </SignUpForm>
  // )
  return (
    <Full>
      <SignUpForm>
          <div className="alls">
            <div className="container">
              <br />
              <img src="/images/logo2.png" alt="" style={{opacity: ".9"}}/>
              <hr />
              <ul className="options">
                <li className={option === 1 ? "active" : ""} onClick={() => setOption(1)}>
                  Sign in
                </li>
                <li className={option === 2 ? "active" : ""} onClick={() => setOption(2)}>
                  Sign up
                </li>
                <li className={option === 3 ? "active" : ""} onClick={() => setOption(3)}>
                  Forgot
                </li>
              </ul>
            </div>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form className="account-form" onSubmit={(evt) => evt.preventDefault()}>
              <div
                className={
                  "account-form-fields " +
                  (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot")
                }
                > 
                <label htmlFor="fname" style={{color: "white", textAlign: "left"}}>
                    First Name:
                    <FontAwesomeIcon icon={faCheck} className={validFname ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validFname || !fname ? "hide" : "invalid"} />
                </label>
                <input style={option === 1 || option === 3 ? {display : "none"} : {display : "initial"}} 
                ref={fnameRef} 
                id="fname" 
                name="fname" 
                type="text" 
                placeholder="First Name"
                autoComplete='off'
                onChange={(e) => setFname(e.target.value)}
                value={fname}
                required
                aria-invalid={validFname ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setFnameFocus(true)}
                onBlur={() => setFnameFocus(false)}
                />
                <p id="uidnote" className={fnameFocus && fname && !validFname ? "instructions" : "offscreen"} style={{textAlign: "left"}}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    3 to 24 characters.<br /><FontAwesomeIcon icon={faInfoCircle} />
                    Use Letters only.<br />
                </p>

                <label htmlFor="fname" style={{color: "white", textAlign: "left"}}>
                    Last Name:
                    <FontAwesomeIcon icon={faCheck} className={validLname ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validLname || !lname ? "hide" : "invalid"} />
                </label>
                <input style={option === 1 || option === 3 ? {display : "none"} : {display : "initial"}}
                ref={lnameRef} 
                id="lname" 
                name="lname" 
                type="text" 
                placeholder="Last Name" 
                autoComplete='off'
                onChange={(e) => setLname(e.target.value)}
                value={lname}
                required 
                aria-invalid={validLname ? "false" : "true"}
                aria-describedby="lnote"
                onFocus={() => setLnameFocus(true)}
                onBlur={() => setLnameFocus(false)}
                />
                <p id="lnote" className={lnameFocus && lname && !validLname ? "instructions" : "offscreen"} style={{textAlign: "left"}}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    3 to 24 characters.<br /><FontAwesomeIcon icon={faInfoCircle} />
                    Use Letters only.<br />
                </p>

                <input id="email" name="email" type="email" placeholder="E-mail" required 
                
                />

                <input style={option === 1 || option === 3 ? {display : "none"} : {display : "initial"}} 
                  id="role" 
                  name="role" 
                  type="text" 
                  placeholder="CAREGIVER or PROVIDER" 
                  
                  required

                />


                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required={option === 1 || option === 2 ? true : false}
                  disabled={option === 3 ? true : false}
                  style={option === 3 ? {display : "none"} : {display : "initial"}}
                />
                <input
                  id="repeat-password"
                  name="repeat-password"
                  type="password"
                  placeholder="Repeat password"
                  required={option === 2 ? true : false}
                  disabled={option === 1 || option === 3 ? true : false}
                  style={option === 1 || option === 3 ? {display : "none"} : {display : "initial"}}
                />
              </div>
              <button className="btn-submit-form" type="submit">
                {option === 1 ? "Sign in" : option === 2 ? "Sign up" : "Reset password"}
              </button>
            </form>
          </div>
      </SignUpForm>
      <Footer />
    </Full>
	);
}

export default SignUpForm
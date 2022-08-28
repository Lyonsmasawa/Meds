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
            <form className="account-form" onSubmit={(evt) => evt.preventDefault()} style={{color: "white", textAlign: "left"}}>
              <div
                className={
                  "account-form-fields " +
                  (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot")
                }
                > 
                <label htmlFor="firstname" style={option === 1 || option === 3 ? {display : "none"} : {color: "white", textAlign: "left"}}>
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

                <label htmlFor="lastname" style={option === 1 || option === 3 ? {display : "none"} : {color: "white", textAlign: "left"}}>
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
                <p id="lnote" className={lnameFocus && lname && !validLname ? "instructions" : "offscreen"} style={option === 1 || option === 3 ? {display : "none"} : { textAlign: "left"}}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    3 to 24 characters.<br /><FontAwesomeIcon icon={faInfoCircle} />
                    Use Letters only.<br />
                </p>

                <label htmlFor="email" style={{color: "white", textAlign: "left"}}>
                    Email:
                    <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                </label>
                <input id="email" name="email" type="email" placeholder="E-mail" required 
                  autoComplete='off'
                  onChange={(e) => setEmail(e.target.value)}
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

                <label htmlFor="role" style={option === 1 || option === 3 ? {display : "none"} : {color: "white", textAlign: "left"}}>
                    Role:
                </label>
                <input style={option === 1 || option === 3 ? {display : "none"} : {display : "initial"}} 
                  id="role" 
                  name="role" 
                  type="text" 
                  placeholder="CAREGIVER or PROVIDER" 
                  
                  required

                />

                <label htmlFor="password" style={option === 3 ? {display : "none"} : {display : "initial"}}>
                    Password:
                    <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  style={option === 3 ? {display : "none"} : {display : "initial"}}
                />

                  <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                      <FontAwesomeIcon icon={faInfoCircle} />
                      8 to 24 characters.<br /><FontAwesomeIcon icon={faInfoCircle} />
                      Must include uppercase and lowercase letters, a number and a special character.<br />
                      <FontAwesomeIcon icon={faInfoCircle} />Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                  </p>
                  <label htmlFor="confirm_pwd" style={option === 1 || option === 3 ? {display : "none"} : {color: "white", textAlign: "left"}}>
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input style={option === 1 || option === 3 ? {display : "none"} : {color: "white", textAlign: "left"}}
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>
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
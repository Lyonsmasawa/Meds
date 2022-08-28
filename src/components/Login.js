import React, {useRef, useEffect, useState, useContext} from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import './logins.css'
import AuthContext from '../context/AuthProvider'
import axios from '../api/axios'

const LOGIN_URL = '/auth/login'


const Login = () => {
  const effectRan = useRef(false)
  const { setAuth } = useContext(AuthContext);
  const [option, setOption] = useState(1);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if(effectRan.current === false){
      userRef.current.focus();
    }

    return () => {
      console.log("122")
      effectRan.current = true;
    }
  }, [])
  
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(user, pwd);

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
      const fname = response?.data?.user?.firstName;
      const lname = response?.data?.user?.lastName;
      const email = response?.data?.user?.email;
      const createdAt = response?.data?.user?.createdAt;

      setAuth({user, pwd, accessToken, roles, fname, lname, email, createdAt})
       
      setUser('');
      setPwd('');
      setSuccess(true);
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
   <>
   {success ? (
      <p style={{marginTop: "100px", color:"red"}}> logged in </p>
   ) : (
     <Full>
     <Login>
         <div className="alls">
           <div className="container">
             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive"></p>
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
   
           <form className="account-form" onSubmit={handleSubmit}>
             <div
               className={
                 "account-form-fields " +
                 (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot")
               }
             >
              
               <input 
               id="email" 
               name="email" 
               type="email" 
               placeholder="E-mail" 
               ref={userRef} 
               autoComplete='off'
               value={user}
               onChange={(e) => setUser(e.target.value)}
               required 
               />
               
               <input
                 id="password"
                 name="password"
                 type="password"
                 placeholder="Password"
                 required={option === 1 || option === 2 ? true : false}
                 disabled={option === 3 ? true : false}
                 onChange={(e) => setPwd(e.target.value)}
                 value={pwd}
               />
               <input
                 id="repeat-password"
                 name="repeat-password"
                 type="password"
                 placeholder="Repeat password"
                 required={option === 2 ? true : false}
                 disabled={option === 1 || option === 3 ? true : false}
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
   )
   }
   </>
	);
}

export default Login
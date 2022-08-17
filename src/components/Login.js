import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import './logins.css'

const Login = () => {
  const [option, setOption] = React.useState(1);

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
    
            <form className="account-form" onSubmit={(evt) => evt.preventDefault()}>
              <div
                className={
                  "account-form-fields " +
                  (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot")
                }
              >
                <input id="email" name="email" type="email" placeholder="E-mail" required />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required={option === 1 || option === 2 ? true : false}
                  disabled={option === 3 ? true : false}
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
	);
}

export default Login
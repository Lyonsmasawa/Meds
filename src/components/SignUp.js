import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import './login.css'

const SignUp = () => {
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
      <div class="container px-4 text-center logins" style={{}}>
        <h1>Create your Account</h1>
        <div class="row gx-5">
          <div class="col">
            <div class="p-3 border ">
            <br />
              <div class="con">
                <div class="icon">
                  <i class="fa fas fa-user" aria-hidden="true"></i>
                </div>
              </div>
              <h3 style={{ fontWeight: "700" }}>Caregiver</h3>
              <br />
              <p>
                Are you looking for your dream job?<br />

                Create a unique career profile with Express Team Care
              </p>

              <button class="btn " id="signb">Sign Up as Caregiver</button>
            </div>
          </div>
          <div class="col">
            <div class="p-3 border ">
            <br />
              <div class="con">
                <div class="icon">
                  <i class="fa fas fa-briefcase" aria-hidden="true"></i>
                </div>
              </div>
              <h3 style={{ fontWeight: "700" }}>Recruiter</h3>
              <br />
              <p>
                Are you looking for quality candidates?<br />
                Advertise and search with Express Team Care
              </p>

              <button class="btn " id="signb">Sign Up as Recruiter</button>
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
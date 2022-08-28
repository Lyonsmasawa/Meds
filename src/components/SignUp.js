import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import { Link, useNavigate } from "react-router-dom"
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
      <div className="container px-4 text-center logins" style={{}}>
        <h1>Create your Account</h1>
        <div className="row gx-5">
          <div className="col">
            <div className="p-3 border ">
            <br />
              <div className="con">
                <div className="icon">
                  <i className="fa fas fa-email" aria-hidden="true"></i>
                </div>
              </div>
              <h3 style={{ fontWeight: "700" }}>Caregiver</h3>
              <br />
              <p>
                Are you looking for your dream job?<br />

                Create a unique career profile with Express Team Care
              </p>

              <button className="btn " id="signb"> <Link to="/signupform"> Sign Up as Caregiver </Link></button>
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
             
             <button className="btn " id="signb"> <Link to="/signupform"> Sign Up as Recruiter</Link></button>
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
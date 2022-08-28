import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from "react-router-dom"
import Footer from './Footer'

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 84px);
    overflow-x: hidden;  
    display: flex;
    gap: 1rem; 
    flex-direction: column;
    justify-content: baseline;
    top: 90px;
    text-align: left;
    /* padding: 0 calc(1vw + 2px); */

    &:after {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        inset: 0;
        // top: 0;
        // left: 0;
        // right: 0;
        // bottom: 0;
        position: absolute;
        z-index: -1;
        opacity: 1;
    }
`

const Recruiters = () => {
  return (
    <Container>
    <div className="container ">
        <div className="row align-items-start" style={{ color: "#557A95" }}>
            <div className="col-md-6">
            <p className="jobseekers">
            <h3>ARE YOU A COMPETENT  CAREGIVER<br/>LOOKING FOR A JOB?</h3><br/>
            <p>The skills of a caregiver are necessary
                for a patient to recieve best care possible.
                We connect you with the  multiple caregiving 
                agencies offering several job recruitment opportunities. </p>
                <br/>
                
                <p>Create a unique career profile to boost your job recruitment 
                    opportunities.Sign in your credentials to back up your skillls & 
                    expertise to get started.</p>
                <div className="row align-items-center" style={{paddingTop:"20px"}}>
                
                    <div className="col">
                        <button type="button" style={{backgroundColor:"#ff9329", fontWeight:"bold", color:"white", fontSize: "16px"}} className="btn pri1" routerLink="/jobseeker/register">Sign up now</button>
                    </div>
                
                </div>
            </p>
            </div>
       
   
 
        <div className="col-md-6">
            <div className="row row-cols-2 container-fluid">
                <div className="col one container-fluid"><img src="/images/care4-removebg-preview.png" className="img-fluid" alt="" style={{visibility: "hidden"}} /></div>
                <div className="col two container-fluid"><img src="/images/logo3.png" className="img-fluid" alt="" /></div>
                <div className="col two container-fluid"><img src="/images/caree1-removebg-preview.png" className="img-fluid" alt="" /></div>
                <div className="col one container-fluid"><img src="/images/care4-removebg-preview.png" className="img-fluid" alt="" /></div>
            </div>
        </div>
    </div>
    </div>
    <Footer />
    </Container>
  )
}
export default Recruiters
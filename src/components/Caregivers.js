import React from 'react'
import styled from 'styled-components'
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
    <div class="container ">
        <div class="row align-items-start" style={{ color: "#557A95" }}>
            <div class="col-md-6">
            <p class="jobseekers">
            <h3>ARE YOU A COMPETENT  CAREGIVER<br/>LOOKING FOR A JOB?</h3><br/>
            <p>The skills of a caregiver are necessary
                for a patient to recieve best care possible.
                We connect you with the  multiple caregiving 
                agencies offering several job recruitment opportunities. </p>
                <br/>
                
                <p>Create a unique career profile to boost your job recruitment 
                    opportunities.Sign in your credentials to back up your skillls & 
                    expertise to get started.</p>
                <div class="row align-items-center" style={{paddingTop:"20px"}}>
                
                    <div class="col">
                        <button type="button" style={{backgroundColor:"#ff9329", fontWeight:"bold", color:"white", fontSize: "16px"}} class="btn pri1" routerLink="/jobseeker/register">Sign up now</button>
                    </div>
                
                </div>
            </p>
            </div>
       
   
 
        <div class="col-md-6">
            <div class="row row-cols-2 container-fluid">
            <div class="col one container-fluid"><img src="/images/caree1-removebg-preview.png" class="img-fluid" alt="" /></div>
            <div class="col two container-fluid"><img src="/images/care2-removebg-preview.png" class="img-fluid" alt=""/></div>
            <div class="col two container-fluid"><img src="/images/care-removebg-preview.png" class="img-fluid" alt=""/></div>
            <div class="col one container-fluid"><img src="/images/care4-removebg-preview.png" class="img-fluid" alt=""/></div>
            </div>
        </div>
    </div>
    </div>
    <Footer />
    </Container>
  )
}
export default Recruiters
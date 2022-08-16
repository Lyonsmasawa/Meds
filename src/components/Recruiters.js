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
            <div class="row row-cols-2 container-fluid">
                <div class="col one container-fluid"><img src="/images/care4-removebg-preview.png" class="img-fluid" alt="" style={{visibility: "hidden"}} /></div>
                <div class="col two container-fluid"><img src="/images/logo3.png" class="img-fluid" alt="" /></div>
                <div class="col two container-fluid"><img src="/images/caree1-removebg-preview.png" class="img-fluid" alt="" /></div>
                <div class="col one container-fluid"><img src="/images/care4-removebg-preview.png" class="img-fluid" alt="" /></div>
            </div>
            </div>
            <div class="col-md-6">
            <div class="jobseekers">
                <h3>MAKE A HIRE WE GOT THE REST</h3><br/>
                <p>Looking to recruit a proficient caregiver for open job 
                position in your agency.we connect you with several caregivers from diffrent places.How you go about hiring careproviders will partially depend on 
                what kind of help you need. </p>
                    <br/>
                    
                    <p>Make sure to have credential
                    to verify that you are a certified caregiving agency.
                    Job available and requirements need for one to qualify for hire.</p>
                    <br/>
                    <p>Advertise your job posting for applicants on our page to apply.
                        View applicants & connect with the qualified candidate.</p>
                <div class="row align-items-center" style={{paddingTop: "20px"}}>
                <div class="col">
                    <button type="button" class="btn pri1" routerLink="">Sign up now</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <Footer />
    </Container>
  )
}
export default Recruiters
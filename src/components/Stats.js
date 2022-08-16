import React from 'react'
import styled from 'styled-components'

const Stats = () => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `

    const Stats = styled.div`
        color: #FF9923;
        display: flex;
        padding: 2rem;
        position: relative;
        width:60%;
        align-self: center !important;
        justify-content: space-evenly;
        align-items: center;
        /* background-color: #557A95; */

        &::before {    
            content: "";
            background: url("/images/five.png") center left / contain repeat fixed;  
            background-size: cover;
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            opacity: 0.08;
        }
    `

  return (
    <Container>
        <hr style={{color: "red",}}/>
        <Stats>
            <div className='shadow'>
                <h2><strong>10000+</strong> </h2>
                <p style={{fontSize: "24px", fontWeight: "600", color: "#557A95"}}>jobs</p>
            </div>
            <div className='shadow'>
                <h2><strong>5000+</strong></h2>
                <p style={{fontSize: "24px", fontWeight: "600", color: "#557A95"}}>matches made</p>
            </div>
            <div className='shadow'>
                <h2><strong>10000+</strong></h2>
                <p style={{fontSize: "24px", fontWeight: "600", color: "#557A95"}}>caregivers</p>
            </div>
        </Stats>
    </Container>
  )
}

export default Stats
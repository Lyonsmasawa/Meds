import React from 'react'
import styled from 'styled-components'

const InformationCopy = () => {
    const Info = styled.div`
        display: flex;
        /* flex-direction: column; */
        /* align-items: center; */
        padding-right: 3rem;
        margin-bottom: 1rem;
        justify-content: flex-start;
    `

    const Information = styled.div`
        /* margin-top: 2rem; */
        /* width: 70%; */
        margin-left: 2rem;
        color: black;
        display: flex;
        gap: 1rem;
        text-align: left;
        justify-content: space-between;
        /* background-color: #557A95; */

        ul {
        /* list-style-type: none; */
        padding-left: 20px;
        }

        li {
            position: relative;
            padding-left: 20px;
            margin-bottom: 10px
        }

        li:before {
            position: absolute;
            top: 0;
            left: 0;
            font-family: FontAwesome;
            content: "\f140";
            color: #FF9923;
        }

        img{
            height: 35vh;
            object-fit: cover;
            opacity: 0.9;
        }
    `

  return (
    <Info>
        <Information>
            <div className="whys">
                    <img src="/images/caregivers.png" alt="" />
            </div>
            <div className="why">
            <h4 className="mt-5 mb-2"  style={{color: "#557A95", fontWeight: "bold", fontSize:"30px"}}>Why employers love us</h4><br/>
                <ul>
                    <li> <strong> Browse</strong> through caregivers' profiles based on category and salary expectations</li>
                    <li> Find <strong>qualified</strong> candidates for your company.</li>
                    <li>  <strong> contact</strong> ONLY caregivers who already have what you are looking for instead of going through hundreds of applications;</li>
                </ul>
            </div>
        </Information>
    </Info>
  )
}

export default InformationCopy
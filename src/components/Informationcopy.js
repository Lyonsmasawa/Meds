import React from 'react'
import styled from 'styled-components'

const InformationCopy = () => {
    const Info = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `

    const Information = styled.div`
        margin-top: 2rem;
        color: black;
        display: flex;
        text-align: left;
        width: 80%;
        justify-content: space-between;
        background-color: #557A95;

        ul {
        list-style-type: none;
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
            opacity: 0.6;
        }
    `

  return (
    <Info>
        <Information>
            <div className="whys">
                    <img src="/images/one.jpg" alt="" />
            </div>
            <div className="why">
            <h4>Why employers love us</h4><br/>
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
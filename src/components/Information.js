import React from 'react'
import styled from 'styled-components'

const Information = () => {
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
        width: 99%;
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
            <div className="why">
                <h4>Why caregivers love us</h4><br />
                    <ul>
                        <li> We help caregivers<strong> grow </strong>their careers & showcase their skills & qualifications to <strong> potential employers.</strong> </li>
                        <li> Say goodbye to cover letters - your profile is all you need. Your next job is<strong> one click </strong>away</li>
                        <li> Find a job that is <strong>consistent, rewarding and reflective</strong>  of your skill set</li>
                        <li> Open up a whole new world of <strong>opportunity</strong> and possibilities </li>
                    </ul>
            </div>
            <div className="whys">
                    <img src="/images/one.jpg" alt="" />
            </div>
        </Information>
    </Info>
  )
}

export default Information
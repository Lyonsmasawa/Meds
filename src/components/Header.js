import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { AcUnit, HomeOutlined, Search, GroupAdd, WorkOutline } from '@material-ui/icons/';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { keyframes } from "styled-components";
import logo from './logo3.png'

const Nav = styled.nav`
    position: fixed;
    background-color: #557A95;
    color: #FF9923;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 70px;
    top: 0;
    left: 0;
    right: 0;
    padding: 8px 36px;
    letter-spacing: 16px;
    z-index: 1001;
    box-shadow: 0px 2px 8px #557A95;
`

const Logo = styled.a`
    padding: 0;
    width: 120px;
    margin-top: 4px;
    max-height: 60px;
    font-size: 0;
    display: inline-block;
    color: #FF9923;

    img { 
        display: block;
        width: 100%;
    }
` 
  
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row no-wrap;
    justify-content: flex-end;
    height: 100%;
    margin: 0;
    position: relative;
    padding: 0px;
    margin-right: auto;    
    margin-left: auto;

    @media(max-width: 768px){
        display: none;
    }
`
const Span = styled.span`
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1.8px;
    padding: 2px 5px;
    color: #FF9923;
    text-decoration: none;
    white-space: nowrap;
    position: relative; 
    
    &:before {
        content: "";
        background-color: #FF9923;
        bottom: -3px;
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
    }

    &:hover {
        :before {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }
`

const MenuLinks = {
    display: "flex", 
    textDecoration: "none",
    alignItems: "center",
    padding: "0 12px",
}

const  MenuIcon ={
    maxWidth: "30px",
    maxHeight: "30px",
    zIndex: "auto",
    color: "#FF9923",
}

const Login = styled.a`
    padding: 5px 11px;
    text-transform: uppercase;
    border: 1px solid #ff9923;
    border-radius: 2px 0px 0px 2px;
    border-right: 0px;
    letter-spacing: 1.5px;
    transition: all 0.2s ease 0s;
    color: #FF9923;
    font-weight: bold;

    &:hover{
        background-color: #fff;
        color: black;
    }
`

// Create the keyframes
const rotate = keyframes `
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 3s linear infinite;
  padding: 0 1.4rem;
  font-weight: bold;
  color: #FF9923;
  font-size: 2rem;
`;

const UserImage = styled.img`
  height: 100%;
`

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0;
    padding: 10px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 3px;
    width: max-content;
    background-color:  black;
    border-radius: 4px;
    box-shadow: 0px 2px 8px  #0063e5;
    opacity: 0;
`
const SignUp = styled(Login)`
    text-transform: uppercase;
    border: 1px solid #ff9923;
    border-radius: 0px 2px 2px 0px;
    letter-spacing: 1.5px;
    transition: all 0.2s ease 0s;
    color: #FF9923;
    font-weight: bold;

    &:hover{
        background-color: #fff;
        color: black;
    }
`

const SignOut = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  cursor: pointer;

  ${UserImage} {
      border-radius: 50%;
      min-width: 100%;
      min-height: 100%;
      border: 2px solid #0063e5;
  }

  &:hover{
      ${DropDown} {
          opacity: 1;
          transition: 1s;
      }
  }
`

 const Header = () => {
   return (
     <Nav>
        <Logo>
            <Link to="/"><img src={logo} alt="ExpressCare" /></Link>
        </Logo>
        <NavMenu>
            <Rotate><AcUnit /></Rotate>
            <Link to="/caregivers" style={MenuLinks}><SupervisedUserCircleIcon style={MenuIcon} /><Span>Caregivers</Span></Link>
            <Link to="/recruiters" style={MenuLinks}><GroupAdd style={MenuIcon} /><Span>Recruiters</Span></Link>
            <Link to="/" style={MenuLinks}><WorkOutline style={MenuIcon} /><Span>Careers</Span></Link>
            <Rotate><AcUnit /></Rotate>
        </NavMenu>
        <>
            <Link to="/login"><Login>Log in</Login></Link>
            <Link to="/signup"><SignUp>SignUp</SignUp></Link>
        </>
                {/* <SignOut>
                    {/* <UserImage src={Avatar} alt="" />
                    <DropDown>
                        <span>Sign out</span>
                    </DropDown>
                </SignOut> */}
    </Nav>
   )
 }
 
 export default Header
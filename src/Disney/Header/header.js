import React, {useState} from "react";
import styled from "styled-components";
import {AiFillStar, AiOutlineSearch, AiOutlinePlus} from "react-icons/ai"
import {FcFilmReel} from "react-icons/fc"
import {BiTv} from "react-icons/bi";
import logo from "../Assets/Images/logo.svg"
import {FaBars, FaTimes} from "react-icons/fa"


const Header = () => {

    const [toggle, setToggle] = useState(false)

     const handleToggle = () =>{
        setToggle(!toggle)
     }


     return(
        <Container>
            <Wrapper>
                <Logo src={logo} alt="logo"/>
                <NavWrap toggle={toggle}>
                    <NavHold>
                        <Nav>Home</Nav>
                    </NavHold>
                    <NavHold>
                        <Icons>
                           <AiOutlineSearch/>
                        </Icons>
                        <Nav>Search</Nav>
                    </NavHold>
                    <NavHold>
                        <Icons>
                           <AiOutlinePlus />
                        </Icons>
                        <Nav>Watchlist</Nav>
                    </NavHold>
                    <NavHold>
                        <Icons>
                           <AiFillStar/>
                        </Icons>
                        <Nav>Original</Nav>
                    </NavHold>
                    <NavHold>
                        <Icons>
                           <FcFilmReel/>
                        </Icons>
                        <Nav>Movies</Nav>
                    </NavHold>
                    <NavHold>
                        <Icons>
                           <BiTv/>
                        </Icons>
                        <Nav>Series</Nav>
                    </NavHold>
                </NavWrap>
                <BurgerHold onClick={handleToggle}>
                     { toggle ? <FaTimes/> : <FaBars/>}
                </BurgerHold>
            </Wrapper>
        </Container>
    )

    }
  
export default Header;

const Container = styled.div`
   height: 10vh;
   width: 100%;
   background-color: black;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 500;
`;

const Wrapper = styled.div`
   height: 100%;
   width: 90%;
   /* background-color: bisque; */
   display:flex;
   justify-content: space-between;
   align-items: center
`;
const Logo = styled.img`
   height: 100%;
   width: 10%;
   /* background-color: powderblue; */
   z-index: 500;
  ;
`;
const NavWrap = styled.div`
   height: 100%;
   width:60%;
   /* background-color: goldenrod; */
   display: flex;
   justify-content: space-between;
   align-items: center;

   @media screen and (max-width: 768px){
      flex-direction: column;
      width: 100%;
      position: absolute;
      background-color: transparent;
      height: 50vh;
      transition:all ease 1s;
      justify-content: space-evenly;
      left: ${({toggle}) => (toggle? 0 : "-100%")};
      margin-top: 350px;
      z-index: 500;
      transform: scale(1.02);
   }
`;
const NavHold = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    /* background-color:chartreuse; */
   
    :hover{
        text-decoration: underline white;
        transition: all 400ms;
    }

`;
const Nav = styled.div`
    color:white;
    font-weight:600;
    font-size:18px;
    cursor: pointer;

    :hover{
        transform: scale(1.05);
    }
`;
const Icons = styled.div`
color:white;
font-size: 20px;
`;
const BurgerHold = styled.div`
   /* height: 100%;
   width: 5%; */
   background-color: beige;
   display: none;
   z-index: 1;

   @media screen and (max-width: 768px){
      display: flex;
      /* color:white; */
   }
`;
import React from "react";
import styled from "styled-components";
// import {BsPlayFill} from "react-icons/bs";

const Detail = () => {
    return (
        <Container>
            <Left>
                <Logo>
                    <img src="/Disney logo.png" alt="logo"/>
                </Logo>
                <IconsWrap>
                <Playwrap> 
                   <img src="/play-icon-black.png" alt="playlogo"/> 
                   {/* <BsPlayFill/> */}
                   <Text>play</Text>
                </Playwrap>
                <Trailerwrap> 
                   <img src="/play-icon-white.png" alt="playlogo"/> 
                   <Text>Trailer</Text>
                </Trailerwrap>
                <Plus>  
                   <Text>+</Text>
                </Plus>
                <Group> 
                   <img src="/group-icon.png" alt="groupicon"/> 
                </Group>
                </IconsWrap>
                <H4>2018 . 1h 58m .science fiction,family,Animation,Action-adventure</H4>
                <H4> While Helen is called on to lead a campaign to bring back the supers, Bob navigates the day-
                    to-day heroics of "normal" life at home with Violet, Dash and jack-jack, whose super powers
                    are about to be discovered. Their mission is derailed, however, when a new villain emerges
                    with a brilliant and dangerous plot that threatens everything. But with Frozone by their side,
                    the parrs can take on anything.
                </H4>
            </Left>
        </Container>
    )
}

export default Detail;

const Container = styled.div`
height: 100vh;
width: 100%;
background-color: black;
display: flex;
justify-content: flex-start;
background-image: url(/BG.jpg);

@media screen and (max-width: 768px){
    height: 100%;
    width: 100%;
    background-image: url(BG.jpg);
 }
`;

const Left = styled.div`
height: 100%;
width: 50%;
// background-color: hotpink;
margin-left: 40px;
margin-top: 30px;

@media screen and (max-width: 768px){
    // height: 200px;
    width: 100%;
    padding: 10px;
    
 }
`;

const Logo = styled.div`
height: 25%;
width: 60%;
background-color: transparent;

img{
    height: 100%;
    width: 100%;
}
`;

const IconsWrap = styled.div`
height: 55px;
width: 70%;
// background-color: goldenrod; 
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;

@media screen and (max-width: 768px){
    height: 300px;
    width: 100%;
    // background-color: salmon;
    display: flex;
    flex-direction: column;
 }
`;

const Playwrap = styled.button`
height: 50px;
width: 130px;
background-color: white;
display: flex;
justify-content: space-around;
align-items: center;
border-radius: 0.5rem;
border: none;
cursor: pointer;
:hover{
    border: 1px solid white;
    transform: scale(1.04);
    transition: all ease-in-out 400ms;
    background-color: transparent;
    color: white;
    cursor: pointer;
}
`;

const Text = styled.div`
font-size: 20px;
font-weight: bold;
`;

const Trailerwrap = styled.button`
height: 50px;
width: 130px;
background-color: transparent;
display: flex;
justify-content: space-around;
align-items: center;
border-radius: 0.5rem;
border: 3px solid white;
color: white;
cursor: pointer;
:hover{
    border: 2px solid white;
    transform: scale(1.04);
    transition: all ease-in-out 400ms;
    background-color: transparent;
    cursor: pointer;
}
`;

const Plus = styled.div`
height: 50px;
width: 50px;
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5rem;
border: 3px solid white;
font-size: 30px;
font-weight: 15px;
color: white;
cursor: pointer;
:hover{
    border: 2px solid white;
    transform: scale(1.04);
    transition: all ease-in-out 400ms;
    background-color: transparent;
    cursor: pointer;
}
`;

const Group = styled.div`
height: 50px;
width: 50px;
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5rem;
border: 3px solid white;
cursor: pointer;
:hover{
    border: 2px solid white;
    transform: scale(1.04);
    transition: all ease-in-out 400ms;
    background-color: transparent;
    cursor: pointer;
}
`;

const H4 = styled.h4`
font-size: 20px;
font-weight: bold;
color: white;

@media screen and (max-width: 768px){
   font-size: 15px;
 }
`;

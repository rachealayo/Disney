import React from "react"
import styled from "styled-components"
import pic from "../Assets/Images/disney.png"
import pixar from "../Assets/Images/pixar.png"
import marvel from "../Assets/Images/marvel.png"
import starwars from "../Assets/Images/starwars.png"
import natgeo from "../Assets/Images/national.png"

import disney from "../Assets/videos/disney.mp4"
import pixarvid from "../Assets/videos/pixar.mp4"
import marvelvid from "../Assets/videos/marvel.mp4"
import star_wars  from "../Assets/videos/star-wars.mp4"
import natgeovid from "../Assets/videos/national-geographic.mp4"

const Viewers = () =>{
    return(
        <Container>
            <Wrapper>
                <Card>
                    <img src={pic} alt ='disneypic'/>
                    <video playsInline={true} autoPlay={true} loop={true}>
                        <source src={disney} type="video/mp4"></source>
                    </video>
                </Card>
                <Card>
                    <img src={pixar} alt ='pixarpic'/>
                    <video playsInline={true} autoPlay={true} loop={true}>
                        <source src={pixarvid} type="video/mp4"></source>
                    </video>
                </Card>
                <Card>
                    <img src={marvel} alt ='marvelpic'/>
                    <video playsInline={true} autoPlay={true} loop={true}>
                        <source src={marvelvid} type="video/mp4"></source>
                    </video>
                </Card> 
                <Card>              
                    <img src={starwars} alt ='starwarspic'/>
                    <video playsInline={true} autoPlay={true} loop={true}>
                        <source src={star_wars} type="video/mp4"></source>
                    </video>
                </Card>
                <Card>                
                    <img src={natgeo} alt ='natgeopic'/>
                    <video playsInline={true} autoPlay={true} loop={true}>
                        <source src={natgeovid} type="video/mp4"></source>
                    </video>
                </Card>
            </Wrapper>
        </Container>
    )
}
export default Viewers;

const Container = styled.div`
   height: 25vh;
   width: 100%;
   background-color: black;
   display: flex;
   justify-content: center;
   align-items: center;
   padding:  40px 0;

   @media Screen and (max-width: 768px){
    height: auto;
   }


`;
const Wrapper = styled.div`
   height: 95%;
   width: 90%;
   display: flex;
   justify-content: space-between;
   align-items: center;

   @media screen and (max-width:768px){
        flex-direction: column;
        width: 95%;
   } 


`;
const Card = styled.div`
   height: 100%;
   width: 20%;
   border:2px solid white;
   border-radius:10px;
   margin: 0 5px;
   position: relative;
   cursor: pointer;

   img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
   }

   video{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    opacity: 0;
    }

   :hover{
    transition: all 1s;
       video{
        opacity:1 ;
       }

    }
   
    @media screen and (max-width: 768px){
        height: 200px;
        width: 100%;
        margin: 10px 0;
    }
`;
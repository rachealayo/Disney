import React from "react";
import styled from "styled-components";
import Viewers from "../Viewers/viewers";
import SliderPage from "../Slider/slider";
// import Json from "../jsondisplay";
import Recommend from "./recommend";
import Detail from "../DetailedPg/detail";

const Home = () =>{
    return(
        <Container>
            <SliderPage/>
             <Viewers/>
            {/* <Json/> */}
            <Recommend/>
            <Detail/>
        </Container>
    )
}
export default Home;

const Container = styled.div`
   height: auto;
   width: 100%;
   background-color: transparent;
`;
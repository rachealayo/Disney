import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../Assets/Images/slider-badag.jpg";
import image2 from "../Assets/Images/slider-scale.jpg";
import image3 from "../Assets/Images/slider-scales.jpg";
import image4 from "../Assets/Images/slider-badging.jpg";

const SliderPg = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };

  return(
    <div>
      <Container>
       <Wrapper>
        <Carousel {...settings}>
          <Wrap>
            <img src={image1} alt="img1"/>
          </Wrap>
          <Wrap>
            <img src={image2} alt="img2"/>
          </Wrap>
          <Wrap>
            <img src={image3} alt="img3"/>
          </Wrap>
          <Wrap>
            <img src={image4} alt="img4"/>
          </Wrap>
        </Carousel>

       </Wrapper>
     </Container>
    </div>
  )
};

export default SliderPg;

const Carousel = styled(Slider)`
overflow: hidden;
width: 95%;
height: 100%;

& > button {
  height: 100%;
  width: 5vw;
  z-index: 1;
}

ui li button {
  &::before {
    font-size: 10px;
    color: rgb(150, 158, 171);
  }
}

li.slick-active button:before {
  color: white;
}
`;

const Container =styled.div`
height: 40vh;
width: 100%;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
`;

const Wrapper =styled.div`
height: 90%;
width: 90%;
// background-color: hotpink;
display: flex;
justify-content: center;
align-items: center;
`;

const Wrap =styled.div`
height: 100%;
width: 100%;
display: block;
position: relative;

img{
  height: 100%;
  width: 100%;
}
`;

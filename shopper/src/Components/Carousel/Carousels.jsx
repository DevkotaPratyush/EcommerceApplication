import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import c1 from './Carousel1.png';
import c2 from './Carousel2.png';
import c3 from './Carousel3.png';
const Carousels = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={c1}
          />
          
        </Carousel.Item>
        <Carousel.Item interval={1500}>
         
          <img
            className="d-block w-100"
            src={c2}
          />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
         
          <img
            className="d-block w-100"
            src={c3}
          />
          </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;

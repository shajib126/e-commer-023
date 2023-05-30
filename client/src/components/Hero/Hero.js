import React from "react";
 import arunima from '../../images/arunima.jpg'
 import arunima2 from '../../images/arunima2.jpg'
 import arunima3 from '../../images/arunima3.jpg'
 import Carousel from 'react-bootstrap/Carousel';

export default function Hero() {
  return (
    <div className="hero">
      <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 h-10"
          src={arunima}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>অরুণিমা</h5>
          <p>প্রকৃত মান ও কাচামালে তৈরী</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-10"
          src={arunima2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>অরুণিমা</h5>
          <p>স্নেহ ও ভালোবাসার স্পর্শে তৈরী।</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-10"
          src={arunima3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>অরুণিমা</h5>
          <p>
            আপনাদের আস্থা
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

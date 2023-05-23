import React from "react";
 import arunima from '../../images/arunima.jpg'
 import arunima2 from '../../images/arunima2.jpg'
 import arunima3 from '../../images/arunima3.jpg'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero_title">
        <h1>অরুণিমা</h1>
        <h4>অরুণিমা'তে স্বাগতম</h4>
      </div>
      <div className="images">
        
        <img src={arunima2} alt="" />
        
      </div>
    </div>
  );
}

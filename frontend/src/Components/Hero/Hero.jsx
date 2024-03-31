import React from "react";
import "./Hero.css"; //import custom style
import hero_image from "../Assets/exclusive_image.png";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
const Hero = () => {
    return (
        <div className="hero">
          <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
              <div className="hero-hand-icon">
                <p>New</p>
                <img src={hand_icon} alt="" />
              </div>
              <p>Collections</p>
              <p>For Everyone</p>
            </div>
            <div className="hero-latest-btn">
              <div>Latest Collections</div>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
          <div className="hero-right">
            <img src={hero_image} alt="hero" />
          </div>
        </div>
      );
    };
    

export default Hero;

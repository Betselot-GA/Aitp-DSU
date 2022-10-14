import { Carousel } from 'antd';
import React from 'react';


const Landing = () => (
  <div>
    <div className="hero-section overlay bg-cover ">
      {/* <Carousel autoplay className="container"> */}

      <div className="hero-slider-item container">
        <div className="row">
          <div className="col-md-8">
            <h1
              className="text-white"
              data-animation-out="fadeOutUp"
              data-delay-out="5"
              data-duration-in=".3"
              data-animation-in="fadeInDown"
              data-delay-in=".1"
            >
              Delta State Information Technology Students of America
            </h1>
            <p
              className="text-muted mb-4"
              data-animation-out="fadeOutUp"
              data-delay-out="5"
              data-duration-in=".3"
              data-animation-in="fadeInDown"
              data-delay-in=".4"
            >
              Your bright future
            </p>
            <a
              href="/contact"
              className="btn btn-primary"
              data-animation-out="fadeOutUp"
              data-delay-out="5"
              data-duration-in=".3"
              data-animation-in="fadeInDown"
              data-delay-in=".7"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
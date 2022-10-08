import { Carousel } from 'antd';
import React from 'react';


const Landing = () => (
  <div>
    <div className="hero-section overlay bg-cover">
      <Carousel
        autoplay
        className="container"
      >
        <div class="hero-slider" >
          <div class="hero-slider-item">
            <div class="row">
              <div class="col-md-8">
                <h1
                  class="text-white"
                  data-animation-out="fadeOutRight"
                  data-delay-out="5"
                  data-duration-in=".3"
                  data-animation-in="fadeInLeft"
                  data-delay-in=".1"
                >
                  Your bright future is our mission
                </h1>
                <p
                  class="text-muted mb-4"
                  data-animation-out="fadeOutRight"
                  data-delay-out="5"
                  data-duration-in=".3"
                  data-animation-in="fadeInLeft"
                  data-delay-in=".4"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exer
                </p>
                <a
                  href="contact.html"
                  class="btn btn-primary"
                  data-animation-out="fadeOutRight"
                  data-delay-out="5"
                  data-duration-in=".3"
                  data-animation-in="fadeInLeft"
                  data-delay-in=".7"
                >
                  Apply now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-slider-item">
          <div class="row">
            <div class="col-md-8">
              <h1
                class="text-white"
                data-animation-out="fadeOutUp"
                data-delay-out="5"
                data-duration-in=".3"
                data-animation-in="fadeInDown"
                data-delay-in=".1"
              >
                Your bright future is our mission
              </h1>
              <p
                class="text-muted mb-4"
                data-animation-out="fadeOutUp"
                data-delay-out="5"
                data-duration-in=".3"
                data-animation-in="fadeInDown"
                data-delay-in=".4"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exer
              </p>
              <a
                href="contact.html"
                class="btn btn-primary"
                data-animation-out="fadeOutUp"
                data-delay-out="5"
                data-duration-in=".3"
                data-animation-in="fadeInDown"
                data-delay-in=".7"
              >
                Apply now
              </a>
            </div>
          </div>
        </div>
        <div>
          <div class="row">
            <div class="col-md-8">
              <h1
                class="text-white"
                data-animation-out="fadeOutDown"
                data-delay-out="5"
                data-duration-in=".3"
                data-animation-in="fadeInUp"
                data-delay-in=".1"
              >
                Your bright future is our mission
              </h1>
              <p
                class="text-muted mb-4"
                data-animation-out="fadeOutDown"
                data-delay-out="5"
                data-duration-in=".3"
                data-animation-in="fadeInUp"
                data-delay-in=".4"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exer
              </p>
              <a
                href="contact.html"
                class="btn btn-primary"
                data-animation-out="fadeOutDown"
                data-delay-out="5"
                data-duration-in=".3"
                data-animation-in="zoomIn"
                data-delay-in=".7"
              >
                Apply now
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </Carousel>
    </div>
  </div>
);

export default Landing;
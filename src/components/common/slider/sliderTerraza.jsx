import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.scss";
import TypeWriterEffect from "react-typewriter-effect";
class SliderTerraza extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className={"slider-wrap position-relative"}>
        {/* <Slider {...settings}> */}
        <div className="slider-item position-relative">
          <div className="slider-image"></div>
          <div className="container">
            <div className="slider-content">
              <div className="text-center w-100">
                <h2 className="text-white">
                  Welcome to the World of
                  <br />{" "}
                  <TypeWriterEffect
                    textStyle={{
                      textAlign: "center",
                      color: "#ffffff",
                      fontFamily: 'Montserrat", sans-serif',
                      fontWeight: 300,
                    }}
                    startDelay={2000}
                    cursorColor="#ffffff"
                    multiText={[
                      "Terraza",
                      "Luxury & Convenience",
                      "Unending Possibilities",
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={120}
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* </Slider> */}
      </div>
    );
  }
}

export default SliderTerraza;

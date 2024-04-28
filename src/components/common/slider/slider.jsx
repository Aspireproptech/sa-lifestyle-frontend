import React, { Component } from "react";
import "./slider.scss";
import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-router-dom";
class SliderHome extends Component {
  render() {
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 800,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   arrows: false,
    // };

    return (
      <div className={"slider-wrap position-relative"}>
        {/* <Slider {...settings}> */}
        <div className="slider-item position-relative">
          <div className="slider-image-home" />
          <div className="container">
            <div className="slider-content">
              <div className="text-start w-100">
                <h2 className="text-white">
                  We are committed to
                  <br />
                  <TypeWriterEffect
                    className="type-writer-text"
                    textStyle={{
                      color: "#ffffff",
                      fontFamily: 'Montserrat", sans-serif',
                      fontWeight: 300,
                    }}
                    startDelay={2000}
                    cursorColor="#ffffff"
                    multiText={[
                      "Keeping our Promises",
                      "High Quality Craftsmanship",
                      "Building Trust",
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={120}
                  />
                </h2>
                <div className="text-white mt-5">
                  <Link to={`/about-us`}>
                    <button className="my-2">Know more</button>
                  </Link>
                  {/* <Link to={`/explore-terraza`}>
                    <button>Explore Terraza</button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </Slider> */}
      </div>
    );
  }
}

export default SliderHome;

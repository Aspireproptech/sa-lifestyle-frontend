import React, { Component } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import NeighborhoodsSection from "../../sections/neighborhoods - Copy/neighborhoods";
import AmenitiesSection from "../../sections/amenities - Copy/amenities";
import SliderTerraza from "../../common/slider/sliderTerraza";
import TerrazaRightCards from "../terraza - Copy/terrazaRightCards";
import TerrazaCardGroup from "../terraza - Copy/terrazaCardGroup";

import LeftAmenities from "../terraza - Copy/leftamenities";
import Helmet from "react-helmet";
import "./the-building.scss";
import { Parallax } from "react-parallax";
// import GallerrySection from "../../sections/gallerry/gallerry";
import ApartmentsPlansSection from "../../sections/ourvalues/ourvalues";
import TerrazaLeftCards from "../terraza - Copy/terrazaLeftCards";
import CallToActionSection from "../../sections/caltoaction - Copy/caltoaction";
import CallToAction2Section from "../../sections/caltoaction/caltoaction2";
import StickyHeader from "./StickyHeader";
class TheBuildingPage2 extends Component {
  render() {
    return (
      <div className={`the-building-wrap`}>
        <Helmet>
          <title>SA LIFESTYLE | Verzure</title>
        </Helmet>
        {/* <Breadcrumb title={'The Building'}/> */}
        <div className="section-wrapper pt-0 pb-0">
          <SliderTerraza />
        </div>
        <StickyHeader />

        <div className="section-wrapper">
          <div className="container">
            <div className="text-description text-center pt-5">
              {/* <h3 className="text-primary">ARE YOU INTERESTED</h3> */}
              <h2>HOMES THAT HAVE IT ALL!</h2>
              {/* <h3>THE BUILDING</h3> */}
              <p className="text-black-50 mt-5">
                <strong>
                Strike Gold at North Bangalore with Verzure, offering 121 upscale 2 & 3 BHK homes elevated 8 floors high amidst 1.9 acres of greenery with possession coming soon

                </strong>
              </p>
            </div>
          </div>
        </div>
        <div className="section-wrapper">
          <div id="#overview">
            <Parallax
              className={`section-parallax`}
              bgImage={`${process.env.PUBLIC_URL}/assets/imagewebp/project/about-counter1.png`}
              bgImageAlt="the cat"
              strength={500}
            >
              <div className="about-parallax  position-relative">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="box-counter text-center text-white">
                        <div className="box-counter-wrap">
                          <div className="counter-nummer">121</div>
                          <div className="counter-text">Luxury Abodes</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="box-counter text-center text-white">
                        <div className="box-counter-wrap">
                          <div className="counter-nummer">1.9 </div>
                          <div className="counter-text">Acres</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="box-counter text-center text-white">
                        <div className="box-counter-wrap">
                          <div className="counter-nummer">2.5 Km</div>
                          <div className="counter-text">
                            from Manyata Tech Park
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row my-5">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="box-counter text-center text-white">
                        <div className="box-counter-wrap">
                          <div className="counter-nummer">1254 to 1726 </div>
                          <div className="counter-text">sqft</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="box-counter text-center text-white">
                        <div className="box-counter-wrap">
                          <div className="counter-nummer">2 {`&`} 3 </div>
                          <div className="counter-text">BHK</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="box-counter text-center text-white">
                        <div className="box-counter-wrap">
                          <div className="counter-nummer">Possession in</div>
                          <div className="counter-text"> 3 Months</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Parallax>
          </div>
          <div className="pb-0">
            <TerrazaRightCards />
            <TerrazaLeftCards />
          </div>

          <div
            className="section-wrapper pl-6 pr-6"
            style={{ background: "#f8f8f8" }}
            id="#amenities"
          >
            <AmenitiesSection />
          </div>
          <div className="section-wrapper pb-0">
            <CallToAction2Section
              text="GET IN TOUCH WITH US!"
              btntext="ENQUIRE NOW!"
            />
          </div>
          <div className="section-wrapper pl-6 pr-6">
            <LeftAmenities />
          </div>

          <div className="section-wrapper pb-0">
            <CallToActionSection />
          </div>

          <NeighborhoodsSection />

          <CallToAction2Section />
          <TerrazaCardGroup />
        </div>
        <div className="section-wrapper pb-5">
          <ApartmentsPlansSection />
        </div>
      </div>
    );
  }
}

export default TheBuildingPage2;

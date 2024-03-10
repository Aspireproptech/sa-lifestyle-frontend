import React, { Component } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import NeighborhoodsSection from "../../sections/neighborhoods - Copy (2)/neighborhoods";
import AmenitiesSection from "../../sections/amenities - Copy (2)/amenities";
import SliderTerraza from "../../common/slider/sliderTerraza - Copy (2)";
import TerrazaRightCards from "../terraza - Copy (2)/terrazaRightCards";
import TerrazaCardGroup from "../terraza - Copy (2)/terrazaCardGroup";

import LeftAmenities from "../terraza - Copy (2)/leftamenities";
import Helmet from "react-helmet";
import "./the-building.scss";
import { Parallax } from "react-parallax";
// import GallerrySection from "../../sections/gallerry/gallerry";
import ApartmentsPlansSection from "../../sections/ourvalues - Copy (2)/ourvalues"
import TerrazaLeftCards from "../terraza - Copy (2)/terrazaLeftCards";
import CallToActionSection from "../../sections/caltoaction - Copy (2)/caltoaction"
import CallToAction2Section from "../../sections/caltoaction/caltoaction2";
import StickyHeader from "./StickyHeader";
class TheBuildingPage3 extends Component {
  render() {
    return (
      <div className={`the-building-wrap`}>
        <Helmet>
          <title>SA LIFESTYLE | TERRAZA</title>
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
              <h2>Your Legacy, Your Homes!</h2>
              {/* <h3>THE BUILDING</h3> */}
              <p className="text-black-50 mt-5">
                <strong>
                G+14 high-rise living with luxurious 3 & 4 BHK residences offering 1571 to 3411 sq.ft. in the heart of Jakkur.
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
                          <div className="counter-nummer">78</div>
                          <div className="counter-text">Luxury Homes</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="box-counter text-center text-white">
                        <div className="box-counter-wrap">
                          <div className="counter-nummer">1 </div>
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
                          <div className="counter-nummer">1571 to 3411 </div>
                          <div className="counter-text">sqft</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="box-counter text-center text-white">
                        <div className="box-counter-wrap">
                          <div className="counter-nummer">3 {`&`} 4 </div>
                          <div className="counter-text">BHK</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="box-counter text-center text-white">
                        <div className="box-counter-wrap">
                          <div className="counter-nummer">Jakkur</div>
                          <div className="counter-text"> Location</div>
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
          <div className=" pb-0">
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

export default TheBuildingPage3;

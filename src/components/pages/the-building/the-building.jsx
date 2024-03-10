import React, { Component } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import NeighborhoodsSection from "../../sections/neighborhoods/neighborhoods";
import AmenitiesSection from "../../sections/amenities/amenities";
import SliderTerraza from "../../common/slider/sliderTerraza";
import TerrazaRightCards from "../terraza/terrazaRightCards";
import TerrazaCardGroup from "../terraza/terrazaCardGroup";

import LeftAmenities from "../terraza/leftamenities";
import Helmet from "react-helmet";
import "./the-building.scss";
import { Parallax } from "react-parallax";
// import GallerrySection from "../../sections/gallerry/gallerry";
import ApartmentsPlansSection from "../../sections/ourvalues/ourvalues";
import TerrazaLeftCards from "../terraza/terrazaLeftCards";
import CallToActionSection from "../../sections/caltoaction/caltoaction";
import CallToAction2Section from "../../sections/caltoaction/caltoaction2";
import StickyHeader from "./StickyHeader";
class TheBuildingPage extends Component {
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
              <h2>Where Luxury Meets Convenience</h2>
              {/* <h3>THE BUILDING</h3> */}
              <p className="text-black-50 mt-5">
                <strong>
                  14-story high-rise building surrounded by a broad array of
                  open spaces, with each home offering a private terrace
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
                          <div className="counter-nummer">182</div>
                          <div className="counter-text">Luxury Homes</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="box-counter text-center text-white">
                        <div className="box-counter-wrap">
                          <div className="counter-nummer">3 </div>
                          <div className="counter-text">Acres</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="box-counter text-center text-white">
                        <div className="box-counter-wrap">
                          <div className="counter-nummer">2 mins</div>
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
                          <div className="counter-nummer">1420 to 2516 </div>
                          <div className="counter-text">sqft</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="box-counter text-center text-white">
                        <div className="box-counter-wrap">
                          <div className="counter-nummer">3, 3.5 {`&`} 4 </div>
                          <div className="counter-text">BHK</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="box-counter text-center text-white">
                        <div className="box-counter-wrap">
                          <div className="counter-nummer">Ready to</div>
                          <div className="counter-text"> Move with OC</div>
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

export default TheBuildingPage;

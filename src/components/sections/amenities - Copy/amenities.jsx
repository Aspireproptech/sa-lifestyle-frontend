import React, { Component } from "react";
import "./amenities.scss";
import Heading from "../../common/heading/heading";
import CarouselPage4 from "../../common/slider/slider1 - Copy";

class AmenitiesSection extends Component {
  render() {
    return (
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-sm-12 order-lg-1 order-md-2 order-sm-2 my-5">
          <Heading> Outdoor Amenities</Heading>
          <p className="mb-5">
          Verzure offers an array of outdoor amenities for your rejuvenation and relaxation.

          </p>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="icon-list">
                <div className="icon-list-wrap">
                  <ul>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">Infinity Swimming Pool</span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">Kids Swimming Pool</span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">Pool Deck</span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">
                      Sky Lounge

                      </span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">Landscaped Gardens
</span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">Kids Play Area</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="icon-list">
                <div className="icon-list-wrap">
                  <ul>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">Open Air Gym
</span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">
                      Pet Park

                      </span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">
                      Landscaped Driveways

                      </span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">Rain Water Harvesting
</span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">Central Courtyard
</span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">
                      Organic Garbage Converter
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 order-lg-2">
          <CarouselPage4 />
        </div>
      </div>
    );
  }
}

export default AmenitiesSection;

import React, { Component } from "react";
import "./amenities.scss";
import Heading from "../../common/heading/heading";
import CarouselPage1 from "../../common/slider/slider1";

class AmenitiesSection extends Component {
  render() {
    return (
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-sm-12 order-lg-1 order-md-2 order-sm-2 my-5">
          <Heading> Outdoor Amenities</Heading>
          <p className="mb-5">
            Terraza offers a multitude of outdoor amenities for your enjoyment
            and lifestyle.
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
                      <span className="icon-list-text">Swimming Pool</span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">Kids Pool</span>
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
                        Half Basketball Court
                      </span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">Lawn Tennis Court</span>
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
                      <span className="icon-list-text">Landscaped Gardens</span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">
                        Open Air Event Space
                      </span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">
                        Wide Walking/ Jogging Track
                      </span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">24 Hour Security</span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">CCTV Surveillance</span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">
                        Elders Sitting Area
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 order-lg-2">
          <CarouselPage1 />
        </div>
      </div>
    );
  }
}

export default AmenitiesSection;

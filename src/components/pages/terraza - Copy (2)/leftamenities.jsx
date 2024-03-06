import React, { Component } from "react";
import Heading from "../../common/heading/heading";
import CarouselPage1 from "../../common/slider/slider2";

class LeftAmenities extends Component {
  render() {
    return (
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-sm-12 order-lg-2 ">
          <Heading> Indoor Amenities</Heading>
          <p className="mb-5">
          The indoor facilities at Premia are designed to meet all your needs effectively.
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
                      <span className="icon-list-text">
                        Club House
                      </span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">
                      Well Equipped Indoor Fitness Centre
                      </span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">
                      Events Hall with Dining & Kitchen Space
                      </span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">Yoga/ Meditation Zone
</span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">
                      Cigar Lounge

                      </span>
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
                      <span className="icon-list-text">Kids Activity Centre</span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">Creche</span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">
                      Pool Table
                      </span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">
                      Table Tennis

                      </span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">Air Hockey
</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 order-lg-1 my-5">
          <CarouselPage1 />
        </div>
      </div>
    );
  }
}

export default LeftAmenities;

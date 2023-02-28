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
            The indoor amenities offered at Terraza are sure to cater to your
            every requirement.
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
                        25,000 sqft Clubhouse
                      </span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">
                        Well-equipped Gymnasium
                      </span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">
                        Kids’ Day Care Center
                      </span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">Yoga room</span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">
                        Provision for Cafeteria
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
                      <span className="icon-list-text">Billiards</span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">Table-Tennis</span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">
                        Spacious Event Space
                      </span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">
                        Indoor Mini-Theatre
                      </span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">Changing Rooms</span>
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

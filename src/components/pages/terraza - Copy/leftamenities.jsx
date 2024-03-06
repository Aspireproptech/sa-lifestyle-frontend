import React, { Component } from "react";
import Heading from "../../common/heading/heading";
import CarouselPage11 from "../../common/slider/slider2 - Copy";

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
                      Club House
                      </span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">
                      Indoor Gym

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
                      Work From Verzure Space
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
                      <span className="icon-list-text">Kids Activity Centre
</span>
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
                      Air Hockey

                      </span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">
                      FooTball

                      </span>
                    </li>
                    <li className="icon-list-items">
                      <span className="icon-list-icon">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="icon-list-text">Creche
</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 order-lg-1 my-5">
          <CarouselPage11 />
        </div>
      </div>
    );
  }
}

export default LeftAmenities;

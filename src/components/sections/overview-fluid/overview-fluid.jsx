import React, { Component } from "react";
import Heading from "../../common/heading/heading";
import { Link } from "react-router-dom";
import './overview-fluid.scss';
class OverviewFluidSection extends Component {
  render() {
    return (
      <div className="container-fluid px-md-4">
        <div className="row mx-lg-4">
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center">
            <div className="w-lg-75 mx-auto">
              <Heading>Who We Are</Heading>
              <p className="text-black mt-5">
                Over 2 Decades of Experience of Delivering Quality Spaces
              </p>
              <p className="mt-4">
                Founded in 2003, “‘SA Lifestyle Pvt Ltd”, is a well-known name
                in the Bangalore real estate market. We have successfully worked
                on numerous residential and commercial projects in Bangalore
                over the years and have established an exceptional reputation
                for delivering quality spaces with excellent planning and
                quality craftsmanship.
              </p>
           
            <div className="overview-btn my-5">
              <Link to={`/about-us`}>
                <button>Know more</button>
              </Link>
            </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center text-center">
            <img
              className="img-fluid"
              src="/assets/images/SA-LOGO.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default OverviewFluidSection;

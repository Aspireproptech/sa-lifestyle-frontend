import React, { Component } from "react";
import "./explore-amenities.scss";
import { Link } from "react-router-dom";

class ExploreAmenitiesSection extends Component {
  render() {
    return (
      <div className="amenities-general amenities-bg">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center pb-maxmd">
            <div className="w-lg-75 mx-auto">
              <h3 className="text-uppercase text-primary">
                Featured Project: Terraza
              </h3>
              <h2 className="text-uppercase mb-4">
                Where Luxury Meets Convenience
              </h2>
              <p className="pb-4">
                Terraza by SA Lifestyle offers smartly designed, spacious 3 & 4
                BHK magnificent homes, 182 Luxury Apartments in a 14-story
                high-rise structure surrounded by lush green spaces & located
                just 2 minutes from Manyata Tech Park. Terraza will captivate
                you with its perfect blend of functionality and spectacular
                design at an incredible location.
              </p>
              <Link to={`/explore-terraza`}>
                <a href="#" className="btn btn-primary" role="button">
                  Explore Terraza
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center text-center">
            <img
              className="img-fluid"
              src="/assets/imagewebp/project/home-sec-3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ExploreAmenitiesSection;

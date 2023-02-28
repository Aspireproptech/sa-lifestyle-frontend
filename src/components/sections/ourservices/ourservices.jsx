import React, { Component } from "react";
import "./ourservices.scss";
import Heading from "../../common/heading/heading";

class OurServicesSection extends Component {
  render() {
    return (
      <div className="ourservices">
        <div className="container">
          <Heading>The 6 Pillars of our Success</Heading>
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="featured-box style-2">
                <div className="featured-box-wrap">
                  <div className="featured-box-top">
                    <div className="featured-box-icon">
                      <i class="fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                    <h3 className="featured-box-title text-uppercase">
                      Quality
                    </h3>
                  </div>
                  <div className="featured-box-bottom">
                    <p className="featured-box-description">
                      Delivering high quality projects forms the bedrock of
                      whatever we do
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="featured-box style-2">
                <div className="featured-box-wrap">
                  <div className="featured-box-top">
                    <div className="featured-box-icon">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <h3 className="featured-box-title text-uppercase">
                      Efficient Space Planning
                    </h3>
                  </div>
                  <div className="featured-box-bottom">
                    <p className="featured-box-description">
                      Our team ensures that the space planning is done in the
                      most efficient way
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 d-flex">
              <div className="featured-box style-2">
                <div className="featured-box-wrap">
                  <div className="featured-box-top">
                    <div className="featured-box-icon">
                    <i class="fa fa-pencil-square" aria-hidden="true"></i>
                     
                    </div>
                    <h3 className="featured-box-title text-uppercase">
                      Design
                    </h3>
                  </div>
                  <div className="featured-box-bottom">
                    <p className="featured-box-description">
                      Our team will constantly work on cost efficiency so that
                      the end user will enjoy it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="featured-box style-2">
                <div className="featured-box-wrap">
                  <div className="featured-box-top">
                    <div className="featured-box-icon">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    </div>
                    <h3 className="featured-box-title text-uppercase">
                      Timely Delivery
                    </h3>
                  </div>
                  <div className="featured-box-bottom">
                    <p className="featured-box-description">
                      Our team delivers quality and on time as per our promises
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="featured-box style-2 ">
                <div className="featured-box-wrap">
                  <div className="featured-box-top">
                    <div className="featured-box-icon">
                    <i class="fa fa-users" aria-hidden="true"></i>
                    </div>
                    <h3 className="featured-box-title text-uppercase">
                      Building With Trust {`&`} Honesty
                    </h3>
                  </div>
                  <div className="featured-box-bottom">
                    <p className="featured-box-description">
                      Our values our built on the foundation of trust and
                      honesty
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 d-flex">
              <div className="featured-box style-2">
                <div className="featured-box-wrap">
                  <div className="featured-box-top">
                    <div className="featured-box-icon">
                    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                    </div>
                    <h3 className="featured-box-title text-uppercase">
                      Experts at Work
                    </h3>
                  </div>
                  <div className="featured-box-bottom">
                    <p className="featured-box-description">
                      Our team comprises of exceptional construction {`&`} real
                      estate experts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurServicesSection;

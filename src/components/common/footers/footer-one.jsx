import React, { Component } from "react";
import { withTranslate } from "react-redux-multilingual";
import "./footer.scss";
import Copyright from "../copyright/copyright";
import ContactForm from "../contact-form/contact-form";

class FooterOne extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { translate } = this.props;
    return (
      <footer
        className="site-footer"
        id="#contact-us"
        style={{
          display: window.location.pathname === "/thank-you" ? "none" : "",
        }}
      >
        {/*<ShapeSVG position={`top`}/>*/}
        {/*Section #1*/}
        <div className="section-1 text-center">
          <div className="container">
            <h3 className="text-uppercase">Say hi to our team!</h3>
            <h2 className="text-uppercase">
              To schedule a visit, or for more information
            </h2>
            <h3 className="text-uppercase">you can reach out to us.</h3>
          </div>
        </div>

        {/*Section 2*/}
        <div className="section-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/SALogo-white.png`}
                  style={{ height: "70px" }}
                  alt=""
                  className="img-fluid mb-3"
                />
                <h6 className="heading-title"> SA LIFESTYLE PVT. LTD.</h6>

                <div className="icon-list footer-address">
                  <ul>
                    <li>
                      <span className="icon-list-icon">ADDRESS:</span>
                      <span className="icon-list-text">
                        300, Thanisandra Main Rd <br />
                        Sampangi Rama Nagar <br />
                        Ashwath Nagar, Sinthan Nagar <br />
                        Bengaluru
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/aspire-white.png`}
                  style={{ height: "70px" }}
                  alt=""
                  className="img-fluid mb-3"
                />
                <h6 className="heading-title">ASPIRE PROPTECH</h6>

                <div className="icon-list footer-address">
                  <ul>
                    <li>
                      <span className="icon-list-icon">ADDRESS:</span>
                      <span className="icon-list-text">
                        No. 45/11, First Floor, North Park Road, Kumara Park
                        East, Bengaluru 560001
                      </span>
                    </li>
                    <li>
                      <span className="icon-list-icon">PHONE:</span>
                      <a href="tel:+91 98866 60989">
                        <span className="icon-list-text">
                          +91- 98866 60989,
                        </span>
                      </a>
                      <a href="tel:+91 63621 48916">
                        <span className="icon-list-text">+91- 63621 48916</span>
                      </a>
                    </li>
                    <li>
                      <span className="icon-list-icon">MAIL:</span>
                      <a href="mailto:hello@aspireprop.com">
                        <span className="icon-list-text">
                          hello@aspireprop.com
                        </span>
                      </a>
                    </li>
                    <li>
                      <span className="icon-list-icon">Website:</span>

                      <a href="https://www.aspireprop.com/">
                        <span className="icon-list-text">
                          www.aspireprop.com
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <h6 className="heading-title">ENQUIRE</h6>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        {/*Section #2*/}
        {/*Section 3*/}
        <div className="section-3">
          <div className="container text-center">
            <h6 className="heading-title">
              Disclaimer: The information, visuals, render & creative depictions
              contained herein are artistic impressions, indicative in nature
              are for general information purposes only. No information given on
              this website creates a warranty or expands the scope of any
              warranty that cannot be disclaimed under the applicable laws
              except for what has been provided in the Agreement for Sale. This
              document is not a legal or commercial offering.
            </h6>
            <div className="row">
              <div className="col-sm-12">
                <Copyright />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withTranslate(FooterOne);

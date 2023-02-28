import React, { Component } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Helmet from "react-helmet";
import "./contact.scss";
import ContactForm from "../../common/contact-form/contact-form";

class ContactPage extends Component {
  render() {
    return (
      <div className={`contact-page-wrap`}>
        <Helmet>
          <title>SA LIFESTYLE | Contact Us Page</title>
        </Helmet>
        <Breadcrumb title={"Contact Us"} />
        <div className="section-wrapper">
          <div className="container">
            <div className="row mx-5">
              <div className="col-lg-1 col-md-12" />

              <div className="col-lg-5 col-md-12">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/SA-LOGO.png`}
                  style={{ height: "70px" }}
                  alt=""
                  className="img-fluid my-3"
                />
                <h6 className="heading-title"> SA LIFESTYLE PVT. LTD.</h6>

                <div className="icon-list footer-address">
                  <ul>
                    <li>
                      <span className="icon-list-icon">
                        <b>ADDRESS: </b>{" "}
                      </span>
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
              <div className="col-lg-5 col-md-12">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/aspire.png`}
                  style={{ height: "70px" }}
                  alt=""
                  className="img-fluid my-3"
                />
                <h6 className="heading-title"> ASPIRE PROPTECH</h6>

                <div className="icon-list footer-address">
                  <ul>
                    <li>
                      <span className="icon-list-icon">
                        <b>ADDRESS: </b>{" "}
                      </span>
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
              <div className="col-lg-1 col-md-12" />
            </div>
          </div>
        </div>
        <div className="section-wrapper">
          <div className="form-contact mb-5">
            <h3 className="text-uppercase text-center">Get in Touch !</h3>
            <ContactForm />
            {/* <div className="mt-4 row">
              <div className="col-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-6 mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone-number"
                />
              </div>
              <div className="col-12 mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Your Email"
                />
              </div>
              <div className="col-12 mb-3">
                <textarea
                  id="textareaComment"
                  className="form-control"
                  placeholder="Your Message"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary w-100">
                  LEAVE A message <i className="opal-icon-arrow"></i>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;

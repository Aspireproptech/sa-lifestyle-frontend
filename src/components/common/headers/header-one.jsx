import React, { Component } from "react";
// import {Link, NavLink} from 'react-router-dom';
// import {IntlActions} from 'react-redux-multilingual'

// Import custom components
import MainMenu from "./common/navbar";
import LogoImage from "./common/logo";
// import {connect} from "react-redux";

// import LanguageSwitchBlock from "./common/language-switch";
import Modal from "react-responsive-modal";
import ContactForm from "../contact-form/contact-form";

class HeaderOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  openSearch = (e) => {
    e.preventDefault();
    document.querySelector(".popup-search").style.display = "block";
  };

  onOpenModal = (e) => {
    e.preventDefault();
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <header
        id="masthead"
        className="site-header"
        style={{
          display: window.location.pathname === "/thank-you" ? "none" : "",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="d-flex align-items-center w-100 site-header-wrap justify-content-between">
              <div className="site-branding">
                <LogoImage logo={this.props.logoName} />
              </div>
              {/* <div style={{ cursor: "pointer" }} title="Visit Aspire Home Fest">
                <a
                  href="https://aspireprop.com/aspire-homefest2023"
                  target="_blank"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/fest.png`}
                    style={{ height: "60px" }}
                    alt="fest"
                    className="img-fluid"
                  />
                </a>
              </div> */}

              <MainMenu menu={this.props.menu} />

              <div className="header-group d-flex">
                <button
                  type="button"
                  className="btn btn-dark text-white mb-0"
                  style={{ width: "fit-content" }}
                  onClick={this.onOpenModal}
                >
                  Schedule a visit
                </button>
                <div className="rpm-trigger header-button" id="rpm-trigger">
                  <i className={`opal-icon opal-icon-toggle`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content quick-view-modal">
              <div className="modal-body">
                <h6 className="heading-title">Schedule a visit</h6>
                <ContactForm />
              </div>
            </div>
          </div>
        </Modal>
      </header>
    );
  }
}

export default HeaderOne;

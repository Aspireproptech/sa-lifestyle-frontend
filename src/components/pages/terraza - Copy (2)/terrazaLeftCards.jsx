import React, { Component } from "react";
import "./terrazaCards.scss";
import Modal from "react-responsive-modal";
import ContactForm from "../../common/contact-form/contact-form";

class TerrazaLeftCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  onOpenModal = (e) => {
    e.preventDefault();
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div className="amenities-general">
        <div className="row amenities">
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center text-center order-lg-1 order-md-2 order-sm-2 my-5">
            <img
              className="img-fluid"
              src="/assets/imagewebp/project/Rectangle 2684 (3).png"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center pb-maxmd order-lg-2">
            <div className="w-lg-90 mx-auto">
              {/* <h3 className="text-uppercase text-primary">
                Beautiful City Views
              </h3> */}
              <h2 className="text-uppercase mb-2">
              Architectural Harmony

              </h2>
              <p className="pb-3">
              Achieve balance with 82% open space, creating a serene environment through thoughtful design with only 18% building blueprint.

              </p>

              <a
                href="#"
                onClick={this.onOpenModal}
                className="btn btn-dark text-white mb-0"
                role="button"
              >
                Schedule Site Visit
              </a>
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
      </div>
    );
  }
}

export default TerrazaLeftCards;

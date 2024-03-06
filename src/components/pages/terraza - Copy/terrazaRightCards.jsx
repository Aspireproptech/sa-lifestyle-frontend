import React, { Component } from "react";
import "./terrazaCards.scss";
import Modal from "react-responsive-modal";
import ContactForm from "../../common/contact-form/contact-form";

class TerrazaRightCards extends Component {
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
      <div className="amenities-general amenities-bg" id="#features">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center pb-maxmd order-lg-1 order-md-2 order-sm-2 my-5">
            <div className="w-lg-75 mx-auto">
              {/* <h3 className="text-uppercase text-primary">
                Unique Design Feature
              </h3> */}
              <h2 className="text-uppercase mb-4">
              Masterful Craftsmanship

              </h2>
              <p className="pb-4">
              Each element is skillfully crafted with utmost care, showcasing a dedication to accuracy and top-notch quality in every intricate detail.

              </p>
              <div onClick={this.onOpenModal}>
                <a
                  href="#"
                  className="btn btn-dark text-white mb-0"
                  role="button"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center text-center order-lg-2">
            <img
              className="img-fluid"
              src="/assets/imagewebp/project/teraze-explore31.png"
              alt=""
            />
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

export default TerrazaRightCards;

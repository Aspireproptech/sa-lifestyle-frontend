import React, { Component } from "react";
import Modal from "react-responsive-modal";
import ContactForm from "../../common/contact-form/contact-form";

import "./caltoaction.scss";

class CallToAction2Section extends Component {
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
      <div className="call-to-action text-center">
        <div className="container">
          <h2 className="text-uppercase text-white">
            {this.props.text
              ? this.props.text
              : "If you are in a hurry, download a brochure instead"}
          </h2>
          {/* <h2 className="text-uppercase text-white my-5">
            2 mins from Manyata Tech Park - the true definition of Walk to Work!
          </h2> */}

          <div className="btn-call-to-action mt-4" onClick={this.onOpenModal}>
            <a
              href="https://drive.google.com/file/d/1mx7ZpbxQRQkupHyuJh7d6fo6zFKfklW6/view?usp=sharing"
              className="btn btn-dark"
              rel="noopener noreferrer"
              target="_blank"
            >
              {this.props.btntext ? this.props.btntext : "Download Brochure"}
            </a>
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

export default CallToAction2Section;

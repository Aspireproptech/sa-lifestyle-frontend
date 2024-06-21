import React, { Component } from "react";
import "./caltoaction.scss";
import Modal from "react-responsive-modal";
import ContactForm from "../../common/contact-form/contact-form";

class CallToActionSection extends Component {
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
          <h2 className="text-uppercase ">
          Connect. Commute. Cherish

          </h2>
          <h2 className="text-uppercase  my-5">
            2.2 km from Manyata Tech Park - the true definition of Walk to Work!
          </h2>
          <h4 className="  my-5" style={{ fontFamily: "none" }}>
          Strategically located only 2.5 kilometers from Manyata Tech Park, Premia offers a convenient solution, sparing residents from long commutes. Situated in the prime area of Jakkur, with excellent social and commercial amenities, connectivity, and attractive pricing, it proves to be an ideal option for both homebuyers and investors. Additionally, the upcoming Jakkur Cross Metro Station adds to its appeal.
          </h4>
          <div className="btn-call-to-action">
            <a
              href="#"
              className="btn btn-dark"
              role="button"
              onClick={this.onOpenModal}
            >
              Enquire now for attractive Offers
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

export default CallToActionSection;

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
          <h2 className="text-uppercase text-white">
            Location, Location, & Location!
          </h2>
          <h2 className="text-uppercase text-white my-5">
            2 mins from Manyata Tech Park - the true definition of Walk to Work!
          </h2>
          <h4 className=" text-white my-5" style={{ fontFamily: "none" }}>
            Comfortably positioned just 2 mins from Manyata Tech Park, Terraza
            simply eliminates the need to drive long distances to work.
            Terraza’s prime location, social and commercial infrastructure,
            connectivity and value for money price make it a great choice not
            only for home buyers but also for investors.
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

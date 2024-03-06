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
          A PRIZED LOCATION

          </h2>
          <h2 className="text-uppercase  my-5">
          2.5 KMS FROM MANYATA TECH PARK

          </h2>
          <h4 className="  my-5" style={{ fontFamily: "none" }}>
          Embrace effortless living at the core of North Bangalore in Jakkur, a vibrant and expanding hub surrounded by the city's prime establishments like Manyata tech Park, Phoenix Mall of Asia etc. More than just a residence, Verzure offers a harmonious lifestyle, ensuring a promising future in a burgeoning neighborhood. 

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

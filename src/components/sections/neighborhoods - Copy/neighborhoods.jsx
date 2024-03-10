import React, { Component } from "react";
import "./apartment.scss";
import Heading from "../../common/heading/heading";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import LoadingBlock from "../../common/loading/loading";
import ReactTooltip from "react-tooltip";

class NeighborhoodsSection extends Component {
  json = [];
  state = {
    isLoading: true,
  };

  constructor(props) {
    super(props);
    this.load();
  }

  load = () => {
    fetch("/api/apartment-neighborhoods - Copy.json")
      .then((response) => response.json())
      .then((res) => {
        this.json = res;
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <div className="apartments" id="#location">
        <div className="container">
          <Heading>
            <span className="text-white"> APARTMENT Neighbourhood </span>
          </Heading>
          {!this.state.isLoading ? (
            <div className="apartments-content pt-4">
              <ReactTooltip place="top" type="dark" effect="solid" />
              <div className="row no-gutters">
                <div className="col-lg-4 col-sm-12 bg-white">
                  <div className="image-hotspots-accordion">
                    <div className="image-hotspots-accordion-inner">
                      <Accordion>
                        {this.json.data.map((data, index) => (
                          <AccordionItem key={index}>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                {data.title}
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <ul>
                                {data.desc.map((data) => (
                                  <li>{data}</li>
                                ))}
                              </ul>
                            </AccordionItemPanel>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                  <div className="image-hotspots">
                    {/* <img src={this.json.image} alt="" style={{ filter: 'brightness(60%)'}}/> */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.367695832605!2d77.61487307473642!3d13.075867487249134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19c8cadd4061%3A0x3837a1af61aed2!2sUnishire%20Verzure%2CSampigehalli!5e0!3m2!1sen!2sin!4v1702880410391!5m2!1sen!2sin"
                      width="800"
                      height="600"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    />
                    {/* {this.json.data.map((data, index) => (
                      <div
                        className="tooltip-wrapper"
                        key={index}
                        style={data.position}
                        data-tip={data.title}
                      >
                        <i className="opal-image-hotspots-icon"></i>
                      </div>
                    ))} */}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <LoadingBlock />
          )}
        </div>
      </div>
    );
  }
}

export default NeighborhoodsSection;

import React, { Component } from "react";
import CountUp from "react-countup";
import "./countup.scss";
class CounterBlock extends Component {
  render() {
    return (
      <div className={`countup-wrap`}>
        <div className="container">
          <div className="d-flex justify-content-between flex-wrap">
            <div className="col-md-2 col-sm-6">
              <CountUp start={0} end={2003} delay={0}>
                {({ countUpRef }) => (
                  <div className="countup-box">
                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                    <div className="counter-number d-flex">
                      
                      <span ref={countUpRef} />
                    </div>

                    <div className="counter-title">
                      <span>In Operation Since</span>
                    </div>
                  </div>
                )}
              </CountUp>
            </div>
            <div className="col-md-2 col-sm-6">
              <CountUp start={0} end={5} delay={0}>
                {({ countUpRef }) => (
                  <div className="countup-box">
                    <div className="counter-number d-flex">
                      <span ref={countUpRef} /><h6>&nbsp;Lakhs+ sqft</h6>
                    </div>

                    <div className="counter-title">
                      <span>Total Area Delivered</span>
                    </div>
                  </div>
                )}
              </CountUp>
            </div>
            <div className="col-md-3 col-sm-6">
              <CountUp start={0} end={30} delay={0}>
                {({ countUpRef }) => (
                  <div className="countup-box">
                    <div className="counter-number d-flex">
                      <span ref={countUpRef} /> +&nbsp;
                      <h6>
                        (Including Residential, Commercial, {`&`} Industrial)
                      </h6>
                    </div>

                    <div className="counter-title">
                      <span>Projects Delivered</span>
                    </div>
                  </div>
                )}
              </CountUp>
            </div>
            <div className="col-md-2 col-sm-6">
              <CountUp start={0} end={5} delay={0}>
                {({ countUpRef }) => (
                  <div className="countup-box">
                    <div className="counter-number d-flex">
                      <span ref={countUpRef} /> +
                    </div>

                    <div className="counter-title">
                      <span>Ongoing Projects</span>
                    </div>
                  </div>
                )}
              </CountUp>
            </div>
            <div className="col-md-2 col-sm-6">
              <CountUp start={0} end={10} delay={0}>
                {({ countUpRef }) => (
                  <div className="countup-box">
                    <div className="counter-number d-flex">
                      <span ref={countUpRef} />
                      <h6>&nbsp;Lakhs+ sqft</h6>
                    </div>

                    <div className="counter-title">
                      <span>Total Area Under Development</span>
                    </div>
                  </div>
                )}
              </CountUp>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CounterBlock;

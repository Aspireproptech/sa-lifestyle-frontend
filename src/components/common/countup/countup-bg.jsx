import React, { Component } from "react";
import CountUp from "react-countup";
import "./countup.scss";
class CounterBlockBg extends Component {
  render() {
    return (
      <div className={`countup-wrap bg style`}>
        <div className="item col-md col-sm-6">
          <CountUp start={0} end={2003} delay={0}>
            {({ countUpRef }) => (
              <div className="countup-box">
                <i class="fa fa-briefcase fa-3x" aria-hidden="true" />
                <div className="counter-number d-flex">
                  <span ref={countUpRef} />
                </div>
                <div className="line-text" />
                <div className="counter-title">
                  <span>In Operation Since</span>
                </div>
              </div>
            )}
          </CountUp>
        </div>
        <div className="item col-md col-sm-6">
          <CountUp start={0} end={5} delay={0}>
            {({ countUpRef }) => (
              <div className="countup-box">
                <i class="fa fa-area-chart fa-3x" aria-hidden="true" />
                <div className="counter-number d-flex">
                  <span ref={countUpRef} />
                </div>
                <div className="line-text" />
                <div className="counter-title">
                  <span>
                    Lakhs+ sqft <br />
                    Total Area Delivered
                  </span>
                </div>
              </div>
            )}
          </CountUp>
        </div>
        <div className="item col-md col-sm-6">
          <CountUp start={0} end={30} delay={0}>
            {({ countUpRef }) => (
              <div className="countup-box">
                <i class="fa fa-building fa-3x" aria-hidden="true" />
                <div className="counter-number d-flex mx-2">
                  <span ref={countUpRef} />
                </div>
                <div className="line-text" />
                <div className="counter-title">
                  <span>
                    {/* Including Residential, Commercial {`&`} Industrial */}
                    Projects Delivered
                  </span>
                </div>
              </div>
            )}
          </CountUp>
        </div>
        <div className="item col-md col-sm-6">
          <CountUp start={0} end={5} delay={0}>
            {({ countUpRef }) => (
              <div className="countup-box">
                <i class="fa fa-briefcase fa-3x" aria-hidden="true" />
                <div className="counter-number d-flex">
                  <span ref={countUpRef} /> 
                </div>
                <div className="line-text" />
                <div className="counter-title">
                  <span>Ongoing Projects</span>
                </div>
              </div>
            )}
          </CountUp>
        </div>
        <div className="item col-md col-sm-6">
          <CountUp start={0} end={10} delay={0}>
            {({ countUpRef }) => (
              <div className="countup-box">
                <i class="fa fa-home fa-3x" aria-hidden="true" />
                <div className="counter-number d-flex">
                  <span ref={countUpRef} /> 
                </div>
                <div className="line-text" />
                <div className="counter-title">
                  <span>Lakhs+ sqft Total Area Under Development</span>
                </div>
              </div>
            )}
          </CountUp>
        </div>
      </div>
    );
  }
}

export default CounterBlockBg;

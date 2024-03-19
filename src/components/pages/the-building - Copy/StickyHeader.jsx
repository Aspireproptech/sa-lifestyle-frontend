import React from "react";
import "./stickyHeader.css";
import { Link } from "react-scroll";
const StickyHeader = () => {
  return (
    <div className="sticky-header">
      <Link
        smooth
        spyThrottle={500}
        activeClass="span-active"
        spy
        to="#overview"
      >
        <span>Project Overview</span>
      </Link>
      <Link
        spyThrottle={500}
        smooth
        activeClass="span-active"
        spy
        to="#features"
      >
        <span>Features</span>
      </Link>
      <Link
        spyThrottle={500}
        smooth
        activeClass="span-active"
        spy
        to="#amenities"
      >
        <span>Amenities</span>
      </Link>
      <Link
        spyThrottle={500}
        smooth
        activeClass="span-active"
        spy
        to="#location"
      >
        <span>Location</span>
      </Link>
      <Link
        spyThrottle={500}
        smooth
        activeClass="span-active"
        spy
        to="#reasons"
      >
        <span>6 Reasons</span>
      </Link>
      <Link spyThrottle={500} smooth activeClass="span-active" spy to="#floor">
        <span>Floor Plans</span>
      </Link>
      <Link
        spyThrottle={500}
        smooth
        activeClass="span-active"
        spy
        to="#contact-us"
      >
        <span>Contact us</span>
      </Link>
    </div>
  );
};

export default StickyHeader;

import React, { Component } from "react";
import { Helmet } from "react-helmet";
// Import custom components
import SliderHome from "./common/slider/slider";
// import OverviewSection from "./sections/overview/overview";
import OverviewFluidSection from "./sections/overview-fluid/overview-fluid";
// import CounterBlock from "./common/countup/countup";
import ExploreAmenitiesSection from "./sections/explore-amenities/explore-amenities";
import CounterBlockBg from "./common/countup/countup-bg";
import OurServicesSection from "./sections/ourservices/ourservices";
// import CallToActionSection from "./sections/caltoaction/caltoaction";
// import AvailabilitySection from "./sections/availability/availability";
// import AmenitiesSection from "./sections/amenities/amenities";
// import ApartmentsPlansSection from "./sections/ourvalues/ourvalues";
// import BlogBlockGridStyle2 from "./common/blog/blog1";
// import NeighborhoodsSection from "./sections/neighborhoods/neighborhoods";
class Home1 extends Component {
  render() {
    return (
      <div className={`home-page-wrap`}>
        <Helmet>
          <title>SA LIFESTYLE</title>
        </Helmet>
        <div className="section-wrapper pt-0 pb-0">
          <SliderHome />
        </div>
        <div className="section-wrapper">
          <OverviewFluidSection />
        </div>
        <div className="section-wrapper pt-0">
          <div className="building-counter text-center">
            <div className="text-description pt-4 pb-5">
              <h3 className="text-primary">Know Us More</h3>
              <h2>Our Story in Numbers</h2>
              {/* <h3>THE BUILDING</h3> */}
            </div>
            <CounterBlockBg />
          </div>
        </div>
        {/* <div className="section-wrapper">
                    <CounterBlock/>
                </div> */}

        {/* <div className="section-wrapper pl-6 pr-6">
          <AmenitiesSection />
        </div> */}
        <div className="section-wrapper">
          <OurServicesSection />
          {/* <ExploreAmenitiesSection /> */}
        </div>

        {/* <div className="section-wrapper">
          <ApartmentsPlansSection />
        </div> */}

        {/* <div className="section-wrapper">
          <NeighborhoodsSection />
        </div> */}

        {/* <div className="section-wrapper">
          <AvailabilitySection />
        </div> */}

        {/* <div className="section-wrapper pb-0">
          <CallToActionSection />
        </div> */}
        {/* <div className="section-wrapper" style={{ backgroundColor: "#f8f8f8" }}>
          <BlogBlockGridStyle2 />
        </div> */}
      </div>
    );
  }
}

export default Home1;

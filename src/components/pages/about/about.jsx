import React, { Component } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Helmet from "react-helmet";
import { Parallax } from "react-parallax";
import Heading from "../../common/heading/heading";
import "./about.scss";
// import OurTeamBlock from "../../common/our-team/our-team";
// import CallToActionSection from "../../sections/caltoaction/caltoaction";
// import OurTeamSection from "../../sections/our-team/our-team";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-page-wrap">
        <Helmet>
          <title>SA LIFESTYLE | About Page</title>
        </Helmet>
        <Breadcrumb title={"About Us"} />
        <div className="container">
          <div className="section-wrapper">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 order-lg-2">
                  <img
                    className="img-fluid"
                    src="/assets/imagewebp/project/about-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-left order-lg-1 my-5">
                  <Heading>Creating Exceptional Spaces Since 2003</Heading>
                  <p className="text-black">
                    With over two decades of experience in the real estate and
                    construction industry, with a team of professionals skilled
                    in all stages of development and construction, we are on a
                    mission to help our customers achieve their dreams and
                    fulfill their needs in style.
                  </p>
                  <p>
                    We take pride in our ability to deliver projects with
                    exceptional quality. We are passionate about delivering
                    quality projects and providing our clients with an excellent
                    level of customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section-wrapper">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 order-lg-1 order-md-1 order-sm-1 my-5">
                  <img
                    className="img-fluid"
                    src="/assets/imagewebp/project/about-2.png"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-right order-lg-2 order-md-2 order-sm-2">
                  <Heading>Mission</Heading>
                  {/* <p className="text-black">In-House Made</p> */}
                  <p>
                    To Become One of the Most Trusted and Reliable Real Estate
                    Developers in Bangalore
                  </p>
                  {/* <p className="text-black">Our Customers Mean the World</p>
                <p>
                  From the vibrant ground level plaza to the terraces, private
                  gardens, balconies and lush rooftop work spaces, Costix offers
                  an array of amenities …
                </p> */}
                </div>
              </div>
            </div>
          </div>

          <div className="section-wrapper">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 order-lg-2 order-md-1 order-sm-1">
                  <img
                    className="img-fluid"
                    src="/assets/imagewebp/project/about-3.png"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-left order-lg-1 order-md-2 order-sm-2 my-5">
                  <Heading>Vision</Heading>
                  <p>
                    We take pride in our ability to deliver projects on time,
                    within budget and with exceptional quality. We offer
                    world-class designs and exquisite craftsmanship that are
                    handcrafted to the highest standards of taste and décor.
                  </p>
                  <p>
                    Our vision is to build real estate projects that are
                    designed to be a gateway to a new lifestyle for our
                    customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="section-wrapper">
          <CallToActionSection />
        </div>
        <div className="section-wrapper">
          <OurTeamSection />
        </div> */}
          <div className="section-wrapper">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <img
                    className="img-fluid"
                    src="/assets/imagewebp/project/team.jpg"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-right">
                  <Heading>Meet the Team</Heading>
                  <p>
                    Mr. Abdul Latheef Jabbar began his career in the
                    construction sector in 2003 as a fabrication contractor. The
                    organization, which started from a team of 12, now employs
                    around 400 people, and has steadily grown over the years,
                    with a focus on consistently delivering high-quality
                    projects.
                    <br />
                    <br /> Mr. Jabbar is master of his craft and maintains his
                    integrity in every aspect of his work, from the quality of
                    projects he delivers to the standards he upholds and strives
                    to attain. <br />
                    <br />
                    Mr. Jabbar is a man of vision, who has always had an eye for
                    the future of the industry. He was ready to accept new
                    challenges and start anew when it came to the real estate
                    business, laying the foundation of a strong and dynamic
                    organization capable of achieving success in multiple
                    fields.
                    <br />
                    <b>
                      “S.A Lifestyle is a multi-faceted firm with a team of
                      young and experienced engineers, who are dedicated to
                      building a better tomorrow.”
                    </b>{" "}
                    Our employees are our biggest asset. Our team members work
                    with passion, and they help us maintain the highest possible
                    quality standards in the construction industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Parallax
          className={`section-parallax`}
          bgImage={`${process.env.PUBLIC_URL}/assets/imagewebp/project/about-counter1.png`}
          bgImageAlt="the cat"
          strength={500}
        >
          <div className="about-parallax  position-relative">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="box-counter text-center text-white">
                    <div className="box-counter-wrap">
                      <div className="counter-nummer">2003</div>
                      <div className="counter-text">In Operation Since</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="box-counter text-center text-white">
                    <div className="box-counter-wrap">
                      <div className="counter-nummer">5 Lakhs+ sqft</div>
                      <div className="counter-text">Total Area Delivered</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="box-counter text-center text-white">
                    <div className="box-counter-wrap">
                      <div className="counter-nummer">10 Lakhs+ sqft</div>
                      <div className="counter-text">
                        Total Area Under Development
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-lg-6 col-md-6 col-sm-4">
                  <div className="box-counter text-center text-white">
                    <div className="box-counter-wrap">
                      <div className="counter-nummer"> 5+</div>
                      <div className="counter-text">Ongoing Projects</div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="box-counter text-center text-white">
                    <div className="box-counter-wrap">
                      <div className="counter-nummer">30+</div>
                      <div className="counter-text">Projects Delivered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default AboutPage;

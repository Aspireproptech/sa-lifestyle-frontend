import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.scss";

class CarouselPage4 extends Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        image: `/assets/imagewebp/project/5.png`,
        title: ``,
        // description: 'Set in Budva, Post Office Center Apartments features accommodation with a seating area and a kitchen.',
        link: "#",
      },
      {
        image: `/assets/imagewebp/project/6.png`,
        title: ``,
        // description: 'Set in Budva, Post Office Center Apartments features accommodation with a seating area and a kitchen.',
        link: "#",
      },
      {
        image: `/assets/imagewebp/project/7.png`,
        title: ``,
        // description: 'Set in Budva, Post Office Center Apartments features accommodation with a seating area and a kitchen.',
        link: "#",
      },
      {
        image: `/assets/imagewebp/project/Dog Equipment _ Dog Agility Training Equipment _ Dog Agility Course Equipment.jpg`,
        title: ``,
        // description: 'Set in Budva, Post Office Center Apartments features accommodation with a seating area and a kitchen.',
        link: "#",
      },
      {
        image: `/assets/imagewebp/project/Rectangle 2687 (1).png`,
        title: ``,
        // description: 'Set in Budva, Post Office Center Apartments features accommodation with a seating area and a kitchen.',
        link: "#",
      },
      {
        image: `/assets/imagewebp/project/Rectangle 2689 (1).png`,
        title: ``,
        // description: 'Set in Budva, Post Office Center Apartments features accommodation with a seating area and a kitchen.',
        link: "#",
      },
      {
        image: `/assets/imagewebp/project/Rectangle 2689 (2).png`,
        title: ``,
        // description: 'Set in Budva, Post Office Center Apartments features accommodation with a seating area and a kitchen.',
        link: "#",
      },
      {
        image: `/assets/imagewebp/project/Rectangle 2692.png`,
        title: ``,
        // description: 'Set in Budva, Post Office Center Apartments features accommodation with a seating area and a kitchen.',
        link: "#",
      },
    ];

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);

    this.state = {
      active: this.data[0],
    };
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  slideChange = (old, index) => {
    this.setState({
      active: this.data[index],
    });
  };

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className={"carousel1-wrap position-relative"}>
        <Slider
          ref={(slide) => (this.slider = slide)}
          {...settings}
          beforeChange={this.slideChange}
        >
          {this.data.map((data, index) => (
            <div className="slider-item" key={index}>
              <img src={data.image} alt="" width="100%" />
            </div>
          ))}
        </Slider>
        <div className="slider-content d-flex justify-content-end align-items-end flex-wrap">
          <div className="navigation">
            <button className="arrow-button arrow-prev" onClick={this.previous}>
              Previous
            </button>
            <button className="arrow-button arrow-next" onClick={this.next}>
              Next
            </button>
          </div>
          {/* <div className="slider-contentn">
                        <div className="slider-info mt-auto">
                            <h4 className="text-white text-uppercase mb-4">{this.state.active.title}</h4>
                            <p>{this.state.active.description}</p>
                            <a className="btn btn-link p-0">explore</a>
                        </div>
                    </div> */}
        </div>
      </div>
    );
  }
}

export default CarouselPage4;

import React, { Component } from "react";
// Custom Components
import HeaderOne from "./components/common/headers/header-one";
import FooterOne from "./components/common/footers/footer-one";
import PushMenu from "react-push-menu";
import LinkComponent from "./lib/menuPush/LinkComponent";
import "./lib/menuPush/component.scss";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      // isTop: true,
    };

    this.load();
  }

  load = () => {
    fetch("/api/menu.json")
      .then((response) => response.json())
      .then((res) => {
        this.menu = res;
        this.setState({ isLoading: false });
        document.querySelector(".loader-wrapper").style = "display: none";
      });
  };
  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  // handleScroll = () => {
  //   if (window.scrollY === 0) {
  //     this.setState({ isTop: true });
  //   } else {
  //     this.setState({ isTop: false });
  //   }
  // };
  render() {
    let logo =
      window.location.pathname === "/explore-terraza"
        ? "logo.png"
        : "SA-LOGO.png";
    return (
      !this.state.isLoading && (
        <div className="opal-wrapper">
          <PushMenu
            backIcon={<i className="fa fa fa-arrow-left"></i>}
            expanderComponent={() => {
              return <i className="fa fa-chevron-right"></i>;
            }}
            autoHide={true}
            nodes={{ children: this.menu }}
            type={"cover"}
            linkComponent={LinkComponent}
            propMap={{ url: "link" }}
          >
            <div id="page" className="site">
              <HeaderOne logoName={logo} menu={this.menu} />
              {this.props.children}
              {/* {!this.state.isTop && (
                <div
                  className="sticky-comp"
                  style={{ cursor: "pointer" }}
                  title="Visit Aspire Home Fest"
                >
                  <a
                    href="https://aspireprop.com/aspire-homefest2023"
                    target="_blank"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/fest.png`}
                      style={{ height: "100px" }}
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              )} */}
              <FooterOne logoName={"logo.png"} />
            </div>
          </PushMenu>
        </div>
      )
    );
  }
}

export default App;

import React, { Component } from "react";
import { Link } from "react-router-dom";
class Copyright extends Component {
  render() {
    return (
      <div className="copyright">
        <Link to={`/privacy-policy`}>
          <p style={{ textDecoration: "underline" }}>Privacy Policy</p>
        </Link>
        <p>
          Copyright © 2022 <a href="#">{this.props.title}</a>. All Rights
          Reserved.
        </p>
      </div>
    );
  }
}

export default Copyright;

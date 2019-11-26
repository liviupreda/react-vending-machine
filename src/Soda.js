import React, { Component } from "react";
import { Link } from "react-router-dom";

import SodaImg from "./Soda.png";
import "./Soda.css";

class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <h1>Soda</h1>
        <img src={SodaImg} alt="Soda" />
        <Link to="/">Go Back</Link>
      </div>
    );
  }
}

export default Soda;

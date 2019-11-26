import React, { Component } from "react";
import { Link } from "react-router-dom";

import ChipsImg from "./Chips.png";
import "./Chips.css";

class Chips extends Component {
  render() {
    return (
      <div className="Chips">
        <h1>Chips</h1>
        <img src={ChipsImg} alt="Chips" />
        <Link to="/">Go Back</Link>
      </div>
    );
  }
}

export default Chips;

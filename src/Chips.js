import React, { Component } from "react";
import ChipsImg from "./Chips.png";
import "./Chips.css";

class Chips extends Component {
  render() {
    return (
      <div className="Chips">
        <h1>Chips</h1>
        <img src={ChipsImg} alt="Chips" />
      </div>
    );
  }
}

export default Chips;

import React, { Component } from "react";
import SodaImg from "./Soda.png";
import "./Soda.css";

class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <h1>Soda</h1>
        <img src={SodaImg} alt="Soda" />
      </div>
    );
  }
}

export default Soda;

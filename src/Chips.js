import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

import ChipsImg from "./Chips.png";
import "./Chips.css";

class Chips extends Component {
  render() {
    return (
      <div className="Chips">
        <Message>
          <h1>Chips</h1>
          <Link to="/">Go Back</Link>
        </Message>
        <img src={ChipsImg} alt="Chips" />
      </div>
    );
  }
}

export default Chips;

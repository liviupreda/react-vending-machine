import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

import SodaImg from "./Soda.png";
import "./Soda.css";

class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <Message>
          <h1>Soda</h1>
          <Link to="/">Go Back</Link>
        </Message>
        <img src={SodaImg} alt="Soda" />
      </div>
    );
  }
}

export default Soda;

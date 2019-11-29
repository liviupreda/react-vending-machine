import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";
import VendingMachineImg from "./VendingMachine.png";

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <img src={VendingMachineImg} alt="Vending Machine" />
        <Message>
          <h1>Vending Machine</h1>
        </Message>
        <Message>
          <Link to="/soda">Soda</Link>
          <Link to="/chips">Chips</Link>
          <Link to="/sardines">Sardines</Link>
        </Message>
      </div>
    );
  }
}

export default VendingMachine;

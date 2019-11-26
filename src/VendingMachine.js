import React, { Component } from "react";
import "./VendingMachine.css";
import VendingMachineImg from "./VendingMachine.png";

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <img src={VendingMachineImg} alt="Vending Machine" />
        <h1>Vending Machine</h1>
      </div>
    );
  }
}

export default VendingMachine;

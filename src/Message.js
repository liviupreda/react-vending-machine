import React, { Component } from "react";
import "./Message.css";

class Message extends Component {
  render() {
    return (
      <div className="Message">
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}

export default Message;

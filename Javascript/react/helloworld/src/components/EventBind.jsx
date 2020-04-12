import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({
      message: "bye",
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
        {this.state.message}
      </div>
    );
  }
}

export default EventBind;

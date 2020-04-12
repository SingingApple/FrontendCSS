import React, { Component } from "react";
class Click extends Component {
  clickHandler() {
    console.log("class click");
  }
  render() {
    return (
      <div>
        <h3>Hello World</h3>
        <button onClick={this.clickHandler}>Clock</button>
      </div>
    );
  }
}
export { Click as default };

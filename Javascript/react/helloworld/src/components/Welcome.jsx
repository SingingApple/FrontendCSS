import React, { Component } from "react";

class Welcome extends Component {
  render(props) {
    const { name, heroName } = this.props;
    return (
      <h1>
        {name} aka {heroName}
      </h1>
    );
  }
}
export { Welcome as default };

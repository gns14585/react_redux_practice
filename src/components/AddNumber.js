import React, { Component } from "react";
import { Input } from "@chakra-ui/react";

export class AddNumber extends Component {
  state = { size: 1 };
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <Input
          type="button"
          value="+"
          onClick={function () {
            this.props.onClick(this.state.size);
          }.bind(this)}
        />
        <Input
          type="text"
          value={this.state.size}
          onChange={function (e) {
            this.setState({ size: Number(e.target.value) });
          }.bind(this)}
        />
      </div>
    );
  }
}

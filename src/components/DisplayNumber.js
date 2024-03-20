import React, { Component } from "react";
import { Input } from "@chakra-ui/react";

export class DisplayNumber extends Component {
  render() {
    return (
      <div>
        <h1>Display Number</h1>
        <Input type="button" value={this.props.number} readOnly />
      </div>
    );
  }
}

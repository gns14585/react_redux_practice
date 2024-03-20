import React, { Component } from "react";
import store from "../store";
import { DisplayNumber } from "./DisplayNumber";

export class DisplayNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Display Number Root</h1>
        <DisplayNumber></DisplayNumber>
      </div>
    );
  }
}

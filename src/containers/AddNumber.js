import React, { Component } from "react";
import { AddNumber } from "../components/AddNumber";
import store from "../store";
export default class extends Component {
  render() {
    return (
      <AddNumber
        onClick={function (size) {
          store.dispatch({ type: "INCREMENT", size: size });
        }.bind(this)}
      ></AddNumber>
    );
  }
}

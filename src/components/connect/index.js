import React, { Component } from "react";
import { Consumer } from "../context";
import { isFunction } from "../../utils";
import JRP from "../jrp";

class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { path = [], data = {}, prefix = "", children } = this.props;
    if (isFunction(children)) {
      return (
        <JRP data={data} prefix={prefix} path={path}>
          <Consumer>{props => children(props)}</Consumer>
        </JRP>
      );
    }
    return null;
  }
}

export default Connect;

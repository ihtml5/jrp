import React, { Component, cloneElement } from "react";
import jscalpel from "jscalpel";
import { emptyFunction } from "../../utils";
import { Provider } from "../";

class JRp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProps: {}
    };
  }
  componentDidMount() {
    const { data, path = [], prefix } = this.props;
    const newProps = {};
    const context = this;
    jscalpel({
      target: data,
      prefix,
      path,
      success: (...rest) => {
        const dArr = rest.filter(r => typeof r !== "undefined").slice(0, -2);
        if (Array.isArray(path)) {
          path.forEach((p, index) => {
            const pArr = p.split(".");
            let lastChar = pArr[pArr.length - 1];
            if (!isNaN(Number(lastChar))) {
              lastChar = `$${lastChar}`;
            }
            newProps[lastChar] = dArr[index];
          });
          context.setState({
            newProps
          });
        }
      }
    });
  }
  render() {
    const { newProps } = this.state;
    const { children = emptyFunction } = this.props;
    return (
      <Provider value={{ ...newProps, appName: "news" }}>{children}</Provider>
    );
  }
}
JRp.defaultProps = {
  data: {},
  path: []
};
export default JRp;

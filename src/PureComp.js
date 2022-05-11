import React, { PureComponent, Component } from "react";

class PureComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "ricky",
    };
  }

  componentDidMount() {
    this.setState({
      name: "ricky",
    });
  }

  render() {
    console.log("comonent rendered");
    return <div>Pure Component</div>;
  }
}

export default PureComp;

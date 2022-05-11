import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ricky",
    };

    console.log("LifecycleA Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifecycleA shouldComponentUpdate");
    console.log(nextProps);
    console.log(nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    console.log(prevProps);
    console.log(prevState);
    return null; // or return value of "snapshot" on componentDidUpdate
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifecycleA componentDidUpdate");
    console.log(prevProps);
    console.log(prevState);
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("LifecycleA componentWillUnmount");
  }

  componentDidCatch(error, info) {
    console.log("LifecycleA componentDidCatch");
  }

  render() {
    console.log("LifecycleA render");

    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={() => this.setState({ name: "pranaya" })}>
          Change state
        </button>
        {/* <LifecycleB /> */}
      </div>
    );
  }
}

export default LifecycleA;

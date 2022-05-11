import React, { useState } from "react";
import "./App.css";
import FuncComp from "./FuncComp";
import LifecycleA from "./LifecycleA";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

function App() {
  const [show, setShow] = useState(false);

  const un_mount = () => {
    setShow((prev) => prev);
  };

  return (
    <div className="App">
      <button onClick={un_mount}>{show ? "Hide" : "Show"}</button>
      {/* {show && <FuncComp />} */}
      {/* {show && <LifecycleA />} */}
      {/* <PureComp/> */}
      <MemoComp show={show} />
    </div>
  );
}

export default App;

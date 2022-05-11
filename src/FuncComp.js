import React, { useState, useEffect } from "react";

function FuncComp(props) {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((prev) => prev + 1);
  };
  const decrease = () => {
    // setCounter((prev) => prev - 1);
    setCounter(3);
  };

  // // componentDidMount
  // useEffect(() => {
  //   console.log("component did mount");
  //   return
  // }, []);

  // // componentDidUpdate
  // useEffect(() => {
  //   console.log("component did update");
  // }, [counter]); // only when counter change

  // // componentWillUnmount
  // useEffect(()=>{
  //   return ()=>{
  //     console.log("component will unmount")
  //   }
  // },[])

  // useEffect(() => {
  //   console.log(`component did update ${counter}`);
  //   return () => {
  //     console.log(`component will update ${counter} and unmount`);
  //   };
  // });

  return (
    <div>
      <p>Counter</p>
      <p>{counter}</p>
      <button onClick={increase} style={{ marginRight: 20 }}>
        Increase
      </button>
      <button onClick={decrease}>Set to three</button>
    </div>
  );
}

export default FuncComp;

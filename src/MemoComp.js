import React, { useState, useEffect } from "react";

function MemoComp({ show }) {
  const [name, setName] = useState("ricky");
  console.log("memo comp rendered");

  return (
    <div>
      <div>{name}</div>
      <button onClick={() => setName("ricdky")}>change name</button>
    </div>
  );
}

export default React.memo(MemoComp);

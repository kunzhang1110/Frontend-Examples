import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

export const FuncComponentLifeCycleExp = () => {
  const [count, setCount] = useState(0);

  console.log(`function body, count = ${count}`);

  useEffect(() => {
    console.log("useEffect body");

    return () => {
      console.log("useEffect return");
    };
  }, [count]);

  return (
    <>
      {console.log("function return")}
      <h1>Life Cycle</h1>
      <p>Check console logs</p>
      <div>{count}</div>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </>
  );
};

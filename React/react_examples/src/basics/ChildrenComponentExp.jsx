import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { delay } from "../util";

const Parent = ({ children }) => {
  const [count, setCount] = useState(0);

  console.log(`Parent: function body`);

  useEffect(() => {
    console.log("Parent: useEffect body");

    return () => {
      console.log("Parent: useEffect return");
    };
  }, [count]);

  return (
    <>
      {console.log("Parent: function return")}
      <div className="text-center">
        <h2>Parent</h2>
        <div>{count}</div>
        <Button onClick={() => setCount(count + 1)}>+1</Button>
        {children}
      </div>
    </>
  );
};

const Child = () => {
  const [count, setCount] = useState(0);
  console.log(`Child: function body`);

  useEffect(() => {
    console.log("Child: useEffect body");

    return () => {
      console.log("Child: useEffect return");
    };
  }, []);
  delay(1500);
  return (
    <>
      {console.log("Child: function return")}
      <h3>Child</h3>
      <div>{count}</div>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </>
  );
};

export const ChildrenComponentExp = () => {
  return (
    <>
      <h1>ChildrenComponentExample</h1>
      <p>Check console logs</p>

      <Parent children={<Child />}>
        <Child />
      </Parent>
    </>
  );
};

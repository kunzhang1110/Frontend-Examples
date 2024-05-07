import { useState, useEffect } from "react";

export const UseEffectExample = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("useEffect() after render");
    return () => { //runs before next useEffect
      console.log("clean up");
    };
  }, [state]);

  return (
    <div>
      {<h3>{state}</h3>}
      <button
        onClick={() => {
          setState((s) => s + 1);
          console.log("render");
        }}
      >
        Change State
      </button>
    </div>
  );
};

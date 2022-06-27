import { useReducer } from "react";

export const UseReducerExample = () => {
  const reducer = (state, action) => {
    return (state += action.increment);
  };

  const [val, dispatch] = useReducer(reducer, 1);

  return (
    <>
      <h2>Value: {val}</h2>
      <button onClick={() => dispatch({ increment: 1 })}>Add</button>
    </>
  );
};

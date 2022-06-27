import { useState, createContext, useContext } from "react";

const UserContext = createContext();

//Grand child changes state of parent without pass data through child
export const UseContextExample = () => {
  const [state, setState] = useState("A");

  return (
    <div>
      <UserContext.Provider value={{ state, setState }}>
        <h1>Parent State: {state}</h1>
        <Child />
      </UserContext.Provider>
    </div>
  );
};

function Child() {
  return (
    <>
      <h2>Child</h2>
      <GrandChild />
    </>
  );
}

function GrandChild() {
  const { state, setState } = useContext(UserContext);

  return (
    <>
      <h3>GrandChild State: {state}</h3>
      <button onClick={() => setState("B")}>Change State</button>
    </>
  );
}

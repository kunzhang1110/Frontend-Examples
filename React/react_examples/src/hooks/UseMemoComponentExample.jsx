import { useState, useMemo } from "react";

export const UseMemoComponentExample = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const TodosMemo = useMemo(() => <Todos todos={todos} />, [todos]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h2>My Todos</h2>
      {TodosMemo}
      <div>Count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)} className="ms-2">
        +
      </button>
      <button onClick={() => setTodos((t) => [...t, "New Todo"])}>
        Add Todo
      </button>
    </div>
  );
};

const Todos = ({ todos }) => {
  //changes in addTodo will cause re-render
  console.log("child render");
  return (
    <>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

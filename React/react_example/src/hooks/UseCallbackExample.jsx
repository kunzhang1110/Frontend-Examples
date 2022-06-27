import { useState, memo, useCallback, useMemo } from "react";

export const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };  //addTodo will change when count increments

  // const addTodo = useMemo(
  //   () => () => {
  //     setTodos((t) => [...t, "New Todo"]);
  //   },
  //   [todos]
  // ); //useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]); //addTodo won't change when count increments

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={() => setCount((c) => c + 1)} className="ms-2">
          +
        </button>
      </div>
    </div>
  );
};

const Todos = memo(({ todos, addTodo }) => {
  //changes in addTodo will cause re-render
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
});

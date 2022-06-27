import { useState, useMemo } from "react";

export const UseMemoCalculationExample = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  // const calculation = expensiveCalculation(count);
  const calculationUseMemo = useMemo(
    () => expensiveCalculation(count),
    [count]
  );

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100">
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
      <hr />
      Count: {count}
      <button onClick={increment}>+</button>
      {/* <h2>Expensive Calculation</h2>
      {calculation} */}
      <h2>Expensive Calculation useMemo</h2>
      {calculationUseMemo}
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

import { useRef, useState, useEffect } from "react";
//useRef allow us persist values between renders

export const UseRefExample = () => {
  const [input, setInput] = useState("");
  const prevInput = useRef("");

  useEffect(() => {
    prevInput.current = input;
  }, [input]);

  return (
    <div  className="d-flex flex-column align-items-center justify-content-center h-100">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h2>Current Value: {input}</h2>
      <h2>Previouse Value: {prevInput.current}</h2>
    </div>
  );
};

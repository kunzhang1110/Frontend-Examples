import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.e;
    },
  },
});

const { increment, incrementByAmount } = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export function ReduxExample() {
  return (
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  );
}

function ReduxApp() {
  const count = useSelector((state) => state.counter.value);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <h2>Redux Example</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h2>Value: {count}</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(parseInt(input)))}>
        Increment {input}
      </button>
    </>
  );
}

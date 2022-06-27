import React from "react";
import ReactDOM from "react-dom/client";
import Stock from "./Stock";


const App = () => {
  return <Stock ticker="MSFT" />;
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

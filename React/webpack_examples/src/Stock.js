import React from "react";
import styles from "./styles.css";
import icon from "./MSFT.png";

const Stock = (props) => {
  return (
    <>
      <h1 className={styles.stock}>Ticker: {props.ticker}</h1>
      <img src={icon} />
    </>
  );
};
export default Stock;

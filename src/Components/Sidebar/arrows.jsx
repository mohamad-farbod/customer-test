import React from "react";
import styles from "./Sidebar.module.css";

const Arrows = (props) => {
  return (
    <div>
      {!props.expand ? (
        <i className={`${styles.arrow} ${styles.down}`}></i>
      ) : (
        <i className={`${styles.arrow} ${styles.up}`}></i>
      )}
    </div>
  );
};

export default Arrows;

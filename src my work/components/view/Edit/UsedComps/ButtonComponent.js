/** @format */

import React from "react";
import styles from "./ButtonComponent.module.css";
const ButtonComponent = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.btnDiv}>
      <button className={styles.btn1}>PROFILE</button>
      <button className={styles.btn2}>ORDER TRACKING</button>
      <button className={styles.btn3} onClick={handleClick}>
        SETTINGS
      </button>
    </div>
  );
};

export default ButtonComponent;

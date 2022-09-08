/** @format */

import React, { useState } from "react";
import styles from "./JazzCash.module.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import jazzCash from "../../../Assets/Images/Jazz.png";
const JazzCash = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className={`"jumbotron" ${styles.PMJumbotron}`}>
            <h1 className={styles.PMheading}>
              <CreditCardIcon className={styles.pmIcon} />
              Payment Method
            </h1>
            <div className={styles.block}>
              <form>
                <div className="row">
                  <div className={styles.HeadingDiv}>
                    <img src={jazzCash} className={styles.jazz} />
                    <p className={styles.heading}>Jazz Cash</p>
                  </div>
                  <div className="col">
                    <p className={styles.storeLabelsFirst}>Card Number</p>
                    <input type="text" className={`form-control ${styles.CreateInputs}`} placeholder="Number Here" />
                  </div>
                </div>
              </form>
              <div className={styles.btnRight}>
                <button className={styles.SaveBtn}>Save</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default JazzCash;

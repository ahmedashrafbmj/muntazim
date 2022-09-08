/** @format */

import React, { useState, useEffect } from "react";
import styles from "./CashOnDelivery.module.css";
import HomeIcon from "@mui/icons-material/Home";
import CreditCardIcon from "@mui/icons-material/CreditCard";
const CashOnDelivery = () => {
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
                    <HomeIcon className={styles.icons} />
                    <p className={styles.heading}>Cash On Delivery</p>
                  </div>
                  <div className="col-md-6">
                    <p className={styles.storeLabelsFirst}>Country</p>
                    <input type="text" className={`form-control ${styles.CreateInputs}`} placeholder="Country Here" />
                  </div>
                  <div className="col-md-6">
                    <p className={styles.storeLabelsFirst}>Address</p>
                    <input type="text" className={`form-control ${styles.CreateInputs}`} placeholder="Address Here" />
                  </div>
                  <div className="col-md-6">
                    <p className={styles.storeLabelsSecond}>City</p>
                    <input type="text" className={`form-control ${styles.CreateInputs}`} placeholder="City Here" />
                  </div>
                  <div className="col-md-6">
                    <p className={styles.storeLabelsSecond}>ZIP Code</p>
                    <input type="text" className={`form-control ${styles.CreateInputs}`} placeholder="ZIP Here" />
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

export default CashOnDelivery;

/** @format */

import React, { useState, useEffect } from "react";
import styles from "./CreditCard.module.css";
import jazz from "../../../Assets/Images/Jazz.png";
import Easypaisa from "../../../Assets/Images/Easypaisa.png";
import HomeIcon from "@mui/icons-material/Home";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LockIcon from "@mui/icons-material/Lock";
import WestIcon from "@mui/icons-material/West";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PaymentIcon from "@mui/icons-material/Payment";

const CreditCard = () => {
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
                    <CreditCardIcon className={styles.icons} />
                    <p className={styles.heading}>Credit Card</p>
                  </div>
                  <div className="col-md-6">
                    <p className={styles.storeLabelsFirst}>Card Number</p>
                    <input
                      type="text"
                      className={`form-control ${styles.CreateInputs}`}
                      placeholder="Card Number Here"
                    />
                  </div>
                  <div className="col-md-6">
                    <p className={styles.storeLabelsFirst}>CVC Code</p>
                    <input type="text" className={`form-control ${styles.CreateInputs}`} placeholder="CVC Here" />
                  </div>
                  <div className="col-md-6">
                    <p className={styles.storeLabelsSecond}>Expiry</p>
                    <input
                      type="text"
                      className={`form-control ${styles.CreateInputs}`}
                      placeholder="Expiry Date Here"
                    />
                  </div>
                  <div className="col-md-6">
                    <p className={styles.storeLabelsSecond}>Card Holder</p>
                    <input
                      type="text"
                      className={`form-control ${styles.CreateInputs}`}
                      placeholder="Card Holder Here"
                    />
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

export default CreditCard;

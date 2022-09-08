/** @format */

import React, { useState } from "react";
import styles from "./PaymentMethod.module.css";
// import jazz from "../../../Assets/Images/Jazz.png";
// import Easypaisa from "../../../Assets/Images/Easypaisa.png";
import HomeIcon from "@mui/icons-material/Home";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const PaymentMethod = () => {
  const methods = [
    { id: 1, Heading: "Credit Card", Para: "1234XXXXXXX", img: CreditCardIcon },
    { id: 2, Heading: "JazzCash", Para: "1234XXXXXXX", },
    { id: 3, Heading: "Easiypaisa", Para: "1234XXXXXXX",  },
    { id: 4, Heading: "Cash On Delivery", Para: "Address Here", img: HomeIcon },
  ];
  const [method, setMethod] = useState();
  const changeHandler = (e) => {
    console.log(e.target.value);
    setMethod(e.target.value);
  };
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
            <div className="row">
              <div className="col">
                <form>
                  <div className={styles.PMDiv}>
                    {methods.map((items) => {
                      if (items.img === CreditCardIcon || items.img === HomeIcon) {
                        return (
                          <div key={items.id} className={styles.CreditDiv}>
                            <p className={styles.headings}>
                              <items.img className={styles.icons} />
                              {items.Heading}
                            </p>
                            <p className={styles.paras}>{items.Para}</p>
                            <input
                              type="radio"
                              value={items.Heading}
                              className={styles.radio}
                              name="radioButton"
                              onChange={changeHandler}
                            />
                          </div>
                        );
                      } else {
                        return (
                          <div key={items.id} className={styles.CreditDiv}>
                            <p className={styles.headings}>
                              <img className={styles.inputImages} src={items.img} alt="" />
                              {items.Heading}
                            </p>
                            <p className={styles.paras}>{items.Para}</p>
                            <input
                              type="radio"
                              value={items.Heading}
                              className={styles.radio}
                              name="radioButton"
                              onChange={changeHandler}
                            />
                          </div>
                        );
                      }
                    })}
                  </div>
                  <button className={styles.choose}>Choose</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default PaymentMethod;

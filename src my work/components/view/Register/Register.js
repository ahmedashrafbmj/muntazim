/** @format */

import React from "react";
import styles from "./Register.module.css";
const Register = () => {
  return (
    <div className={styles.body}>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className={`jumbotron ${styles.registerJumbo}`}>
              <div className="row">
                <div className="col-md-6">
                  <div className={`${styles.CreateHeading}`}>
                    <p className={`${styles.CreateAccountPara}`}>CREATE AN ACCOUNT</p>
                  </div>
                  <div className={styles.formDiv}>
                    <label className={`form-label ${styles.registerLabel}`}>First Name</label>
                    <input type="text" className={`form-control ${styles.signupInp}`} />
                    <label className={`form-label  ${styles.registerLabel}`}>Last Name</label>
                    <input type="text" className={`form-control ${styles.signupInp}`} />
                    <label className={`form-label  ${styles.registerLabel}`}>Phone Number</label>
                    <input type="text" className={`form-control ${styles.signupInp}`} />
                    <label className={`form-label  ${styles.registerLabel}`}>Password</label>
                    <input type="password" className={`form-control ${styles.signupInp}`} />
                  </div>
                  <div>
                    <button className={styles.signupBtn}>Sign Up</button>
                  </div>
                </div>
                <div className={`col-md-1 ${styles.vl}`}>
                  <div className={styles.verticalLine}></div>
                </div>
                <div className="col-md-4">
                  <div className={styles.buttonDiv}>
                    <p className={styles.signupPara}>
                      <hr className="my-0" /> or sign up using <hr className="my-0" />
                    </p>
                    <button type="button" className={styles.googleBtn}>
                      Sign up using Google
                    </button>
                    <button type="button" className={styles.facebookBtn}>
                      Sign up using Facebook
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;

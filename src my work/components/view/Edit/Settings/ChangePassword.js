/** @format */

import React from "react";
import styles from "./ChangePassword.module.css";
import Body from "../UsedComps/Body";
import ButtonComponent from "../UsedComps/ButtonComponent";
import LockIcon from "@mui/icons-material/Lock";
import WestIcon from "@mui/icons-material/West";

const ChangePassword = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Body />
          <div className={`jumbotron ${styles.CPJumbo}`}>
            <div className={styles.btnDiv}>
              <button className={styles.btn1}>PROFILE</button>
              <button className={styles.btn2}>ORDER TRACKING</button>
              <button className={styles.btn3}>SETTINGS</button>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <div className={styles.block}>
                  <form>
                    <div className="row">
                      <div className={styles.HeadingDiv}>
                        <LockIcon className={styles.icons} />
                        <p className={styles.heading}>Change Password</p>
                        <WestIcon className={styles.westIcon} />
                      </div>
                      <div className="col-md-6">
                        <p className={styles.storeLabelsFirst}>Current Password</p>
                        <input
                          type="password"
                          className={`form-control ${styles.CreateInputs}`}
                          placeholder="Password Here"
                        />
                      </div>
                      <div className="col-md-6">
                        <p className={styles.storeLabelsFirst}>New Password</p>
                        <input
                          type="password"
                          className={`form-control ${styles.CreateInputs}`}
                          placeholder="New Password"
                        />
                      </div>
                      <div className="col-md-6">
                        <p className={styles.storeLabelsSecond}>Confirm Password</p>
                        <input
                          type="password"
                          className={`form-control ${styles.CreateInputs}`}
                          placeholder="Confirm Password"
                        />
                      </div>
                      <div className="col-md-6">
                        <div className={styles.btnRight}>
                          <button className={styles.SaveBtn}>Save</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default ChangePassword;

/** @format */

import React from "react";
import styles from "./TFAuthentication.module.css";
import Body from "../UsedComps/Body";
import SyncLockIcon from "@mui/icons-material/SyncLock";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WestIcon from "@mui/icons-material/West";
import ButtonComponent from "../UsedComps/ButtonComponent";
const TFAuthentication = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Body />
          <div className={`jumbotron ${styles.TFJumbo}`}>
            <div className={styles.btnDiv}>
              <button className={styles.btn1}>PROFILE</button>
              <button className={styles.btn2}>ORDER TRACKING</button>
              <button className={styles.btn3}>SETTINGS</button>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <div className={styles.block}>
                  <div className="row">
                    <div className="col">
                      <SyncLockIcon className={styles.icons} />
                      <p className={styles.heading}>Two-Factor Authentication</p>
                      <WestIcon className={styles.westIcon} />
                      <div className={styles.lowerDiv}>
                        <p className={styles.para}>
                          Two-factor authentication protects your account by requiring an additional code when you log
                          in on a device that we don't recognize.
                        </p>
                        <div className={styles.inputDiv}>
                          <PhoneAndroidIcon className={styles.PhoneIcon} />
                          <p className={styles.headings}>SMS Notification</p>
                          <input type="checkbox" className={styles.radio} name="checkbox" />
                        </div>
                      </div>
                      <div className={styles.btnRight}>
                        <button className={styles.SaveBtn}>Save</button>
                      </div>
                    </div>
                  </div>
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

export default TFAuthentication;

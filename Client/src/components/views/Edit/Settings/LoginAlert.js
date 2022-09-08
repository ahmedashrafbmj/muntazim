/** @format */

import React from "react";
import styles from "./LoginAlert.module.css";
import Body from "../UsedComps/Body";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WestIcon from "@mui/icons-material/West";
import EmailIcon from "@mui/icons-material/Email";
import ButtonComponent from "../UsedComps/ButtonComponent";
const LoginAlert = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Body />
          <div className={`jumbotron ${styles.loginJumbo}`}>
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
                      <NotificationsActiveIcon className={styles.icons} />
                      <p className={styles.heading}>Log-in Alerts</p>
                      <WestIcon className={styles.westIcon} />
                      <div className={styles.lowerDiv}>
                        <p className={styles.para}>
                          Manage how you'd like tp be notified about unrecognized logins to your account.
                        </p>
                        <div className={styles.inputDiv}>
                          <PhoneAndroidIcon className={styles.Icon} />
                          <p className={styles.headings}>SMS Notification</p>
                          <input type="checkbox" className={styles.radio} name="checkbox" />
                        </div>
                        <div className={styles.inputDiv}>
                          <EmailIcon className={styles.Icon} />
                          <p className={styles.headings}>Email Notification</p>
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

export default LoginAlert;

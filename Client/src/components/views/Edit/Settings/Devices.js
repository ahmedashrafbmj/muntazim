/** @format */

import React from "react";
import styles from "./Devices.module.css";
import Body from "../UsedComps/Body";
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WestIcon from "@mui/icons-material/West";

import ButtonComponent from "../UsedComps/ButtonComponent";
const Devices = () => {
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
                      <DeviceUnknownIcon className={styles.icons} />
                      <p className={styles.heading}>Devices You're logged in</p>
                      <WestIcon className={styles.westIcon} />
                      <div className={styles.lowerDiv}>
                        <p className={styles.para}>
                          Review login activity for this account and logout of any that you don't recognize.
                        </p>
                        <div className={styles.inputDiv}>
                          <PhoneAndroidIcon className={styles.Icon} />
                          <p className={styles.headings}>Realme C25s</p>
                          <input type="checkbox" className={styles.radio} name="checkbox" />
                          <p className={styles.InnerPara}>
                            Jeddah, KSA <br />
                            Yesterday at 1:49Pm
                          </p>
                        </div>
                        <div className={styles.inputDiv}>
                          <PhoneAndroidIcon className={styles.Icon} />
                          <p className={styles.headings}>Oppo Reno 3F</p>
                          <input type="checkbox" className={styles.radio} name="checkbox" />
                          <p className={styles.InnerPara}>
                            Karachi, PK <br />
                            Yesterday at 1:49Pm
                          </p>
                        </div>
                      </div>
                      <div className={styles.btnRight}>
                        <button className={styles.Logout}>Logout</button>
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

export default Devices;

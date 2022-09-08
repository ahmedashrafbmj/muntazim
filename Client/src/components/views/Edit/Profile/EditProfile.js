/** @format */

import React from "react";
import styles from "./EditProfile.module.css";
import Body from "../UsedComps/Body";
import ButtonComponent from "../UsedComps/ButtonComponent";
import LockIcon from "@mui/icons-material/Lock";
import WestIcon from "@mui/icons-material/West";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PaymentIcon from "@mui/icons-material/Payment";

const EditProfile = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Body />
          <div className={`jumbotron ${styles.EPJumbo}`}>
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
                        <p className={styles.heading}>Personal Information</p>
                        <WestIcon className={styles.westIcon} />
                      </div>
                      <div className="col-md-6">
                        <p className={styles.storeLabelsFirst}>
                          <PhoneIphoneIcon /> Phone
                        </p>
                        <input
                          type="text"
                          className={`form-control ${styles.CreateInputs}`}
                          placeholder="Number Here"
                        />
                      </div>
                      <div className="col-md-6">
                        <p className={styles.storeLabelsFirst}>
                          <LocationCityIcon /> City
                        </p>
                        <input type="text" className={`form-control ${styles.CreateInputs}`} placeholder="City Here" />
                      </div>
                      <div className="col-md-6">
                        <p className={styles.storeLabelsSecond}>
                          <EmailIcon /> Email
                        </p>
                        <input type="text" className={`form-control ${styles.CreateInputs}`} placeholder="Email Here" />
                      </div>
                      <div className="col-md-6">
                        <p className={styles.storeLabelsSecond}>
                          <PaymentIcon /> CNIC
                        </p>
                        <input type="text" className={`form-control ${styles.CreateInputs}`} placeholder="CNIC Here" />
                      </div>
                    </div>
                  </form>
                  <div className={styles.btnRight}>
                    <button className={styles.SaveBtn}>Save</button>
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

export default EditProfile;

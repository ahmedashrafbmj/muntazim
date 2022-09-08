/** @format */

import React from "react";
import styles from "./Profile.module.css";
import Body from "../UsedComps/Body";
import InfoIcon from "@mui/icons-material/Info";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PaymentIcon from "@mui/icons-material/Payment";
const Profile = () => {
  const info = [
    { id: 1, heading: "Phone", name: "03122XXXXXX", icons: PhoneIphoneIcon },
    { id: 2, heading: "City", name: "Karachi, Pakistan", icons: LocationCityIcon },
    { id: 3, heading: "Email", name: "Jane.Doe@xyz.com", icons: EmailIcon },
    { id: 4, heading: "CINC", name: "12345-6789-10-11", icons: PaymentIcon },
  ];
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Body />
          <div className={`jumbotron ${styles.ProfileJumbo}`}>
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
                        <InfoIcon className={styles.icons} />
                        <p className={styles.heading}>Personal Information</p>
                      </div>
                      {info.map((items) => (
                        <div className="col-md-6">
                          <p className={styles.storeLabelsFirst}>
                            <items.icons /> {items.heading}
                          </p>
                          <p className={styles.data}>{items.name}</p>
                        </div>
                      ))}
                    </div>
                    <div className={styles.btnRight}>
                      <button className={styles.EditBtn}>Edit</button>
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

export default Profile;

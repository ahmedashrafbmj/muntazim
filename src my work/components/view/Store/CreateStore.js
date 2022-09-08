/** @format */

import React from "react";
import styles from "./CreateStore.module.css";
import StoreIcon from "@mui/icons-material/Store";
const CreateStore = () => {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className={`jumbotron ${styles.CreateStoreJumbo}`}>
            <h1 className={styles.mainHeading}>
              <StoreIcon style={{ color: "#bf1b66" }} /> Create A Store
            </h1>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <p className={styles.storeLabelsFirst}>Select Store Domain</p>
                  <select className={`form-select ${styles.CreateInputs}`}>
                    <option>Photography</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <p className={styles.storeLabelsFirst}>Store Phone Number</p>
                  <input type="text" className={`form-control ${styles.CreateInputs}`} placeholder="Type Number here" />
                </div>
                <div className="col-md-6">
                  <p className={styles.storeLabelsSecond}>Store Name</p>
                  <input
                    type="text"
                    className={`form-control ${styles.CreateInputs}`}
                    placeholder="Type Store Name here"
                  />
                </div>
                <div className="col-md-6">
                  <p className={styles.storeLabelsSecond}>Store Address</p>
                  <input
                    type="text"
                    className={`form-control ${styles.CreateInputs}`}
                    placeholder="Type Address here"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="ButtonDiv">
            <button className={styles.clear}>Clear</button>
            <button className={styles.next}>Next</button>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default CreateStore;

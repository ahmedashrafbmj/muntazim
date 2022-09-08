/** @format */

import React, { useState } from "react";
import styles from "./CreateStoreProfile.module.css";
import StoreIcon from "@mui/icons-material/Store";
import AddIcon from "@mui/icons-material/Add";
const CreateStoreProfile = () => {
  const [file, setfile] = useState();
  const [imagePreviewUrl, setimagePreviewUrl] = useState();

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setfile(file);
      setimagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className={`jumbotron ${styles.StoreProfileJumbo}`}>
            <h1 className={styles.StoreProfileHeading}>
              <StoreIcon style={{ color: "#bf1b66" }} /> Create A Store
            </h1>
            <p className={styles.StoreSubHeading}>Upload Store Profile Picture</p>
            <div className={styles.pictureDiv}>
              <div className={styles.IconDiv}>
                <AddIcon className={styles.plusIcon} />
              </div>
              <img className={styles.profileImage} src={imagePreviewUrl} alt="" />
            </div>
            <div className={styles.labelDiv}>
              <label className={styles.UploadPictureLabel}>
                Upload
                <input type="file" className={styles.ProfileInp} onChange={photoUpload} />
              </label>
            </div>
          </div>

          <div>
            <button className={styles.save}>save</button>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default CreateStoreProfile;

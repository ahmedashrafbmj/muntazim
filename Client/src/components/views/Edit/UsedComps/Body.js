/** @format */

import React, { useState } from "react";
import bodyStyles from "./Body.module.css";
import profile from "../../../../Assets/Images/profile.png";
import EditIcon from "@mui/icons-material/Edit";
const Body = () => {
  const [file, setfile] = useState();
  const [imagePreviewUrl, setimagePreviewUrl] = useState(profile);
  const [isShown, setIsShown] = useState(false);
  const [name, setName] = useState("Jane Doe");
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
  const handleClick = (event) => {
    // 👇️ or simply set it to true
    setIsShown(true);
  };
  const OnNameChange = (e) => {
    e.preventDefault();
    var newName = e.target.value;
    setName(newName);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsShown(false);
    }
  };

  return (
    <div className={bodyStyles.headingDiv}>
      <div className={bodyStyles["custom-file-upload"]}>
        <img htmlFor="photo-upload" src={imagePreviewUrl} className={bodyStyles.imageWrap} />
        <label className={bodyStyles.labelIn}>
          <input id="photo-upload" type="file" onChange={photoUpload} />
        </label>
      </div>
      <div className={bodyStyles.NameDiv}>
        <div className={bodyStyles.iconWrapper} onClick={handleClick}>
          <EditIcon className={bodyStyles.editIcon} />
        </div>
        {!isShown ? (
          <p className={bodyStyles.InitialName}>{name}</p>
        ) : (
          <input type="text" className={bodyStyles.NameInput} onChange={OnNameChange} onKeyDown={handleKeyDown} />
        )}
      </div>
    </div>
  );
};

export default Body;

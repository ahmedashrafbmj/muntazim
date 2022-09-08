/** @format */

import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
const ImageUpload = () => {
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
    <div>
      <div className="img-wrap img-upload">
        <Avatar src={imagePreviewUrl} sx={{ width: 150, height: 150 }} className="avatar" />
      </div>
      <label className="UploadInputLabel">
        Upload
        <input type="file" className="avatarInp" onChange={photoUpload} />
      </label>
    </div>
  );
};

export default ImageUpload;

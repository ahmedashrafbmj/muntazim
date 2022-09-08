/** @format */
import "./ProfilePic.css";
import React from "react";
import ImageUpload from "./ImageUpload";
function ProfilePic() {
  return (
    <>
      <div className="body">
        <div className="jumbotron customjumbo" style={{ backdropFilter: "blur(10px)" }}>
          <h4 className="personal">Personal Details</h4>
          <div class="container mid-con">
            <div class="row card1">
              <div className="profileDiv">
                <div className="imgdv">
                  <ImageUpload />
                </div>
              </div>
            </div>
          </div>
          <button type="button" class="btn btn-lg custombutton">
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfilePic;

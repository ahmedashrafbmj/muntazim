/** @format */
import "./Profile.css";
import React from "react";

function Profile() {
  return (
    <>
      <div className="body">
        <div className="jumbotron customjumbo" style={{ backdropFilter: "blur(10px)" }}>
          <h4 className="personal">Personal Details</h4>
          <div class="container mid-con">
            <div class="row card1">
              <div class="col-md-6 firstBlock">
                <p className="profilePara">First Name</p>
                <input className="Inp1" type="text" />
              </div>
              <div class="col-md-6 firstBlock">
                <p className="profilePara">Last Name</p>
                <input className="Inp1" type="text" />
              </div>
              <div class="col-md-6 secondBlock">
                <p className="profilePara">Number</p>
                <input type="text" className="Inp2" />
              </div>
              <div class="col-md-6 secondBlock">
                <p className="profilePara">Email Address</p>
                <input className="Inp2" type="text" />
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

export default Profile;

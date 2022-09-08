/** @format */

import React from "react";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min";
import Orders from "./views/orders/Orders"
import DueStatus from "./views/Due status/DueStatus"
import PaymentMethod from "./views/Payment Method/PaymentMethod"
import Profile from "./views/ProfileDetails/Profile";
import Register from "./views/Register/Register"
import CreateStore from "./views/Store/CreateStore";
import ProfilePic from "./views/ProfilePicture/ProfilePic";
const App = () => {
  return (
    <div>
      <CreateStore/>
    </div>
  );
};

export default App;

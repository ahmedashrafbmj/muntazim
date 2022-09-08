/** @format */

import React from "react";
import Body from "../UsedComps/Body";
import ButtonComponent from "../UsedComps/ButtonComponent";
import settingStyles from "./Settings.module.css";
import LockIcon from "@mui/icons-material/Lock";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SyncLockIcon from "@mui/icons-material/SyncLock";
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";
import AddCardIcon from "@mui/icons-material/AddCard";
import EastIcon from "@mui/icons-material/East";
import settings from "./Settings.module.css";
const Settings = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Body />
          <div className={`jumbotron ${settingStyles.bodyJumbo}`}>
            <div className={settingStyles.btnDiv}>
              <button className={settingStyles.btn1}>PROFILE</button>
              <button className={settingStyles.btn2}>ORDER TRACKING</button>
              <button className={settingStyles.btn3}>SETTINGS</button>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <button className={settings.allBtn}>
                  <LockIcon className={settings.icons} />
                  <p className={settings.name}>Change Password</p>
                  <EastIcon className={settings.eastIcon} />
                </button>

                <button className={settings.allBtn}>
                  <NotificationsActiveIcon className={settings.icons} />
                  <p className={settings.name}>Log-in Alerts</p>
                  <EastIcon className={settings.eastIcon} />
                </button>

                <button className={settings.allBtn}>
                  <SyncLockIcon className={settings.icons} />
                  <p className={settings.name}>Two Factor Authentication</p>
                  <EastIcon className={settings.eastIcon} />
                </button>

                <button className={settings.allBtn}>
                  <DeviceUnknownIcon className={settings.icons} />
                  <p className={settings.name}>Devices Your'e logged in</p>
                  <EastIcon className={settings.eastIcon} />
                </button>
                <button className={settings.allBtn}>
                  <AddCardIcon className={settings.icons} />
                  <p className={settings.name}>Payment Method</p>
                  <EastIcon className={settings.eastIcon} />
                </button>
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

export default Settings;

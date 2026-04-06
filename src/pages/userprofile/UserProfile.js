import React from "react";
import {
  PermIdentity,
  CalendarToday,
  LocationSearching,
  MailOutline,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import "./userprofile.css";
import { Link } from "react-router-dom";

export default function UserProfile() {
  return (
    <div className="profileTopContainer">
      <div className="profileTitleContrainer">
        <h1 className="profileTitle">Edit Profile</h1>
        <Link to="/createuser">
          <button className="profileAddButton">Create User</button>
        </Link>
      </div>
      <div className="profileContainer">
        <div className="profileShow">
          <div className="profileShowTop">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
              className="profileShowImg"
            />
            <div className="profileDetails">
              <span className="myProfileName">Daisy Dominic</span>
              <span className="myProfileTitle">React Dev</span>
            </div>
          </div>
          <div className="profileShowBottom">
            <span className="profileShowTitle">Account Details</span>
            <div className="profileShowInfo">
              <PermIdentity className="profileShowIcon" />
              <span className="profileShowInfoTitle">Daisy234</span>
            </div>
            <div className="profileShowInfo">
              <CalendarToday className="profileShowIcon" />
              <span className="profileShowInfoTitle">12 dec 2022</span>
            </div>
            <div className="profileShowInfo">
              <PhoneAndroid className="profileShowIcon" />
              <span className="profileShowInfoTitle">+14 4225 343</span>
            </div>
            <div className="profileShowInfo">
              <MailOutline className="profileShowIcon" />
              <span className="profileShowInfoTitle">Daisy234@gmail.com</span>
            </div>
            <div className="profileShowInfo">
              <LocationSearching className="profileShowIcon" />
              <span className="profileShowInfoTitle">New York City</span>
            </div>
          </div>
        </div>

        <div className="profileUpdate">
          <span className="profileUpdateTitle">Edit</span>
          <form className="profileUpdateForm">
            <div className="profileUpdateLeft">
              <div className="profileUpdateItem">
                <label>profile name</label>
                <input
                  type="text"
                  placeholder="daisy234"
                  className="profileUpdateInput"
                ></input>
              </div>
              <div className="profileUpdateItem">
                <label>full name</label>
                <input
                  type="text"
                  placeholder="daisy234"
                  className="profileUpdateInput"
                ></input>
              </div>
              <div className="profileUpdateItem">
                <label>email</label>
                <input
                  type="text"
                  placeholder="daisy234"
                  className="profileUpdateInput"
                ></input>
              </div>
              <div className="profileUpdateItem">
                <label>phone</label>
                <input
                  type="text"
                  placeholder="daisy234"
                  className="profileUpdateInput"
                ></input>
              </div>
              <div className="profileUpdateItem">
                <label>address</label>
                <input
                  type="text"
                  placeholder="daisy234"
                  className="profileUpdateInput"
                ></input>
              </div>
            </div>

            <div className="profileUpdateRight">
              <div className="profileUpdateUpload">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                  className="profileUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="profileUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                ></input>
              </div>
              <button className="profileUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

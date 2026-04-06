import React from "react";
import "./createuser.css";

export default function CreateUser() {
  return (
    <div className="createUserContainer">
      <h1 className="newUserTitle">New User</h1>
      <form className="createUserForm">
        <div className="newUserItem">
          <label>UserName</label>
          <input type="text" placeholder="Daisy" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Daisy Dominic" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="text" placeholder="Daisy@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Paasword</label>
          <input type="text" placeholder="******" />
        </div>
        <div className="newUserItem">
          <label>phone</label>
          <input type="text" placeholder="+141 6871 21" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York City" />
        </div>
        <div className="newUserItem">
          <label>Age</label>
          <input type="text" placeholder="28" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}

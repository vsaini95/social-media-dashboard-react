import React from "react";
import "./header.css";

const headerContent = (props) => {
  return (
    <div className="headerDiv">
      <div>
        <h1>Social Media Dashboard</h1>
        <p className="totalF">Total Followers: 23,004</p>
      </div>
      <div>
        <p>Dark Mode</p>
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default headerContent;

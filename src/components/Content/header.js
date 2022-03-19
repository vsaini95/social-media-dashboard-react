import React from "react";
import "./header.css";

const headerContent = (props) => {
  const body = document.querySelector("body");
  body.classList.add("light");
  const eventHandler = () => {
    body.classList.toggle("light");
    body.classList.toggle("dark");
  };
  return (
    <div className="headerDiv">
      <div>
        <h1 className="h1">Social Media Dashboard</h1>
        <p className="totalF">Total Followers: 23,004</p>
      </div>
      <div class="flex">
        <p className="darkMode">Dark Mode</p>
        <input
          type="checkbox"
          id="switch"
          class="checkbox"
          onClick={eventHandler}
        />
        <label htmlFor="switch" class="toggle"></label>
      </div>
    </div>
  );
};

export default headerContent;

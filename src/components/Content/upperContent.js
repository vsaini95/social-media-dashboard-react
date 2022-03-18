import React from "react";
import "./upperContent.css";

const CardDetails = [
  {
    image: "images/icon-facebook.svg",
    name: "@nathanf",
    followersNo: "1987",
    type: "followers",
    vIcon: "up",
    vote: "12",
  },
  {
    image: "images/icon-twitter.svg",
    name: "@nathanf",
    followersNo: "1044",
    type: "followers",
    vIcon: "up",
    vote: "99",
  },
  {
    image: "images/icon-instagram.svg",
    name: "@realnathanf",
    followersNo: "11k",
    type: "followers",
    vIcon: "up",
    vote: "1099",
  },
  {
    image: "images/icon-youtube.svg",
    name: "Nathan F.",
    followersNo: "8239",
    type: "subscribers",
    vIcon: "down",
    vote: "144",
  },
];
function SocialContent() {
  let SocialCards = CardDetails.map((element, i) => {
    return (
      <div className="box1">
        <div className="flex">
          <img className="icon" src={element.image} />
          <div className="name">{element.name}</div>
        </div>
        <h1 className="count">{element.followersNo}</h1>
        <div className="type">{element.type}</div>
        <div className="flex">
          <img className="iconvote" src={`images/icon-${element.vIcon}.svg`} />
          <p className={`${element.vIcon}`}>{element.vote} Today</p>
        </div>
      </div>
    );
  });
  return <div className="row">{SocialCards}</div>;
}

export default SocialContent;

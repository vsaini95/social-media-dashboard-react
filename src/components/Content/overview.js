import React from "react";
import "./overview.css";

const oDetails = [
  {
    content: "Page Views",
    Icon: "images/icon-facebook.svg",
    contentNo: "87",
    vTcon: "up",
    vote: "3%",
  },
  {
    content: "Likes",
    Icon: "images/icon-facebook.svg",
    contentNo: "52",
    vTcon: "down",
    vote: "2%",
  },
  {
    content: "Likes",
    Icon: "images/icon-instagram.svg",
    contentNo: "5462",
    vTcon: "up",
    vote: "2257%",
  },
  {
    content: "Profile Views",
    Icon: "images/icon-instagram.svg",
    contentNo: "52k",
    vTcon: "up",
    vote: "1375%",
  },
  {
    content: "Retweets",
    Icon: "images/icon-twitter.svg",
    contentNo: "117",
    vTcon: "up",
    vote: "303%",
  },
  {
    content: "Likes",
    Icon: "images/icon-twitter.svg",
    contentNo: "507",
    vTcon: "up",
    vote: "553%",
  },
  {
    content: "Lkies",
    Icon: "images/icon-youtube.svg",
    contentNo: "107",
    vTcon: "down",
    vote: "19%",
  },
  {
    content: "Total Views",
    Icon: "images/icon-youtube.svg",
    contentNo: "1407",
    vTcon: "down",
    vote: "12%",
  },
];
function overviewContent() {
  let Cards = oDetails.map((elem, i) => {
    return (
      <div className="box2">
        <div className="flex2">
          <div className="name2">{elem.content}</div>
          <img className="icon2" src={elem.Icon} />
        </div>
        <div className="flex2 line2">
          <h1>{elem.contentNo}</h1>
          <div className="flex2 line2">
            <img className="iconvote2" src={`images/icon-${elem.vTcon}.svg`} />
            <p className={`${elem.vTcon}2`}>{elem.vote}</p>
          </div>
        </div>
      </div>
    );
  });
  return <div className="row2">{Cards}</div>;
}

export default overviewContent;

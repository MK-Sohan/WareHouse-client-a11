import React from "react";
import { Link } from "react-router-dom";
import video from "../../../images/banner video/raspberries_-_3777 (Original).mp4";
import "./Video.css";
const Video = () => {
  return (
    <div className=" main">
      <video src={video} autoPlay loop muted></video>
      <div className="content">
        <p>100% Natural </p>
        <h1>Organic Fruits</h1>
        <p>Fresh New Pack Brushting Fruit</p>

        <button className="btnn">About Us</button>
      </div>
    </div>
  );
};

export default Video;

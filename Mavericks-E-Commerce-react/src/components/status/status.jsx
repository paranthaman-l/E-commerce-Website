import React from "react";
import "./status.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { RiTruckFill } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TbCircleDot } from "react-icons/tb";
const Status = (props) => {
  return (
    <div className="Status">
      <h1>
        <u>Order Status</u>
      </h1>
      <h2>Invoice:12Ai304</h2>
      <div
        className="backarrow"
        onClick={() => {
          props.back(false);
        }}
      >
        <IoMdArrowRoundBack />
      </div>
      <AiOutlineHeart className="heart" />
      <img
        src="https://res.cloudinary.com/doz5njr9h/image/upload/v1670397254/image-removebg-preview_or0wzb.png"
        alt=""
      />
      <div className="bottom">
        <ul>
          <li>
            <AiFillClockCircle className="clock1 c1" /> Order Received
          </li>
          <li>
            <RiTruckFill className="clock1 c2" /> On the way
          </li>
          <li>
            <AiFillCheckCircle className="clock1 c3" />
            Delivery
          </li>
        </ul>
        <div className="border11" />
        <div className="border22" />
      </div>
      <div className="timings">
        <ul>
          <li>
            <AiOutlineClockCircle />
            09.10AM,05 Jan 2023
          </li>
          <li>
            <AiOutlineClockCircle />
            09.50AM,05 Jan 2023
          </li>
          <li>
            <AiOutlineClockCircle />
            Finish time is 16min
          </li>
        </ul>
        <button className="tracking">
          <TbCircleDot />
          Tracking
        </button>
        <button className="delevery">Confirm Delevery</button>
      </div>
    </div>
  );
};

export default Status;

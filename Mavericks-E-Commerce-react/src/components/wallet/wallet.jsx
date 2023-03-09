import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

import { MdOutlineMonetizationOn } from "react-icons/md";
import { AiFillBank } from "react-icons/ai";
import { FaGifts } from "react-icons/fa";
import { CgFolderAdd } from "react-icons/cg";
import { AiOutlineDown } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";

import "./wallet.css";
const Wallet = (props) => {
  return (
    <div className="Wallet">
      <div
        className="backarrow"
        onClick={() => {
          props.back(false);
        }}
      >
        <IoMdArrowRoundBack />
      </div>

      <h6>
        <IoMdSettings className="settings"></IoMdSettings>Settings
      </h6>
      <div className="center">
        <h4>Mavericks Balance</h4>
        <h5>₹0</h5>
        <AiOutlineDown className="down" />
      </div>
      <div className="balance">
        <ul>
          <li>
            <MdOutlineMonetizationOn className="bal" />
          </li>
          <li>
            <AiFillBank className="bank" />
          </li>
          <li>
            <FaGifts className="gift" />
          </li>
          <li>
            <CgFolderAdd className="money" />
          </li>
        </ul>
      </div>
      <div className="point">
        <ul>
          <li>Pay</li>
          <li>Transfer to Bank</li>
          <li>Sent a gift voucher</li>
          <li>Add Money</li>
        </ul>
      </div>

      <div className="bottom">
        <h4>Add Money to</h4>
        <h5>
          <b>
            <u>Payment Wallet</u>
          </b>
        </h5>
        <AiOutlineDown className="down" />
        <h3>₹1000</h3> <h2>Apply Promo</h2>
        <div className="money">
          <ul>
            <li>+₹100</li>
            <li>+₹200</li>
            <li>+₹1000</li>
            <li>+₹20</li>
          </ul>
        </div>
        <button className="proceed">Proceed to add ₹1000</button>
      </div>
    </div>
  );
};

export default Wallet;

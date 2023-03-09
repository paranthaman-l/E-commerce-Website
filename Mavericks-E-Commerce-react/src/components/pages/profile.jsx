import React from "react";
import "./profile.css";
import { GiCancel } from "react-icons/gi";
import {  BiLogOutCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsHouseDoorFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { MdOutlineAnalytics } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";
import { TbReportMoney } from "react-icons/tb";
import Address from "../address/address";
import Status from "../status/status";
import Wallet from "../wallet/wallet";
import Pedit from "../pedit/pedit";
import { Link, useNavigate } from "react-router-dom";
import { useStates } from "../../States";
import swal from "sweetalert";

const Profile = () => {
  const navigate = useNavigate();
  const {
    user,
    handleLogout,
    showAddress,
    setShowAddress,
    showStatus,
    setShowStatus,
    showWallet,
    setShowWallet,
    viewProfile,
    setViewProfile,
    userName,
  } = useStates();
  const LogoutBtn = () => {
    swal("Are you Sure Logout?", {
      buttons: {
        cancel: "No",
        Confirm: true,
      },
    }).then((value) => {
      switch (value) {
        case "Confirm":
          handleLogout();
          break;
        default:
          break;
      }
    });
  };
  // console.log(user.email);
  return (
    <div className="page">
      <div className="contents">
        <img
          src={
            user
              ? user?.photoURL
              : "https://res.cloudinary.com/doz5njr9h/image/upload/v1670305416/image44_ybup9o.jpg"
          }
          alt=""
        />
        <GiCancel onClick={() => navigate(-1)} className="cancel" />
        <h1 className="name">{userName || user?.displayName || "Guest"}</h1>
        <CgProfile
          className="edit"
          onClick={() => {
            setViewProfile(!viewProfile);
            setShowAddress(false);
            setShowStatus(false);
            setShowWallet(false);
          }}
        />
        <div className="border1" />
        <div className="list">
          <ul>
            <Link to={`/home/${localStorage.getItem("auth")}`}>
              <li>
                <BsHouseDoorFill className="one" />
                <p>Home</p>
              </li>
            </Link>
            <li
              className="address"
              onClick={() => {
                setShowAddress(!showAddress);
                setViewProfile(false);
                setShowStatus(false);
                setShowWallet(false);
              }}
            >
              <TiLocation className="two" />
              <p>Address</p>
            </li>
            <li
              className="status"
              onClick={() => {
                setShowStatus(!showStatus);
                setShowAddress(false);
                setViewProfile(false);
                setShowWallet(false);
              }}
            >
              <MdOutlineAnalytics className="three" />
              <p>Status</p>
            </li>
            <Link to="/payment">
              <li>
                <TbReportMoney className="four" />
                <p>Payment & Refunds</p>
              </li>
            </Link>
            <li
              className="wallet"
              onClick={() => {
                setShowWallet(!showWallet);
                setShowStatus(false);
                setShowAddress(false);
                setViewProfile(false);
              }}
            >
              <FaWallet className="five" />
              <p>Wallet</p>
            </li>
            <Link to="/aboutus">
              <li>
                <BiHelpCircle className="six" />
                <p>Help & AboutUs</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="border2" />
        <div className="logout">
          <BiLogOutCircle className="logout-icon" />
          {/* function(event){logout();handleLogout()} */}
          <button onClick={LogoutBtn}>Logout</button>
        </div>
      </div>
      <div className="display">
        {showAddress && <Address back={setShowAddress} />}
        {showStatus && <Status back={setShowStatus} />}
        {showWallet && <Wallet back={setShowWallet} />}
        {viewProfile && <Pedit back={setViewProfile} />}
      </div>
    </div>
  );
};

export default Profile;

import React, { useState } from "react";
import "./PaymentOption.css";
import { MdLocationOn, MdOutlinePayment } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { BsChevronRight } from "react-icons/bs";
import Wallet from "../Payment/Wallet";
import Upi from "../Payment/Upi";
import DCcard from "../Payment/DCcard";
import { useStates } from "../../States";
// import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const PaymentOption = () => {
  const {
    totalPrice,
    Paid,
    address,
    setAddress,
    Naddress,
    addAddress,
    setOpen,
    open,
    cod,
    setCod,
  } = useStates();
  const [togglePay, setTogglePay] = useState(1);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const toggle = (i) => {
    setTogglePay(i);
  };
  const handleChange = () => {
    setCod(!cod);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="payment_page">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="pay_box">
        <div className="address_in_payment">
          <p className="toptext_pay_box">
            <MdLocationOn /> Add a delivery address
            <div className="add_new_add_btn">
              <Button
                variant="contained"
                className="new_address"
                onClick={handleClickOpen}
              >
                <h4>New</h4> <IoMdAdd size={22} />
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Address</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Add New Address for Delivery the Product...
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="address"
                    value={address}
                    label="Add New Address"
                    type="text"
                    fullWidth
                    onChange={(e) => setAddress(e.target.value)}
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button
                    onClick={function (e) {
                      handleClose();
                      addAddress();
                    }}
                  >
                    Add
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </p>
          <p>
            <IoLocationOutline className="location_icon_in_payment" />
            <span>
              {Naddress
                ? Naddress
                : "Vivekanandapuram, Kovaipudur, Tamil Nadu 641042, India"}
            </span>
          </p>
        </div>
        <div className="payment_option">
          <p className="payment_title">
            <MdOutlinePayment />
            <span>Payment</span>
          </p>
          <div className="cash_on_delivery">
            <Checkbox
              type="checkbox"
              name="cash_on_delivery"
              id="cod"
              checked={cod}
              onChange={handleChange}
              value="Cash On Delivery"
              {...label}
              defaultChecked
              size="small"
            />
            Cash On Delivery
          </div>
          <div className={cod ? "no_online_del" : "online_del"}>
            <div className="leftside_box">
              <button
                className={togglePay === 1 ? "btn btn-acti" : "btn"}
                onClick={() => {
                  toggle(1);
                }}
              >
                Wallet
                <BsChevronRight className="right_arrow" />
              </button>
              <button
                className={togglePay === 2 ? "btn btn-acti" : "btn"}
                onClick={() => {
                  toggle(2);
                }}
              >
                UPI
                <BsChevronRight className="right_arrow" />
              </button>
              <button
                className={togglePay === 3 ? "btn btn-acti" : "btn"}
                onClick={() => {
                  toggle(3);
                }}
              >
                Credit or Debit Card
                <BsChevronRight className="right_arrow" />{" "}
              </button>
            </div>
            <div className="rightside_box">
              {togglePay === 1 ? (
                <Wallet />
              ) : togglePay === 2 ? (
                <Upi />
              ) : togglePay === 3 ? (
                <DCcard />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="mk_payment">
            <button
              id="mk_payment_button"
              onClick={function (event) {
                cod ? Paid("cod") : Paid("onl");
              }}
            >
              {cod
                ? "Place Order"
                : `Pay ₹ ${(
                    totalPrice +
                    totalPrice * 0.03 +
                    totalPrice * 0.04
                  ).toFixed(1)}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOption;

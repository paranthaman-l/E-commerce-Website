import React, { useState } from "react";
import "./address.css";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useStates } from "../../States";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Locatem from "../locatem/locate";

const Address = (props) => {
  const { Naddress, address, setAddress, addAddress, setOpen, open } =
    useStates();
  const [viewLocatem, setViewLocatem] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="Address">
        <div
          className="backarrow"
          onClick={() => {
            props.back(false);
          }}
        >
          <IoMdArrowRoundBack />
        </div>

        <div className="top">
          <center>
            <h3>Address</h3>
          </center>
        </div>
        <div className="center">
          <HiLocationMarker
            className="location"
            onClick={() => setViewLocatem(true)}
          />
          {Naddress ? (
            <p>{Naddress}</p>
          ) : (
            <p>
              Sri krishna college of technology
              {/* SKCT,<br/>
            Arivoli Nagar,<br/>
            kovaiPudhur,<br/>
            Coimbatore,<br/>
            TamilNadu,<br/>
            641042. <br/> */}
            </p>
          )}

          <h1>
            <button onClick={handleClickOpen}>
              <b> + Add Address</b>
            </button>
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
          </h1>
        </div>

        {viewLocatem && <Locatem back={setViewLocatem} />}

        <div align="center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.472957941442!2d76.92128282309257!3d10.92760146733152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b823c4ca3d5%3A0x23416a992879b7c4!2sSri%20Krishna%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1672848082167!5m2!1sen!2sin"
            width="500"
            height="290"
            title="address"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Address;

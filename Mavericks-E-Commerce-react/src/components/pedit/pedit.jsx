import React from "react";
import "./pedit.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useStates } from "../../States";
import { BiEdit } from "react-icons/bi";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
const Pedit = (props) => {
  const { user, setOpen, open, changeName, uname, setUname,userName } = useStates();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="Edit">
        <div
          className="backarrow"
          onClick={() => {
            props.back(false);
          }}
        >
          <IoMdArrowRoundBack />
        </div>
        <img
          src={
            user
              ? user?.photoURL
              : "https://res.cloudinary.com/doz5njr9h/image/upload/v1670305416/image44_ybup9o.jpg"
          }
          alt=""
        />
        <ul>
          <li>
            <label>Name : </label>
            {/* <input type="text" name="n1" placeholder="Enter Your Name" /> */}
            <b>{userName || user?.displayName || "Guest"}</b>
          </li>
          <pre className="edit_btn">
            <BiEdit onClick={handleClickOpen} />
          </pre>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle></DialogTitle>
            <DialogContent>
              <DialogContentText>Update Your Name</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="address"
                label="Enter Name"
                type="text"
                fullWidth
                variant="standard"
                value={uname}
                onChange={(e) => setUname(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                onClick={function (e) {
                  handleClose();
                  changeName(uname);
                }}
              >
                Change
              </Button>
            </DialogActions>
          </Dialog>
          <li>
            <label>Mobile No : </label>
            {/* <input type="number" name="n1" placeholder="Mobile No" /> */}
            <b>{user?.mobile_no}</b>
          </li>
          <li>
            <label>Email : </label>
            {/* <input type="number" name="n1" placeholder="Mobile No" /> */}
            <b>{user?.email}</b>
          </li>
          {/* <li>Channge Password</li>
          <li>
          <label>Old Password : </label>
          <input type="password" name="n1" placeholder="password" />
          </li>
          <li>
          <label>New Password : </label>
          <input type="password" name="n1" placeholder="Password" />
        </li> */}
          <img
            id="profileBack"
            src="https://res.cloudinary.com/doz5njr9h/image/upload/v1672900233/mart-FFi3L4zdV-transformed_elp8jw.jpg"
            alt=""
          />
        </ul>
        {/* <div className="last">
          <button>CHANGE DETAILS</button>
        </div> */}
      </div>
    </>
  );
};

export default Pedit;

import React from "react";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
const Content = () => {
  return (
    <>
      <div className="blackbox">
        <div className="col1">
          OFFICE ADDRESS
          <br />
          <br />
          <br />
          ESSPRESSO STREET J-109/UI
          <br />
          SPACE-X MILANT
          <br />
          5TH TENEND AVENUE NEWYORK
          <br />
          NY -10019
        </div>
        <div className="col2">
          EMAIL :<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contactus.mavericks@gmail.com
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maverick@hotmail.com
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maverickhelpdesk@gmail.com
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mavericksadmin@email.com
          <br />
          <CopyrightIcon />
          &nbsp;&nbsp;copyrights 2022.All rights reserved.
        </div>
        <div className="col3">
          FOLLOW US
          <br />
          <br />
          <a href="https://instagram.com/maveric_off?igshid=Yzg5MTU1MDY=" target="_blank" rel="noreferrer"><InstagramIcon /></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FacebookIcon /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <GitHubIcon /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <LinkedInIcon />
          <br />
          <h1>MAVERICKS</h1>
        </div>
      </div>
    </>
  );
};
export default Content;

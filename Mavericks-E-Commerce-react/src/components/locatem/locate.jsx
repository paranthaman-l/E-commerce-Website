// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from "react";

const Locate = () => {
  return (
    <div align="center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.472957941442!2d76.92128282309257!3d10.92760146733152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b823c4ca3d5%3A0x23416a992879b7c4!2sSri%20Krishna%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1672848082167!5m2!1sen!2sin"
        width="1500"
        height="700"
        title="Address"
      ></iframe>
    </div>
  );
};

export default Locate;

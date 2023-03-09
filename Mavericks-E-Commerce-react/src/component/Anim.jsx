import React from "react";
import Typewriter from "typewriter-effect";
import "./anim.css";

const Anim = () => {
  return (
    <>
      <div className="des">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to Mavericks.org")
              .pauseFor(1000)
              .deleteAll()
              .typeString("ABOUT US")
              .start();
          }}
        />
      </div>
      <div className="content">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("  ")
              .pauseFor(6000)
              .typeString(" ")
              .changeDelay(1)
              .typeString(
                " We have created this project as an idea of 'ORDER & CHILL'Created as an e-commerce website.The objective of our website is to make customer feel cozy.Our delivery partnerare currently helping us to do our work efficiently.we have started as member of 6 and have reached to a milestone of 100,000 employees.And also proudly announce that we had made an employement of 100000.Each and every day we make over 50000 orders Here just we have to order a item will will be delivered by our team.The spl.advantage is you can choose your own shop.Delivery partner will delivery those product on correct time"
              )
              .start();
          }}
        />
      </div>
    </>
  );
};

export default Anim;

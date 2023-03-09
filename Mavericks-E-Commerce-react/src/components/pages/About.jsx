import React from "react";
import Flip from "../../component/Flip";
import Anim from "../../component/Anim";
import Fade from "../../component/Fade";
import Colab from "../../component/Colab"
import Footer from '../../component/Footer'
import '../../App.css'
const About = () => {
  return (
    <div className="total1">
      <div className="b-box1">
        <Anim />
        <Fade />
        <Flip />
      </div>
      <Colab/>
      <Footer/>
    </div>
  );
};
export default About;

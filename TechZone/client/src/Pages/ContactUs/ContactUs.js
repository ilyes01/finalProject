import React from "react";
import "./ContactUs.css";
import messenger from "./facebookicon.png";
import phone from "./whatsappicon.png";
import mail from "./gmail.png";
import map from "./mapp.PNG";

const ContactUs = () => {
  return (
    <div>
      <h1 className="normed">CONTACT US</h1>
      <div className="contain" style={{ width: "35rem" }}>
        <a
          target="_blank"
          href="https://www.facebook.com/abidi.elyes/"
          rel="noreferrer"
        >
          <img className="icon" src={messenger} alt="img" />
        </a>
        <a href="tel:+216-52822252">
          <img className="icon" src={phone} alt="icon" />
        </a>
        <a
          target="_blank"
          href="mailto:ilyesghrab7@gmail.com"
          rel="noreferrer"
        >
          <img className="icon" src={mail} alt="img" />
        </a>
      </div>
      <h1 className="normed">COME VISIT US</h1>
      <div>
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Holberton+School+Tunisia/@36.8318179,10.2328619,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd3571f7fdf48f:0x2612554e7c78b1d0!8m2!3d36.8318179!4d10.2328619!16s%2Fg%2F11h8bkmhcy"
          rel="noreferrer"
        >
          <img src={map} className="icon2" alt="img" />
        </a>
      </div>

      <div></div>
    </div>
  );
};

export default ContactUs;

import React from "react";
import { Helmet } from "react-helmet";

import ContactUs from "../ContactUs/ContactUs";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <link rel="canonical" />
      </Helmet>
      <h1 className="About">About Us</h1>

      <div className="descriptionNormed2">
        <div className="descriptionNormed">
          <p className="textdescription">
           
            <span className="descrNostech">TechZone</span> 
          </p>
          
          <p className="textdescription">

          <span className="destxt"> Welcome to our online tech store! </span> 
          We're a team of tech enthusiasts dedicated to making technology accessible and affordable for everyone. 
          We offer the latest tech products from leading brands, and our experts are here to provide personalized advice and support.
           We're committed to exceptional customer service and making your online shopping experience easy and enjoyable.
            Thank you for choosing us as your tech partner!.
          </p>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default AboutUs;

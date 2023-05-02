import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import ContactUs from "../ContactUs/ContactUs";
import Products from "../Products/Products";
import "./Home.css";
import video from "./anime.mp4";

const Home = ({ filtredProducts }) => {
  const myRef = useRef(null);


  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TechZone</title>
        <link rel="canonical" />
      </Helmet>
      <h1>
        <p className="nostech1"> TechZone ONLINE SHOP</p>
      </h1>
      
          <div className="Banner">
          <video id="video" width={1200} autoPlay loop muted >
  <source src={video} type="video/mp4"/>
</video>

          </div>
    

      <div ref={myRef}>
        {<Products filtredProducts={filtredProducts} />}
        
      </div>

      <ContactUs />
    </div>
  );
};

export default Home;

import React from "react";
import "./Style1.css";
import img1 from "./1.png";
import img2 from "./3.png";
import img3 from "./2.png";
import { Link } from "react-router-dom";
//import facebook from "./facebook.png";
import info from "./info.png";
import product from "./product.png";
import mail from "./gmail.png";
import phone from "./telephone.png";
import adresse from "./navigation.png";
import { Button, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import AddMessages from "../addMessages/AddMessages";

const Footer = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  return (
    <footer>
      <div className="Info">
        <div>
          <img src={img1} className="Image" alt="livraison" />{" "}
          <p className="text">
          Delivery in Greater Tunis 
          </p>
        </div>
        <div>
          <img src={img2} className="Image1" alt="Service client" />{" "}
          <p className="text">
          Customer service 
          </p>
        </div>
        <div>
          <img src={img3} className="c" alt="c" />
          <p className="c-text">
          repair and maintenance <br></br>
          </p>
        </div>
      </div>

      {isAuth || isAuthAdmin ? null : (
        <div className="mainfooter2">
          <div className="contain5">
            <p className="txt7">
            Sign up to receive promotional codes
            </p>
            <div className="form7">
              <FormControl placeholder="your email adress" />
            </div>
            <div>
              <Button className="v33" variant="light" href="/accountCreate">
                {" "}
                <span className="v3">sign in</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      {isAuthAdmin ? null : <AddMessages />}

      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <p>Informations</p>
              <div className="flex">
                <Link to="/Aproposdenous" className="path">
                  {" "}
                  <img src={info} className="ico" alt="img" /> About Us
                </Link>
                <br />
                <Link to="/Produits" className="path">
                  <img src={product} className="ico" alt="img" />
                  Our Products
                </Link>
                <br />
                <a
                  target="_blank"
                  href="https://www.facebook.com/abidi.elyes/"
                  className="path"
                  rel="noreferrer"
                >
                  
             
                </a>
              </div>
            </div>

            {/* Column3 */}
            <div className="col">
              <p>Contact Us</p>

              <a href="tel:+216-52822252" className="path">
                <img src={phone} className="ico" alt="img" />
                phone : (+216) 52822252
              </a>
              <a href="mailto: ilyesghrab7@gmail.com" className="path">
                <p>
                  <img src={mail} className="ico" alt="img" /> 
                  ilyesghrab7@gmail.com
                </p>
              </a>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/R6JM%2BP4H+Holberton+School+Tunisia,+Rue+du+Lac+Biwa,+Tunis/data=!4m2!3m1!1s0x12fd3571f7fdf48f:0x2612554e7c78b1d0?utm_source=mstt_1&entry=gps&g_ep=CAESCTExLjcyLjMwMhgAIIgnKgBCAlRO"
                className="path"
                rel="noreferrer"
              >
                <p>
                  <img src={adresse} className="ico" alt="img" />
                  Lac 1 {" "}
                </p>
              </a>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} TechZone | All rights reserved 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

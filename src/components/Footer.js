import React from "react";
import "../styles/footer.css";

// importing images
// import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";
import messenger from "../images/messenger.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import twoo from "../images/twoo.png";
// importing images

export const Footer = () => {
  return (
    <div className="container footer">
      <div className="footer-a">
        <div className="foot-a1">
          <img className="foot-img" src={logo2} alt="logo" />
          <br />
          <span className="foot-aw">
            Travel helps companies manage payments easily.
          </span>
          <div className="footy">
          <img className="foot-img1" src={linkedin} alt="logo" />
          <img className="foot-img1" src={messenger} alt="logo" />
          <img className="foot-img1" src={twitter} alt="logo" />
          <img className="foot-img1" src={twoo} alt="logo" />
          </div>
        </div>
        <div className="foot-a2">
          <ul className="foot-list">
            <li className="foot-list1">Company</li>
            <li className="foot-list2">About Us</li>
            <li className="foot-list2">Careers</li>
            <li className="foot-list2">Blog</li>
            <li className="foot-list2">Pricing</li>
          </ul>
        </div>
        <div className="foot-a2">
          <ul className="foot-list">
            <li className="foot-list1">Destinations</li>
            <li className="foot-list2">Maldives</li>
            <li className="foot-list2">Los Angelas</li>
            <li className="foot-list2">Las Vegas</li>
            <li className="foot-list2">Torronto</li>
          </ul>
        </div>
        <div className="foot-a3">
          <ul className="foot-list">
            <li className="foot-list1">Join Our Newsletter</li>
          </ul>
          <form action="">
            <input className="news-a" placeholder="Your email address"></input>
            <button className="news-b">Subscribe</button>
            <br />
            <span className="foot-last">
              * Will send you weekly updates for your better tour packages.
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

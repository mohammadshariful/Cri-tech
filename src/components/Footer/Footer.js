import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="container">
        <ul className="section-container ">
          <li className="icon">
            <span>
              <FiPhone />
            </span>
            <span>Toll free 1800 200 1234</span>
          </li>
          <li className="icon">
            <span>
              <FaFacebook />
            </span>
            <span>www.facebook.com/cripumps</span>
          </li>
          <li className="icon">
            <span>
              <TbWorld />
            </span>
            <span>www.crigroups.com</span>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;

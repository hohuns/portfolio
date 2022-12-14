import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        JOO SUNG JAE HANS
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#service">Working Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>&copy;2022 JOO SUNG JAE JOO HANS. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

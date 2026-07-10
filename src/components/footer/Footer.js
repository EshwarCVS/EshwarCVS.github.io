import React from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className="footer-text">
          Built by{" "}
          <a
            href="https://github.com/EshwarCVS"
            target="_blank"
            rel="noreferrer"
          >
            Eshwar Chandra Vidhyasagar Thedla
          </a>
        </p>
      </div>
    </Fade>
  );
}

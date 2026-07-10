import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {greeting} from "../../portfolio";

const NAV = [
  {href: "#experience", label: "Experience"},
  {href: "#projects", label: "Projects"},
  {href: "#writing", label: "Writing"},
  {href: "#activity", label: "Activity"},
  {href: "#community", label: "Community"},
  {href: "#contact", label: "Contact"}
];

function Header() {
  const {isDark} = useContext(StyleContext);
  const shortName = (greeting.username || "Eshwar").split(" ")[0];

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header portfolio-header" : "header portfolio-header"}>
        <a href="#hero" className="logo">
          <span className="grey-color">&lt;</span>
          <span className="logo-name">{shortName}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className={isDark ? "navicon navicon-dark" : "navicon"} />
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {NAV.map(item => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;

// import React from 'react';
import { useState } from "react";
import "./SideNavBar.css";
import logo from "../../../public/icons/Logo.svg";

const SideNavBar = () => {
  const [isExpended, setExpended] = useState(false);
  const menuItems = [
    {
      id: 1,
      text: "deshboard",
      icon: "/public/icons/grid.svg",
    },
    {
      id: 2,
      text: "Admin Profile",
      icon: "/public/icons/admin-avatar.svg",
    },
    {
      id: 3,
      text: "Messages",
      icon: "/public/icons/message.svg",
    },
    {
      id: 4,
      text: "Analytics",
      icon: "/public/icons/pie-chart.svg",
    },
    {
      id: 5,
      text: "File Manager",
      icon: "/public/icons/folder.svg",
    },
    {
      id: 6,
      text: "Orders",
      icon: "/public/icons/shopping-cart.svg",
    },
    {
      id: 7,
      text: "Saved Items",
      icon: "/public/icons/heart.svg",
    },
    {
      id: 8,
      text: "Settings",
      icon: "/public/icons/settings.svg",
    },
  ];

  return (
    <div
      className={
        isExpended
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpended && (
            <div className="nav-brand">
              <img src={logo} alt="nav brand" />
              <h2>showkart</h2>
            </div>
          )}
          <button
            className={
              isExpended ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpended(!isExpended)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {menuItems.map(({ text, id, icon }) => (
            <a
              href="#"
              key={id}
              className={isExpended ? "menu-item" : "menu-item menu-item-NX"}
            >
              <img src={icon} alt="" />
              {isExpended && <p> {text} </p>}
              {!isExpended && <div className="tooltip"> {text} </div>}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-footer">
        {isExpended && (
          <div className="nav-details">
            <img src="/public/icons/admin-avatar.svg" alt="admin" />
            <div className="nav-footer-info">
              <p className="nav-footer-user-name">Yasin</p>
              <p className="nav-footer-user-position">Store Admin</p>
            </div>
          </div>
        )}
        <img className="logo-out-icon" src="/public/icons/logout.svg" alt="" />
      </div>
    </div>
  );
};

export default SideNavBar;

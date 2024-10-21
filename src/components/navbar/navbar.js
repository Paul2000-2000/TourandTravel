import React from "react";
import Logo from "../../assets/logo.png";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import ModalEx from "../../components/Modal/Modal.js";
import { useState } from "react";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true); // Open modal when "Book Now" is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal when user accepts/declines
  };

  return (
    <div className="navbar">
      <div className="nav1">
        <p className="nav1-p">20% off on next booking</p>
        <p className="nav1-p">mobile no. +91 123456789</p>
      </div>
      <div className="nav2">
        <img src={Logo} alt="" id="logo" />
        <ul className="nav2-ul">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav2-ul-li-active" : "nav2-ul-li"
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "nav2-ul-li-active" : "nav2-ul-li"
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bestplaces"
              className={({ isActive }) =>
                isActive ? "nav2-ul-li-active" : "nav2-ul-li"
              }
            >
              Best Places
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav2-ul-li-active" : "nav2-ul-li"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav2-ul-li-active" : "nav2-ul-li"
              }
            >
              Quick Links
            </NavLink>
          </li>
        </ul>
        <button id="nav2-but" onClick={openModal}>
          Book Now
        </button>
      </div>

      {isModalOpen && (
        <ModalEx isOpen={isModalOpen} onClose={closeModal} /> // Pass modal state and close function as props
      )}
    </div>
  );
};

export default Navbar;

import React from "react";
import Logo from "../../assets/logo.png";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import ModalEx from "../../components/Modal/Modal.js";
import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      {isMenuOpen && (
        <div className="resp-nav2-elements">
          <div className="resp-nav2-elements-person">
            <FaRegUser id="resp-nav2-elements-person-icon" />
            <div className="resp-nav2-elements-person-text">
              <p>Hello User</p>
              <p>Premium User</p>
            </div>
          </div>

          <ul className="resp-nav2-ul">
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
          </ul>
        </div>
      )}
      <div className="nav1">
        <p className="nav1-p">20% off on next booking</p>
        <p className="nav1-p">Mobile No. +91 123456789</p>
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
        <div className="div-nav2-res">
          <button id="nav2-but" onClick={openModal}>
            Book Now
          </button>
          <AiOutlineBars id="div-nav2-res-icon" onClick={toggleMenu} />
        </div>
      </div>

      {isModalOpen && (
        <ModalEx isOpen={isModalOpen} onClose={closeModal} /> // Pass modal state and close function as props
      )}
    </div>
  );
};

export default Navbar;

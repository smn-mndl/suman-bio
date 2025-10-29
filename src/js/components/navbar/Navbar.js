import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { NAVBAR_CONFIG } from "./navbar-config";
import "./Navbar.scss";

const Navbar = ({
  setCurrentTab,
  currentTab,
  dropdownOpen,
  setDropdownOpen,
}) => {
  const windowWidth = window.innerWidth;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDropdownOpen(false);
    });
  }, [windowWidth, setDropdownOpen]);
  const navbarItems = () => {
    return NAVBAR_CONFIG.map((each) => {
      return (
        <li
          onClick={() => {
            setCurrentTab(each.url);
          }}
        >
          <div>{each.icon}</div>
          <Link
            className={currentTab === each.url ? "selected-tab" : ""}
            to={each.url}
          >
            {each.disp}
          </Link>
        </li>
      );
    });
  };
  const createSideNav = () => {
    return (
      <div
        className={
          dropdownOpen && window.innerWidth > 499
            ? "showToggleMenu side-nav"
            : "hideToggleMenu side-nav"
        }
      >
        {navbarItems()}
      </div>
    );
  };
  return (
    <nav className="navbar">
      {window.innerWidth > 499 ? (
        <>
          <div className="navbar-header">
            <div className="navbar-name">
              <span>Suman Mondal</span>
            </div>
            <div
              className="navbar-icon"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {dropdownOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            </div>
          </div>
          {createSideNav()}
        </>
      ) : (
        <ul>{navbarItems()}</ul>
      )}
    </nav>
  );
};

export default Navbar;

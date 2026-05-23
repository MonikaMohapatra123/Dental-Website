
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fetchData from './menudata.json';
import './Desk.css';

const DesktopNavBar = () => {
  const [menuData, setMenuData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null); // Track active submenu index
  const location = useLocation(); // Get the current location
  const navbarRef = useRef(null); // Reference for the whole navbar

  useEffect(() => {
    if (fetchData && fetchData[1]) {
      setMenuData(fetchData[1].menu);
    }
  }, []);

  // Function to check if a link is active
  const isActiveLink = (path) => location.pathname === path ? 'active' : '';

  // Toggle submenu visibility
  const toggleSubMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle submenu for clicked index
  };

  // Close the submenu when clicking outside
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setActiveIndex(null); // Close submenu if clicking outside the navbar
    }
  };

  // Attach the click event listener on mount and clean it up on unmount
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={navbarRef}>
      <div className="Navbar">
        {fetchData && fetchData[1] && fetchData[1].logo && (
          <div className="logo-container">
            {/* <span className="logo">{fetchData[1].logo}</span> */}
            <img src={fetchData[1].logo} alt="Logo" className="logo" />
          </div>
        )}
        <ul className="nav-list">
          {menuData.map((item, index) => (
            <li key={index} className="nav-item">
              {item.submenu ? (
                <>
                  {/* Main menu item */}
                  <div
                    className={`nav-link ${isActiveLink(item.link)}`}
                    onClick={() => toggleSubMenu(index)} // Toggle submenu on click
                  >
                    {item.name}
                  </div>

                  {/* Submenu list */}
                  <ul
                    className={`submenu ${activeIndex === index ? 'show' : ''}`}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="submenu-item">
                        <Link
                          to={subItem.link}
                          className={`submenu-link ${isActiveLink(subItem.link)}`} // Highlight active submenu
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  to={item.link}
                  className={`nav-link ${isActiveLink(item.link)}`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DesktopNavBar;


import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing both hamburger and close icons
import "./ResponsiveNav.css";
import fetchData from './menudata.json';

const ResponsiveNav = () => {
  const [menuData, SetmenuData] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (fetchData && fetchData[1]) {
      SetmenuData(fetchData[1].menu);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="ResponsiveContainer">
      <div>
        {fetchData && fetchData[1] && fetchData[1].logo && (
          <div>
            {/* <span className="logo">{fetchData[1].logo}</span> */}
            <img src={fetchData[1].logo} alt="Logo" className="logo" />
          </div>
        )}
      </div>

      <div>
        <button onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />} {/* Toggle between hamburger and close icon */}
        </button>
      </div>

      {menuOpen && (
        <ul className="resnav-list">
          {menuData.map((item, index) => (
            <li key={index} className="resnav-item">
              <a href={item.link} className="resnav-link">{item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ResponsiveNav;





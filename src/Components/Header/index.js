import { useState } from "react";
import "./index.css";

const Header = () => {
  const [menu, setDyn] = useState(false);

  const changeMenu = () => {
    setDyn(!menu);
  };

  const getDataLists = () => {
    const ActiveBar = menu ? "mobile-links-view" : "";
    return (
      <ul className={`mobile-links ${ActiveBar}`}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Support</li>
        <li>Sign in</li>
      </ul>
    );
  };

  return (
    <>
      <div className="header">
        <h1>ACO</h1>
        <ul className="mid-text">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Support</li>
        </ul>
        <button type="button">Signin</button>
      </div>
      <div className="mobile-view">
        <h1>ACO</h1>
        <button type="button" className="mobile-btn" onClick={changeMenu}>
          {menu ? "X" : "CLICK"}
        </button>
        {getDataLists()}
      </div>
    </>
  );
};

export default Header;

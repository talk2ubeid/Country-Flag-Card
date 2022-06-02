import React from "react";

import DarkModeIcon from "@mui/icons-material/DarkMode";
const Header = ({ onClick, darkMode }) => {
  return (
    <div className={`header ${darkMode ? "darkMode" : ""}`}>
      <div className="header_container">
        <h2 className="logo">where in the world</h2>

        <div className="switch_mode">
          <DarkModeIcon onClick={onClick} />
          <h3 onClick={onClick}>Dark Mode</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;

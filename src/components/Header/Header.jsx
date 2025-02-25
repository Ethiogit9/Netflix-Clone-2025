// import React from 'react'
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoImg from "../../assets/images/Logo_Netflix_HD_Vector_illustrator__ai__-removebg-preview.png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        {/* netflix logo */}
        <img src={LogoImg} alt="" />
        <nav>
          <ul>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>News & Popular</li>
            <li>My List</li>
            <li>Browse By Language</li>
          </ul>
        </nav>
      </div>

      <div className="header-right">
        <SearchIcon />
        <CircleNotificationsIcon />
        <AccountCircleIcon />
        <KeyboardArrowDownIcon />
      </div>
      <div className="menu-icon">
        <MenuOutlinedIcon />
      </div>
    </header>
  );
};

export default Header;

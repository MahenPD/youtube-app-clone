import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";

function Header() {
    const [input, setInput] = useState("");

  return (
    <div className="header">
      <div class="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg"
          alt=""
        />
      </div>

      <div class="header__input">
        <input placeholder="search" onChange={e => setInput(e.target.value)} type="text" />
        <SearchIcon className="header__inputButton" />
      </div>

      <div class="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar className="header__icon" />
      </div>
    </div>
  );
}

export default Header;

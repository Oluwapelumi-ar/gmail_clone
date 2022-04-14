import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowDropDown } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


function Header() {
  return (
    <div className='header'>
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png" alt="" />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder='Search mail'/>
        <ArrowDropDown  className='header__inputCaret'/>
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon />
          <NotificationsNoneIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  )
}

export default Header
import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowDropDown } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';


function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  const signOut = () => {
    auth.signOut().then(() => {
       dispatch(logout())
    })
   
  }
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
        <Avatar onClick={signOut} src={user?.photoUrl}/>
      </div>
    </div>
  )
}

export default Header
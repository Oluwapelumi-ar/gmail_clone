
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import React from 'react';
import './SideBar.css'

const SideBar = () => {
  return (
    <div className='sidebar'>
     <Button startIcon={<AddIcon fontSize='large' />} className="sidebar__compose"> Compose</Button>
    </div>
  )
}

export default SideBar;
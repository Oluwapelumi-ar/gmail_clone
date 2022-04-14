import { AddCircleOutline } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import './SideBar.css'

const SideBar = () => {
  return (
    <div className='sidebar'>
     <Button startIcon={AddCircleOutline}> Compose</Button>
    </div>
  )
}

export default SideBar
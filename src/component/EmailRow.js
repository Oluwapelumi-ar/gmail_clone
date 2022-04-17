import { LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import React from 'react'

function EmailRow({title,subject,description,time,id}) {
  return (
    <div className='emailRow'> 
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>

      <div className="emailRow__title">
        {title}
      </div>

      <div className="emailRow__message">
    	  {subject}
      </div>

      <div className="emailRow__description">
        {LabelImportantOutlined}
      </div>
    </div>
  )
}

export default EmailRow
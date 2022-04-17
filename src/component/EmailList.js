import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, MoreVert, Redo, Settings } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';
import React from 'react';
import '../component/EmailList.css';
import Section from './Section';
import EmailRow from './EmailRow';

function EmailList() {
  return (
    <div className='emailList'>
      <div className="emailList__settings">
        <div        className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={Inbox} title='Primary' color='red' selected />
        <Section Icon={Inbox} title='Social' color='blue'  />
        <Section Icon={Inbox} title='Promotions' color='green'  />
      </div>

      <div className="emailList__list">
        <EmailRow
         title='Twitch'
         subject='Hey Fellow streamer!!'
         description='This is a test'
         time='10pm'
        >

        </EmailRow>
      </div>
    </div>
  )
}

export default EmailList
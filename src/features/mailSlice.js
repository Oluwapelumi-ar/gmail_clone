import {  createSlice } from '@reduxjs/toolkit';


export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    selectedMail:null,
    sendMessageIsOpened:false
  },
  reducers: {
    selectMail:(state,action) => {
      state.selectedMail = action.payload
    },
    openSendMessage: (state) => {
      
      state.sendMessageIsOpened = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpened = false;
    },
  },

  
});

export const { selectMail,openSendMessage, closeSendMessage } = mailSlice.actions;


export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpened;
export const selectOpenMail = (state) => state.mail.selectedMail;


export default mailSlice.reducer;

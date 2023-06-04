import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    SendMessageIsopen: false,
  },
  reducers: {
    openSendMessage: (state) => {
      state.SendMessageIsopen = true;
    },
    closeSendMessage: (state) => {
      state.SendMessageIsopen = false;
    },
  },
});

export const { SendMessageIsopen, closeSendMessage } = mailSlice.actions;

export const selectSendMessageIsopen=(state)=>state.mail.SendMessageIsopen;

export default mailSlice.reducer;

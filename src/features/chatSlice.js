import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  error: "",
  conversations: [],
  activeConversations: {},
  notifications: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setActiveConversation: (state, action) => {
      state.activeConversations = action.payload;
    },
  },
});

export const { setActiveConversation } = chatSlice.actions;

export default chatSlice.reducer;

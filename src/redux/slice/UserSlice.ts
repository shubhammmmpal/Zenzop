import { createSlice } from "@reduxjs/toolkit";
import { IUserSliceInitialState } from "../ReduxType";
import { string } from "yup";

const initialState: IUserSliceInitialState = {
  skill: [],
  userInfo: null,
  notificationCheck: ''
};

const userSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    setSkill: (state, action) => {
      state.skill = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    resetUserInfo(state) {
      state.userInfo = null; // Clear user state
    },
    setNotificationCheck(state, action){
      state.notificationCheck = action.payload
    }
  },
});

export default userSlice.reducer;

export const { setSkill, setUserInfo, resetUserInfo, setNotificationCheck } = userSlice.actions;

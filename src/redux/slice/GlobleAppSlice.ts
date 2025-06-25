import { createSlice } from "@reduxjs/toolkit";
import { IGlobleSliceInitialState } from "../ReduxType";

const initialState: IGlobleSliceInitialState = {
  selectedTimeSlots: [],
};

const globleSlice = createSlice({
  name: "GlobleApp",
  initialState: initialState,
  reducers: {
    setSelectedTimeSlots: (state: any, action) => {
      state.selectedTimeSlots = [...state.selectedTimeSlots, action.payload];
    },
    setCleanSlots: (state, action) => {
      state.selectedTimeSlots = [];
    },
  },
});

export default globleSlice.reducer;

export const { setSelectedTimeSlots, setCleanSlots } = globleSlice.actions;

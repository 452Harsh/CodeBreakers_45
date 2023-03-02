import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  origin: null,
  distination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.TravelTimeInformation = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTraveTimeInformation: (state, action) => {
      state.traveTimeInformation = action.payload;
    },
  },
});

export const { setOrigin,setDestination,setTraveTimeInformation} = navSlice.actions;
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.navtdestination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export default  navSlice.reducer;

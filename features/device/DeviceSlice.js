import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  device: "",
  isLoading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.error = "";
    },
  },
});

export const { reset, login } = authSlice.actions;

export default authSlice.reducer;

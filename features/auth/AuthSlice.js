import { createSlice } from '@reduxjs/toolkit';
import authService from './AuthService';

const initialState = {
  user: "",
  token: "",
  isLoggedIn: false,
  isRegistered: false,
  isLoading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = "";
      state.token = "";
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = "";
    },
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.token = action.payload.token;
    },
    register: (state) => {
      state.isLoading = false;
      state.isRegistered = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(authService.userRegister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authService.userRegister.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(authService.userRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isLoggedIn = false;
      })
      .addCase(authService.userLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authService.userLogin.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(authService.userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isLoggedIn = false;
      })
      .addCase(authService.userLogout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset, login } = authSlice.actions;

export default authSlice.reducer;

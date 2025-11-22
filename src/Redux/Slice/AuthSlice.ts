import { createSlice } from "@reduxjs/toolkit";
import { loginUser, refreshSession } from "./AuthThunks";
import { type AuthState } from "./Types";

const initialState: AuthState = {
  user: null,
  accessToken: null,
  loading: false,
  isAuthenticated: false,
  refreshToken: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.accessToken = action.payload.details.accessToken;
        state.refreshToken = action.payload.details.refreshToken;
        state.user = action.payload.details.user;
        state.isAuthenticated = true;
      })
      .addCase(refreshSession.fulfilled, (state, action) => {
        state.accessToken = action.payload.details.accessToken;
        state.refreshToken = action.payload.details.refreshToken;
        state.isAuthenticated = true;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

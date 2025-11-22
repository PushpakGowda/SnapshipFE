import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../API/AuthApi";
import { Endpoints } from "../../API/Endpoints";

export const loginUser = createAsyncThunk(
  Endpoints.Login,
  async (payload: { loginId: string; password: string }) => {
    const res = await authApi.login(payload);
    return res.data;
  }
);

export const refreshSession = createAsyncThunk(
  Endpoints.RefreshToken,
  async (refreshToken: string ) => {
    const res = await authApi.refresh({refreshToken});
    return res.data;
});

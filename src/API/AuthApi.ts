import axios from "axios";
import { Endpoints } from "./Endpoints";

const authAxios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

export default {
  login: (data: any) => authAxios.post(Endpoints.Login, data),
  refresh: (data: any) => authAxios.post(Endpoints.RefreshToken, data),
};

export interface User {
  userId: number;
  name: string;
  userGuid:string;
  profilePic:string;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken:string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface LoginPayload {
  loginId: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken:string;
  user: User;
}

export interface RefreshResponse {
  accessToken: string;
  refreshToken:string;
  user: User;
}

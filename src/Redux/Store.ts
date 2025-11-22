import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slice/AuthSlice";
import storage from "redux-persist/lib/storage"; 
import { persistReducer, persistStore } from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "refreshToken", "user", "isAuthenticated"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "engineerinc_admin",
  storage: storageSession,
  // whitelist: ["users", "view"],
  whitelist: ["users"],
};

const rootReducer = combineReducers({
  users: usersSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
export default store;

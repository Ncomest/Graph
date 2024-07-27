import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import languageReducer from "../features/language/languageSlice";

const persistConfig = {
 key: "root",
 storage,
 whitelist: ["theme", "language"],
};

const rootReducer = combineReducers({
 theme: themeReducer,
 language: languageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
 reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

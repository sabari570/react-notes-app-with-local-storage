import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleWares = [process.env.NODE_ENV !== 'production' && logger ].filter(Boolean);

const persistsConfig = {
    key: 'root',
    storage,
    whitelist: ['note', 'appTheme']
};

const persistedReducer = persistReducer(persistsConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(middleWares),
});

export const persistor = persistStore(store);
import cartReducer from "./cartReducer";
import { configureStore } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const stripe = require('stripe')('sk_test_51NQ6XMJWB0xSIJqMEoO0QCJw7HUl6hQwuJzvW0iMCK7rJPVH6iPRXD3iUM8b72bMxm1DKUw8v2yRzGiR6H7QN8tJ00tQeNNbmN');



const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
	reducer: {
		cart: persistedReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export let persistor = persistStore(store);
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import dataSlice from "./data";

export default configureStore({
	reducer: {
		cart: cartSlice,
		data: dataSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

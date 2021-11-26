import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [],
	},
	reducers: {
		add_to_cart: (state, action) => {
			if (state.products[action.payload] === undefined) {
				state.products[action.payload] = 1;
			} else {
				state.products[action.payload] += 1;
			}
		},
		subtract_from_cart: (state, action) => {
			if (state.products[action.payload] > 0) {
				state.products[action.payload]--;
			}
		},
		remove_from_cart: (state, action) => {
			state.products[action.payload] = undefined;
		},
		reset_cart: (state) => {
			state.products = [];
		},
	},
});

export const { add_to_cart, subtract_from_cart, reset_cart } = cartSlice.actions;

export default cartSlice.reducer;

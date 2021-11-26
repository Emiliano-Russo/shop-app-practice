import { createSlice } from "@reduxjs/toolkit";
import { DummyData } from "../data/dummy-data";

export const dataSlice = createSlice({
	name: "data",
	initialState: {
		items: DummyData,
	},
	reducers: {
		deleteItem: (state, action) => {
			const id = action.payload;
			const result = state.items.filter((prod) => {
				return prod.id != id;
			});
			state.items = result;
		},
		editItem: (state, action) => {
			/*
			action.payload = {
				id:4,
				newItem:{
					id:4,
					title:"pepito"
					...
				}
			}
			*/
			const index = state.items.findIndex((el) => el.id == action.payload.id);
			console.log("Index: " + index);
			state.items[index] = action.payload.item;
			console.log("New state!: ");
			console.log(state.items);
		},
		addItem: (state, action) => {
			state.push(action.payload);
		},
	},
});

export const { deleteItem, editItem, addItem } = dataSlice.actions;

export default dataSlice.reducer;

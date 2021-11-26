import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { subtract_from_cart } from "../store/cart";
import { useDispatch } from "react-redux";

function ItemCart(props) {
	//source={{ uri: "https://i.vimeocdn.com/portrait/58832_300x300.jpg" }}
	const dispatch = useDispatch();

	function deleteItemHandler() {
		dispatch(subtract_from_cart(props.id));
	}

	return (
		<View style={styles.itemCart}>
			<Image style={styles.image} source={{ uri: props.item.imageUrl }} />
			<View style={{ justifyContent: "center", alignItems: "center" }}>
				<Text style={{ fontSize: 18 }}>{props.item.title}</Text>
				<Text>x{props.item.quantity}</Text>
			</View>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<Text style={{ color: "green", fontSize: 20 }}>${props.item.price}</Text>
				<TouchableOpacity style={styles.trashBtn} onPress={deleteItemHandler}>
					<Ionicons name="trash-bin-outline" size={20}></Ionicons>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	itemCart: {
		height: 80,
		flexDirection: "row",
		marginVertical: 10,
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 20,
		padding: 8,
		borderColor: "black",
		borderWidth: 0.4,
	},
	image: {
		height: 50,
		width: 80,
	},
	trashBtn: {
		height: 40,
		width: 40,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default ItemCart;

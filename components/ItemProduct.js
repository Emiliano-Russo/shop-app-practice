import React from "react";
import { StyleSheet, Text, View, Button, Image, Alert } from "react-native";
import { deleteProduct } from "../data/dummy-data";
import { useDispatch } from "react-redux";
import { deleteItem } from "../store/data";
import { reset_cart } from "../store/cart";

function ItemProduct(props) {
	const dispatch = useDispatch();
	return (
		<View style={styles.card}>
			<Image style={styles.image} source={{ uri: props.item.imageUrl }} />
			<View style={{ justifyContent: "center", alignItems: "center" }}>
				<Text style={{ fontSize: 18 }}>{props.item.title}</Text>
			</View>
			<View style={{ flexDirection: "row", width: "100%", justifyContent: "space-evenly", marginVertical: 10 }}>
				<Button title="edit" onPress={() => props.navigation.push("Edit", { item: props.item })} />
				<Button
					title="delete"
					color="#FF0000"
					onPress={() => {
						dispatch(deleteItem(props.item.id));
						dispatch(reset_cart());
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		width: "80%",
		margin: 5,
		paddingBottom: 5,
		alignItems: "center",
		marginLeft: "auto",
		marginRight: "auto",
		elevation: 2,
		borderColor: "black",
		borderWidth: 1,
	},
	image: {
		width: "100%",
		height: 180,
	},
});

export default ItemProduct;

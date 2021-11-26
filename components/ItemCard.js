import { Button, View, StyleSheet, Text, Image, Alert } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { add_to_cart } from "../store/cart";

//props.navigation

function ItemCard(props) {
	const dispatch = useDispatch();

	const createThreeButtonAlert = () => Alert.alert("Item Added", props.title, [{ text: "OK", onPress: () => console.log("OK Pressed") }]);

	return (
		<View style={styles.card} elevation={2}>
			<Image style={styles.image} source={{ uri: props.image }} />
			<Text style={styles.title}>{props.title}</Text>
			<Text style={styles.price}>{props.price} $</Text>
			<View style={styles.buttons}>
				<Button title="Description" onPress={() => props.navigation.push("Detail", { id: props.id })} />
				<Button
					title="Add to cart"
					onPress={() => {
						createThreeButtonAlert();
						dispatch(add_to_cart(props.id));
					}}
					color="#8FCE00"
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
	buttons: {
		flexDirection: "row",
		width: "100%",
		marginTop: 20,
		marginBottom: 10,
		justifyContent: "space-around",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	price: {
		color: "gray",
	},
});

export default ItemCard;

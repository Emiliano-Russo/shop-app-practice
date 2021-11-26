import { FlatList, View, Text, ScrollView, Image, Button, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add_to_cart } from "../../store/cart";
import { useSelector } from "react-redux";

//props.route

function ProductDetailScreen(props) {
	const dispatch = useDispatch();
	const { id } = props.route.params;
	const [product, setProduct] = useState(undefined);
	const DummyData = useSelector((state) => state.data.items);

	useEffect(() => {
		const item = DummyData.find((el) => el.id === id);
		setProduct(item);
	}, [id]);

	if (product === undefined) return <Text>Loading...</Text>;

	const createThreeButtonAlert = () => Alert.alert("Item Added", product.title, [{ text: "OK", onPress: () => console.log("OK Pressed") }]);

	return (
		<ScrollView>
			<Image source={{ uri: product.imageUrl }} style={styles.image} />
			<Text style={styles.title}>{product.title}</Text>
			<Text style={styles.price}>${product.price}</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					createThreeButtonAlert();
					dispatch(add_to_cart(id));
				}}
			>
				<Text>Add to cart</Text>
			</TouchableOpacity>
			<Text style={styles.desc}>{product.description}</Text>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300,
	},
	price: {
		fontSize: 20,
		color: "#888",
		textAlign: "center",
		marginVertical: 20,
	},
	title: {
		fontSize: 40,
		textAlign: "center",
		marginVertical: 20,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#DDDDDD",
		padding: 10,
		width: "50%",
		marginLeft: "auto",
		marginRight: "auto",
		marginVertical: 20,
	},
	desc: {
		textAlign: "center",
		marginHorizontal: 20,
	},
});

export default ProductDetailScreen;

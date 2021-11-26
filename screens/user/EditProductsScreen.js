import React, { useState } from "react";
import { FlatList, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { editItem } from "../../store/data";
import Product from "../../models/product";

function EditProductsScreen(props) {
	console.log("A VEER EDIT PRODUCTS SCREEN: ");
	console.log(props);
	const item = props.route.params.item;
	const dispatch = useDispatch();
	const [inputTitle, setInputTitle] = useState(item.title);
	const [inputDescription, setInputDescription] = useState(item.description);
	const [inputImageUrl, setInputImageUrl] = useState(item.imageUrl);

	function editItemHandler() {
		const newItem = new Product(item.id, inputTitle, inputImageUrl, inputDescription, item.price);
		dispatch(editItem({ id: item.id, item: newItem }));
		props.navigation.popToTop();
	}

	return (
		<View style={styles.box}>
			<TextInput value={inputTitle} onChangeText={(text) => setInputTitle(text)} style={styles.textInput} />
			<TextInput value={inputDescription} onChangeText={(text) => setInputDescription(text)} style={styles.textInput} />
			<TextInput value={inputImageUrl} onChangeText={(text) => setInputImageUrl(text)} style={styles.textInput} />
			<Button title="Save" onPress={editItemHandler} />
		</View>
	);
}

const styles = StyleSheet.create({
	box: {
		margin: 7,
		padding: 20,
		height: "90%",
		justifyContent: "space-evenly",
	},
	textInput: {
		borderColor: "black",
		borderBottomWidth: 2,
		fontSize: 24,
		textAlign: "center",
	},
});

export default EditProductsScreen;

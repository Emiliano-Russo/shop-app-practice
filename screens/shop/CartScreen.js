import { FlatList, View, Text, Button, Alert } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ItemCart from "../../components/ItemCart";
import { useEffect } from "react";
import { useState } from "react";

//[{title,quantity,price}]

function CartScreen(props) {
	const quantityProducts = useSelector((state) => state.cart.products); //{1:qnty,2qnty}
	const [productList, setProductList] = useState([]);
	const DummyData = useSelector((state) => state.data.items);

	useEffect(() => {
		const items = buildProductsList();
		setProductList(items);
	}, [quantityProducts]);

	function buildProductsList() {
		const list = [];
		for (var key in quantityProducts) {
			if (quantityProducts.hasOwnProperty(key)) {
				if (quantityProducts[key] == 0) continue;
				const quantity = quantityProducts[key];
				const product = DummyData.find((el) => {
					return el.id == key;
				});
				const object = {
					id: product.id,
					title: product.title,
					quantity: quantity,
					price: product.price * quantity,
					imageUrl: product.imageUrl,
				};
				list.push(object);
			}
		}
		return list;
	}

	function calculateTotalPrice() {
		let totalPrice = 0;
		productList.forEach((prod) => {
			totalPrice += prod.price * prod.quantity;
		});
		return totalPrice;
	}

	const render = ({ item }) => <ItemCart key={item.id} id={item.id} item={item} />;
	const createThreeButtonAlert = () => Alert.alert("Checkout", "Total: $" + calculateTotalPrice(), props.title, [{ text: "OK" }, { text: "Cancel" }]);
	//<FlatList data={ProductsData} renderItem={render} keyExtractor={(item) => item.id} />
	return (
		<View>
			<View style={{ flexDirection: "row", justifyContent: "space-around", padding: 5, alignItems: "center", borderColor: "black", borderWidth: 0.2, margin: 5 }}>
				<Text
					style={{
						textAlign: "center",
						fontSize: 25,
						color: "green",
						marginVertical: 5,
					}}
				>
					Total: ${calculateTotalPrice()}
				</Text>

				<Button title="order now" onPress={() => createThreeButtonAlert()} />
			</View>
			<FlatList data={productList} renderItem={render} keyExtractor={(item) => item.id} />
		</View>
	);
}

export default CartScreen;

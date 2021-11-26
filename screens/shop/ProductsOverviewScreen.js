import { FlatList, View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import ItemCard from "../../components/ItemCard";
import { useSelector } from "react-redux";

function ProductsOverviewScreen(props) {
	const data = useSelector((state) => state.data.items);

	const render = ({ item }) => <ItemCard key={item.id} id={item.id} price={item.price} image={item.imageUrl} title={item.title} navigation={props.navigation} />;
	const shopComponent = (
		<View>
			<FlatList data={data} renderItem={render} keyExtractor={(item) => item.id} />
		</View>
	);
	return shopComponent;
}
export default ProductsOverviewScreen;

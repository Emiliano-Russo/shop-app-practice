import { FlatList, View, Text } from "react-native";
import React, { useEffect } from "react";
import ItemProduct from "../../components/ItemProduct";
import { useSelector } from "react-redux";

function UserProduct(props) {
	const render = ({ item }) => <ItemProduct item={item} navigation={props.navigation} />;

	const data = useSelector((state) => state.data.items);

	return (
		<View>
			<FlatList renderItem={render} data={data} />
		</View>
	);
}

export default UserProduct;

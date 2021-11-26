import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ProductsOverviewScreen from "./screens/shop/ProductsOverviewScreen";
import OrdersScreen from "./screens/shop/OrdersScreen";
import ProductDetailScreen from "./screens/shop/ProductDetailScreen";
import CartScreen from "./screens/shop/CartScreen";
import EditProductsScreen from "./screens/user/EditProductsScreen";
import UserProducts from "./screens/user/UserProducts";
import { combineReducers } from "redux";
import { Provider } from "react-redux";
import store from "./store/store";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function UserShop(props) {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Shop"
				component={ProductsOverviewScreen}
				options={{
					headerRight: () => {
						return (
							<TouchableOpacity onPress={() => props.navigation.navigate("Cart")}>
								<Ionicons name="cart-sharp" size={20}></Ionicons>
							</TouchableOpacity>
						);
					},
				}}
			/>
			<Stack.Screen name="Orders" component={OrdersScreen} />
			<Stack.Screen name="Detail" component={ProductDetailScreen} />
			<Stack.Screen name="Cart" component={CartScreen} />
		</Stack.Navigator>
	);
}

function Admin(props) {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Products Overview" component={UserProducts.bind(props.navigation)} />
			<Stack.Screen name="Edit" component={EditProductsScreen} />
		</Stack.Navigator>
	);
}

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Drawer.Navigator initialRouteName="UserShop">
					<Drawer.Screen options={{ headerShown: false }} name="User Shop" component={UserShop} />
					<Drawer.Screen options={{ headerShown: false }} name="Manage Products" component={Admin} />
				</Drawer.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

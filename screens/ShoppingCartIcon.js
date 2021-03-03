import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ShoppingCartIcon = () => {
	return (
		<View style={styles.container}>
			<View style={styles.itemcount}></View>
			<Icon
				//
				// onPress={() => props.navigation.navigate("Cart")}
				name="ios-cart"
				size={30}
			/>
		</View>
	);
};

export default ShoppingCartIcon;

const styles = StyleSheet.create({
	container: {
		padding: 5
	}
});

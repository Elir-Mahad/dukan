import React from "react";
import styles from "./ScreenStyles";
//
import { Text, View, Image, Button } from "react-native";

//
import { useStateValue } from "./StateProvider.js";

function CheckoutProduct({ id, title, image }) {
	//
	const [{}, dispatch] = useStateValue();
	// THIS IS THE DATA LAYER FROM STATE PROVIDER
	// THIS IS USUALLY SUMMONED
	// WHEN WILL NEED TO THE GRAB THE BASKET ITEMS
	// OR THE WHOLE BASKET SOMEWHERE IN THE COMPONENT

	const removeFromBasket = () => {
		// remove item from basket
		dispatch({
			type: "REMOVE_FROM_BASKET",
			// this is the action.type from the reducer.js
			id: id
			// fetch the id of the item that's being removed
		});
	};

	return (
		<View style={styles.product_container}>
			<View>
				<Text style={styles.product_name}> {title} </Text>
			</View>
			<Image
				//
				source={image}
				style={styles.product_image}
			/>
			<Button
				//
				onPress={removeFromBasket}
				title="Remove from basket"
			/>
		</View>
	);
}

export default CheckoutProduct;

import React from "react";
import { Text, View, Image, Button } from "react-native";
import styles from "./ScreenStyles";

import { useStateValue } from "./StateProvider.js";

function Product({ id, title, image }) {
	// split apart the object, and grab the id, title, image, price,rating

	const [{}, dispatch] = useStateValue();
	// THIS IS THE DATA LAYER FROM STATE PROVIDER
	// THIS IS USUALLY SUMMONED
	// WHEN WILL NEED TO THE GRAB THE BASKET ITEMS
	// OR THE WHOLE BASKET SOMEWHERE IN THE COMPONENT

	const addToBasket = () => {
		// console.log();
		// add item to basket
		dispatch({
			type: "ADD_TO_BASKET", // this is the action.type from the reducer.js
			item: {
				id: id, // fetch the id of the item that's being added
				title: title, // fetch the title of the item that's being added
				image: image // fetch the image of the item that's being added
			}
		});
	};

	// On click, the add to basket function is going to run.
	// It is going to dispatch an action (ex: ADD_TO_BASKET)
	// then we listen to the action in the reducer
	// When the action comes in, the basket gets updated

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
				onPress={addToBasket}
				title="Add to basket"
			/>
		</View>
	);
}

export default Product;

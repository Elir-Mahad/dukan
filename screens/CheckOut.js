import React from "react";
import styles from "./ScreenStyles";
//
import { Text, TouchableOpacity, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
//
import { useStateValue } from "./StateProvider.js";
import CheckoutProduct from "./CheckoutProduct.js";
//
import { MaterialCommunityIcons } from "@expo/vector-icons";
//!------------------------------------------------------------IMPORTS

const CheckOut = ({ navigation }) => {
	//
	const [{ basket }] = useStateValue();
	// THIS IS THE DATA LAYER FROM STATE PROVIDER
	// THIS IS USUALLY SUMMONED
	// WHEN WILL NEED TO THE GRAB THE BASKET ITEMS
	// OR THE WHOLE BASKET SOMEWHERE IN THE COMPONENT
	//
	return (
		<KeyboardAvoidingView style={styles.DescriptionContainer}>
			{/*  */}
			<StatusBar style="light" />
			{/*  */}
			<Text style={styles.title}> Your Basket </Text>

			<TouchableOpacity
				//
				style={styles.next_button}
				onPress={() => navigation.navigate("Market")}
			>
				<MaterialCommunityIcons
					//
					name="chevron-left-circle-outline"
					size={54}
					color="black"
				/>
			</TouchableOpacity>

			{/*  */}
			<View>
				{basket.length === 0 ? ( // if the basket is empty, has no items, then return the below div
					<View>
						<Text> You shopping basket is empty</Text>
						<Text>
							You have no items in your basket. To buy one or more items, click
							'Add to basket' next to the item
						</Text>
					</View>
				) : (
					// other wise (i.e, if the basket is not empty) return the below div

					<View>
						{/* list all the checkout products */}

						{/* for every single item, return the checkout products component */}

						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
							/>
						))}
					</View>
				)}
			</View>
			{/*  */}
		</KeyboardAvoidingView>
	);
};
export default CheckOut;

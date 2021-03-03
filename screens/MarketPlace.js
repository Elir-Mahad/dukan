//
import React from "react";
import styles from "./ScreenStyles";
//
import { Text, TouchableOpacity, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
//
import Product from "./Product";
import item_book from "../assets/item_book.jpg";
import item_tv from "../assets/item_tv.jpg";

//
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ShoppingCartIcon from "./ShoppingCartIcon";
//
import { useStateValue } from "./StateProvider.js";
//!------------------------------------------------------------IMPORTS

const MarketPlace = ({ navigation }) => {
	//
	const [{ basket }] = useStateValue();
	//
	console.log(basket);
	//
	return (
		<KeyboardAvoidingView style={styles.welcome_container}>
			{/*  */}
			<StatusBar style="light" />
			{/*  */}

			<Text style={styles.title}> All products </Text>

			<View>
				{/* add shopping basket icon through material-ui */}

				<ShoppingCartIcon />

				<Text style={styles.itemcount}>
					{basket?.length}
					{/* This counts the items in the basket. 
							Then it displays the number of items that are in the basket. 
							So if the basket has a lenght of two, that means that it contains two items.
							
							Whenever the basket is being accessed, there will be a some time lag.
							Like 1 or 2 seconds to initialize.
							This time lag, will be registerd as an error 
							and the basket items will not be returned.
							To avoid this, we must add the conditional 
							(ternary) operator optional --> '?' after the word basket.
							This stops the error from popping up.*/}
				</Text>
			</View>

			<View>
				<Product
					id="1234"
					title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create"
					image={item_book}
				/>
				<Product
					id="1235"
					title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI VGA port),Black"
					image={item_tv}
				/>
			</View>

			<TouchableOpacity
				//
				style={styles.next_button}
				onPress={() => navigation.navigate("Check Out")}
			>
				<MaterialCommunityIcons
					//
					name="chevron-right-circle-outline"
					size={54}
					color="black"
				/>
			</TouchableOpacity>
			{/*  */}
		</KeyboardAvoidingView>
	);
};
export default MarketPlace;

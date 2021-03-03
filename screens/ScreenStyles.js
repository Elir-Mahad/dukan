import { StyleSheet } from "react-native";
import { white } from "ansi-colors";

export default StyleSheet.create({
	//
	// Styles for WelcomeOneScreen
	//
	welcome_container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 30
	},
	title: {
		fontSize: 25,
		marginBottom: 20,
		marginTop: 20
	},
	product_container: {
		backgroundColor: "white",
		borderWidth: 1,
		margin: 10,
		padding: 30,
		borderRadius: 10
	},
	product_name: {
		margin: 2,
		color: "black",
		marginBottom: 10,
		fontSize: 20
	},
	product_image: {
		marginBottom: 10,
		width: 200,
		height: 200,
		resizeMode: "contain"
	},
	itemcount: {
		position: "absolute",
		height: 35,
		width: 30,
		padding: 10,
		borderRadius: 15,
		backgroundColor: "lightblue",
		right: 35,
		bottom: 15,
		alignItems: "center",
		justifyContent: "center"
	},

	// WelcomeScreenTwo
	DescriptionContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
});

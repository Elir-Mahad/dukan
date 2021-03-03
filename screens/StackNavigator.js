//! ------------------------------------------------- IMPORTS
// below are foundational imports that come with the app
import React from "react";

// below imports are from react stack navigation
import { createStackNavigator } from "@react-navigation/stack";

// below are the different screen components
import MarketPlace from "./MarketPlace";
import CheckOut from "./CheckOut";
//

//!--- Declare the global screen options and initialize the createStackNaviagtor

const globalScreenOptions = {
	// The constant globalScreenOptions stores the below css styles
	headerStyle: { backgroundColor: "#222831" },
	headerTitleStyle: { color: "white" },
	headerTintiColor: "white"
};

const Stack = createStackNavigator();

const StackNavigator = () => {
	//
	return (
		<Stack.Navigator screenOptions={globalScreenOptions}>
			<Stack.Screen
				name="Market" // Give the component a name
				component={MarketPlace} // Import the component
			/>
			<Stack.Screen
				name="Check Out" // Give the component a name
				component={CheckOut} // Import the component
			/>
		</Stack.Navigator>
	);
};

export default StackNavigator;

//! ------------------------------------------------- IMPORTS
// below are foundational imports that come with the app
import React from "react";

// below imports are from react navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

// below are the different screen components
import StackNavigator from "./screens/StackNavigator";
//
import { StateProvider } from "./screens/StateProvider";
import { initialState } from "./screens/reducer.js";
import reducer from "./screens/reducer";
//! ------------------------------------------------- APP functional component

export default function App() {
	//
	return (
		<NavigationContainer>
			<StateProvider initialState={initialState} reducer={reducer}>
				<StackNavigator />
			</StateProvider>
		</NavigationContainer>
	);
}

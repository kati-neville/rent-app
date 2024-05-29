import { StatusBar } from "expo-status-bar";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "@/screens/app/dashboard";

const AppStack = createNativeStackNavigator();

export const AppNavigator = () => {
	const screenOptions = {
		headerShown: false,
	};

	return (
		<>
			<AppStack.Navigator
				initialRouteName="Dashboard"
				screenOptions={screenOptions}>
				<AppStack.Screen name="Dashboard" component={Dashboard} />
			</AppStack.Navigator>
		</>
	);
};

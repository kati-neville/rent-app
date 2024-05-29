import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "@/screens/auth/get-started";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "@/screens/auth/login";
import UserDetails from "@/screens/auth/onboarding/user-details";
import UserPhone from "@/screens/auth/onboarding/phone";
import VerifyPhone from "@/screens/auth/onboarding/verify-otp";
import Welcome from "@/screens/auth/welcome";
import Dashboard from "@/screens/app/dashboard";

export type AuthStackList = {
	Welcome: undefined;
	GetStarted: undefined;
	Login: undefined;
	UserDetails: undefined;
	UserPhone: undefined;
	VerifyPhone: undefined;
	Dashboard: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackList>();

export const AuthNavigator = () => {
	const commonOptions = {
		headerShown: false,
	};

	return (
		<>
			<AuthStack.Navigator
				initialRouteName="Dashboard"
				screenOptions={commonOptions}>
				<AuthStack.Screen name="Welcome" component={Welcome} />
				<AuthStack.Screen name="GetStarted" component={GetStarted} />
				<AuthStack.Screen name="Login" component={Login} />
				<AuthStack.Screen name="UserDetails" component={UserDetails} />
				<AuthStack.Screen name="UserPhone" component={UserPhone} />
				<AuthStack.Screen name="VerifyPhone" component={VerifyPhone} />
				<AuthStack.Screen name="Dashboard" component={Dashboard} />
			</AuthStack.Navigator>
		</>
	);
};

import { useFonts } from "expo-font";
import { queryClient } from "@/utils/client";
import { AppNavigator } from "./app-navigator";
import { AuthNavigator } from "./auth-navigator";
import * as SplashScreen from "expo-splash-screen";
import React, { useContext, useCallback } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HOOMI_WHITE } from "@/styles/colors";

// RootNavigator
SplashScreen.preventAutoHideAsync();

const RootNavigator = () => {
	const [fontsLoaded] = useFonts({
		PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
		PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
		PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
		PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			setTimeout(async () => {
				await SplashScreen.hideAsync();
			}, 2000);
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null!;
	}

	const navTheme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			background: HOOMI_WHITE,
		},
	};

	return (
		<>
			<StatusBar style="dark" />

			<NavigationContainer onReady={onLayoutRootView} theme={navTheme}>
				<QueryClientProvider client={queryClient}>
					{/* <AppNavigator /> */}
					<AuthNavigator />
					{/* {true ? <AppNavigator /> : <AuthNavigator />} */}
				</QueryClientProvider>
			</NavigationContainer>
		</>
	);
};

export default RootNavigator;

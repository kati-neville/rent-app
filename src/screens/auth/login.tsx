import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";
import React from "react";
import { Button } from "@/components/button";
import Spacer from "@/components/spacer";
import Logo from "@/assets/images/logo.jpg";
import { scale } from "react-native-size-matters";
import {
	FONT_FAMILY_POPPINS_BOLD,
	FONT_FAMILY_POPPINS_MEDIUM,
	FONT_FAMILY_POPPINS_REGULAR,
	FONT_FAMILY_POPPINS_SEMIBOLD,
} from "@/styles/fonts";
import { HOOMI_NEUTRAL } from "@/styles/colors";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackList } from "@/navigation/auth-navigator";
import Input from "@/components/input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Login() {
	const navigation: NavigationProp<AuthStackList> = useNavigation();

	return (
		<SafeAreaView style={{ flex: 1, justifyContent: "flex-end" }}>
			<View style={styles.container}>
				<View style={{ alignItems: "center" }}>
					<Text style={styles.title}>Welcome Back!</Text>

					<Spacer space={5} />

					<Text style={styles.description}>Very excited to see you again</Text>

					<Spacer space={40} />

					<Button variant="OUTLINED" text="Sign up with Google" />

					<Spacer space={16} />

					<Button variant="OUTLINED" text="Sign up with Facebook" />

					<Spacer space={16} />

					<View
						style={{
							flexDirection: "row",
							width: "100%",
							alignItems: "center",
							justifyContent: "center",
							gap: 4,
						}}>
						<View style={styles.line}></View>

						<Text style={{ fontFamily: FONT_FAMILY_POPPINS_MEDIUM }}> OR </Text>

						<View style={styles.line}></View>
					</View>

					<Spacer space={16} />

					<Input placeholder="Email address" />

					<Spacer space={16} />

					<Input placeholder="Password" type="Password" />

					<Spacer space={16} />

					<Button variant="PRIMARY" disabled text="Continue" />

					<Spacer space={16} />

					<TouchableOpacity onPress={() => navigation.navigate("GetStarted")}>
						<Text
							style={[
								styles.link,
								{
									color: HOOMI_NEUTRAL[900],
									fontFamily: FONT_FAMILY_POPPINS_MEDIUM,
								},
							]}>
							Forgot your password?
						</Text>
					</TouchableOpacity>
				</View>

				<View>
					<Text style={[styles.description, { fontSize: scale(14) }]}>
						Need an account ?{" "}
						<TouchableOpacity onPress={() => navigation.navigate("GetStarted")}>
							<Text
								style={[
									styles.link,
									{
										color: HOOMI_NEUTRAL[900],
									},
								]}>
								Sign up
							</Text>
						</TouchableOpacity>
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0.9,
		justifyContent: "space-between",
		padding: scale(16),
	},
	title: {
		fontFamily: FONT_FAMILY_POPPINS_BOLD,
		fontSize: scale(32),
		textAlign: "center",
	},
	description: {
		fontFamily: FONT_FAMILY_POPPINS_REGULAR,
		fontSize: scale(14),
		color: HOOMI_NEUTRAL[150],
		textAlign: "center",
	},
	link: {
		fontFamily: FONT_FAMILY_POPPINS_SEMIBOLD,
		color: HOOMI_NEUTRAL[550],
		textDecorationLine: "underline",
	},
	line: {
		height: scale(2),
		flexGrow: 1,
		backgroundColor: HOOMI_NEUTRAL[300],
	},
});

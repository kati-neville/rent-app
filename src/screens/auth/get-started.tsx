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
	FONT_FAMILY_POPPINS_REGULAR,
	FONT_FAMILY_POPPINS_SEMIBOLD,
} from "@/styles/fonts";
import { HOOMI_NEUTRAL } from "@/styles/colors";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackList } from "@/navigation/auth-navigator";

export default function GetStarted() {
	const navigation: NavigationProp<AuthStackList> = useNavigation();

	return (
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: "flex-end",
			}}>
			<View style={styles.container}>
				<View style={{ alignItems: "center" }}>
					<Image
						source={Logo}
						alt="logo"
						style={{ width: scale(202), height: scale(80) }}
					/>

					<Spacer space={28} />

					<Text style={styles.title}>Rent an apartment with just a click</Text>

					<Spacer space={5} />

					<Text style={styles.description}>
						Mauris pellentesque posuersedcon vallisnam nunc, eget egestas.
					</Text>
				</View>
				<View>
					<Button
						variant="OUTLINED"
						text="Sign up with Email"
						onPress={() => navigation.navigate("UserDetails")}
					/>

					<Spacer space={16} />

					<Button variant="OUTLINED" text="Sign up with Google" />

					<Spacer space={16} />

					<Button variant="OUTLINED" text="Sign up with Facebook" />

					<Spacer space={16} />

					<Text
						style={[
							styles.description,
							{
								fontSize: scale(10),
							},
						]}>
						By signing up I accept the{" "}
						<Text style={styles.link}>terms of use</Text> and the data{" "}
						<Text style={styles.link}>privacy policy.</Text>
					</Text>

					<Spacer space={40} />

					<Text style={[styles.description, { fontSize: scale(14) }]}>
						Already have an account ?{" "}
						<TouchableOpacity onPress={() => navigation.navigate("Login")}>
							<Text
								style={[
									styles.link,
									{
										color: HOOMI_NEUTRAL[900],
									},
								]}>
								Log in
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
});

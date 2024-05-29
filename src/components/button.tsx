import SvgFacebook from "@/assets/icons/facebook";
import { HOOMI_NEUTRAL, HOOMI_PRIMARY } from "@/styles/colors";
import { FONT_FAMILY_POPPINS_SEMIBOLD } from "@/styles/fonts";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { scale } from "react-native-size-matters";

export const Button = ({
	variant = "PRIMARY",
	text,
	disabled,
	onPress,
}: {
	variant?: "PRIMARY" | "OUTLINED";
	text: string;
	disabled?: boolean;
	onPress?: () => void;
}) => {
	const isPrimary = variant === "PRIMARY";

	return (
		<TouchableOpacity
			activeOpacity={disabled ? 1 : 0.6}
			disabled={disabled}
			onPress={onPress}
			style={[
				styles.container,
				{
					backgroundColor: isPrimary ? HOOMI_PRIMARY[500] : "",
					borderWidth: isPrimary ? 0 : scale(1),
					opacity: disabled ? 0.4 : 1,
				},
			]}>
			{/* <SvgFacebook /> */}
			<Text
				style={[
					styles.text,
					{ color: isPrimary ? "white" : HOOMI_NEUTRAL[900] },
				]}>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		paddingVertical: scale(14),
		borderRadius: 50,
		borderColor: HOOMI_NEUTRAL[900],
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		gap: scale(8),
	},
	text: {
		fontFamily: FONT_FAMILY_POPPINS_SEMIBOLD,
		fontSize: scale(16),
	},
});

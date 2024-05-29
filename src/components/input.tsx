import React from "react";
import { HOOMI_NEUTRAL } from "@/styles/colors";
import { scale } from "react-native-size-matters";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { FONT_FAMILY_POPPINS_REGULAR } from "@/styles/fonts";

const Input = ({
	type = "text",
	placeholder,
}: {
	type?: "Password" | "text";
	placeholder?: string;
}) => {
	return (
		<>
			<TextInput
				style={styles.container}
				placeholder={placeholder}
				secureTextEntry={type === "Password"}
				autoCapitalize={"none"}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		paddingVertical: scale(14),
		paddingHorizontal: scale(24),
		borderRadius: 50,
		borderColor: HOOMI_NEUTRAL[900],
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: HOOMI_NEUTRAL[350],
		fontFamily: FONT_FAMILY_POPPINS_REGULAR,
		fontSize: scale(16),
	},
});

export default Input;

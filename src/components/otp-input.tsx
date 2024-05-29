import { scale } from "react-native-size-matters";
import React, { useEffect, useRef, useState } from "react";
import { FONT_FAMILY_POPPINS_MEDIUM } from "@/styles/fonts";
import { HOOMI_NEUTRAL, HOOMI_PRIMARY } from "@/styles/colors";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

const MAX_INPUT_LENGTH = 6;

const OtpInput = () => {
	const [otpCode, setOTPCode] = useState("");
	const inputRef: React.LegacyRef<TextInput> = useRef(null);
	const [isInputBoxFocused, setIsInputBoxFocused] = useState(true);

	const boxArray = new Array(MAX_INPUT_LENGTH).fill(0);

	const handleOnPress = () => {
		setIsInputBoxFocused(true);
		inputRef.current?.focus();
	};
	const handleOnBlur = () => {
		setIsInputBoxFocused(false);
	};

	useEffect(() => {
		handleOnPress();
	}, []);

	const BoxDigit = (_: any, index: any) => {
		const emptyInput = "";
		const digit = otpCode[index] || emptyInput;

		const isCurrentValue = index === otpCode.length;
		const isLastValue = index === MAX_INPUT_LENGTH - 1;
		const isCodeComplete = otpCode.length === MAX_INPUT_LENGTH;

		const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

		return (
			<View
				key={index}
				style={[
					styles.splitBoxes,
					isInputBoxFocused && isValueFocused ? styles.splitBoxesFocused : {},
				]}>
				<Text style={styles.splitText}>{digit}</Text>
			</View>
		);
	};

	return (
		<>
			<Pressable
				onPress={handleOnPress}
				style={{
					flexDirection: "row",
					width: "100%",
					gap: scale(8),
				}}>
				{boxArray.map(BoxDigit)}
			</Pressable>

			<TextInput
				style={styles.input}
				value={otpCode}
				onChangeText={setOTPCode}
				maxLength={MAX_INPUT_LENGTH}
				ref={inputRef}
				onBlur={handleOnBlur}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	input: {
		width: "100%",
		borderColor: "red",
		borderWidth: 1,
		borderRadius: 5,
		padding: 15,
		marginTop: 20,
		display: "none",
	},
	splitBoxes: {
		borderWidth: 2,
		borderColor: "#E8E8E8",
		backgroundColor: HOOMI_NEUTRAL[350],
		height: scale(48),
		flexGrow: 1,
		borderRadius: scale(10),
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
	},
	splitBoxesFocused: {
		borderColor: HOOMI_PRIMARY[500],
		backgroundColor: HOOMI_PRIMARY[100],
	},
	splitText: {
		fontFamily: FONT_FAMILY_POPPINS_MEDIUM,
		fontSize: scale(16),
	},
});
export default OtpInput;

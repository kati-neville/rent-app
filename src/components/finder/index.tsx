import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FONT_FAMILY_POPPINS_SEMIBOLD } from "@/styles/fonts";
import { scale } from "react-native-size-matters";
import { HOOMI_NEUTRAL } from "@/styles/colors";
import Spacer from "../spacer";
import Input from "../input";

const Finder = () => {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={true}
			onRequestClose={() => {}}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<View style={styles.handle}></View>

					<Spacer space={20} />

					<Text style={styles.title}>Hi there, Daniel</Text>

					<Spacer space={20} />

					<Input placeholder="Search apartment" />

					<Spacer space={10} />

					<Input placeholder="Search location" />
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		width: "100%",
		alignSelf: "center",
	},
	modalView: {
		backgroundColor: "white",
		borderRadius: 20,
		flex: 0.3,
		paddingHorizontal: scale(16),
		paddingTop: scale(9),
		paddingBottom: scale(40),
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		width: "100%",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},

		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	handle: {
		backgroundColor: HOOMI_NEUTRAL[350],
		height: scale(4),
		width: scale(40),
		borderRadius: 50,
		alignSelf: "center",
	},

	title: {
		fontFamily: FONT_FAMILY_POPPINS_SEMIBOLD,
		fontSize: scale(20),
		textAlign: "left",
	},
});

export default Finder;

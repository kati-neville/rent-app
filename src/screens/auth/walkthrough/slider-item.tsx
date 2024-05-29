import { HOOMI_NEUTRAL } from "@/styles/colors";
import {
	FONT_FAMILY_POPPINS_BOLD,
	FONT_FAMILY_POPPINS_REGULAR,
} from "@/styles/fonts";
import React from "react";
import {
	StyleSheet,
	View,
	Image,
	useWindowDimensions,
	Text,
} from "react-native";
import { scale } from "react-native-size-matters";

const SliderItem = ({ item }: { item: any }) => {
	const { width, height } = useWindowDimensions();

	return (
		<View style={{ width: width, flex: 1 }}>
			<View
				style={{
					width,
					height: scale(height / 1.83),
					justifyContent: "center",
				}}>
				{item.image ? (
					<Image
						source={item.image}
						style={{
							width: "100%",
							height: "100%",
						}}
					/>
				) : null}
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.description}>{item.explainer}</Text>
			</View>
		</View>
	);
};

export default SliderItem;

const styles = StyleSheet.create({
	container: {},
	image: {},
	textContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
	},
	title: {
		textAlign: "center",
		color: HOOMI_NEUTRAL[500],
		fontFamily: FONT_FAMILY_POPPINS_BOLD,
		fontSize: scale(28),
	},
	description: {
		paddingTop: 8,
		paddingHorizontal: 16,
		textAlign: "center",
		color: HOOMI_NEUTRAL[100],
		fontFamily: FONT_FAMILY_POPPINS_REGULAR,
		fontSize: scale(14),
	},
});

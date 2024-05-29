import React from "react";
import {
	View,
	Animated,
	useWindowDimensions,
	StyleSheet,
	ViewStyle,
} from "react-native";
import { scale } from "react-native-size-matters";

export default function Paginator({
	data,
	scrollX,
	dotStyles,
}: {
	data: any;
	scrollX: any;
	dotStyles?: ViewStyle;
}) {
	const { width } = useWindowDimensions();

	return (
		<View
			style={{
				flexDirection: "row",
			}}>
			{data.map((dot: any, i: number) => {
				const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

				const opacity = scrollX.interpolate({
					inputRange,
					outputRange: [0.3, 1, 0.3],
					extrapolate: "clamp",
				});

				return (
					<Animated.View
						style={[styles.dot, { opacity }, dotStyles]}
						key={i.toString()}
					/>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	dot: {
		height: scale(8),
		width: scale(8),
		borderRadius: 50,
		backgroundColor: "#000000",
		marginHorizontal: 8,
	},
});

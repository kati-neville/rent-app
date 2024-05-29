import { View, Text } from "react-native";
import React from "react";
import Slider from "./walkthrough/slider";

export default function Welcome() {
	return (
		<View style={{ flex: 1 }}>
			<Slider />
		</View>
	);
}

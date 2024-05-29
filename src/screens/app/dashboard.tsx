import Finder from "@/components/finder";
import { FONT_FAMILY_POPPINS_BOLD } from "@/styles/fonts";
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
	return (
		<SafeAreaView>
			<Text style={{ fontFamily: FONT_FAMILY_POPPINS_BOLD }}>
				THIS IS THE DASHBOARD PAGE{" "}
			</Text>

			<Finder />
		</SafeAreaView>
	);
}

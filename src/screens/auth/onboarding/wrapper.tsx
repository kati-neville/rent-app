import { Button } from "@/components/button";
import Spacer from "@/components/spacer";
import { AuthStackList } from "@/navigation/auth-navigator";
import { HOOMI_NEUTRAL } from "@/styles/colors";
import {
	FONT_FAMILY_POPPINS_BOLD,
	FONT_FAMILY_POPPINS_REGULAR,
} from "@/styles/fonts";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { ReactNode } from "react";
import {
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { scale } from "react-native-size-matters";

const Wrapper = ({
	children,
	title,
	description,
	onPress,
	buttonText = "Next",
	onOutsidePress,
}: {
	children: ReactNode;
	title?: string;
	description?: string;
	onPress?: () => void;
	buttonText?: string;
	onOutsidePress?: () => void;
}) => {
	const navigation: NavigationProp<AuthStackList> = useNavigation();

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Pressable style={{ flex: 1 }} onPress={onOutsidePress}>
				<View style={styles.container}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Text style={{ fontSize: 16 }}>Go back</Text>
					</TouchableOpacity>

					<Text style={styles.title}>{title}</Text>

					<Text style={styles.description}>{description}</Text>

					<Spacer space={40} />

					{children}

					<View style={styles.buttonBottom}>
						<Button text={buttonText} onPress={onPress} />
					</View>
				</View>
			</Pressable>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: scale(16),
		flex: 1,
		paddingVertical: scale(36),
	},
	title: {
		fontFamily: FONT_FAMILY_POPPINS_BOLD,
		fontSize: scale(28),
		textAlign: "center",
	},
	description: {
		fontFamily: FONT_FAMILY_POPPINS_REGULAR,
		fontSize: scale(14),
		color: HOOMI_NEUTRAL[150],
		textAlign: "center",
	},
	buttonBottom: {
		position: "absolute",
		width: "100%",
		bottom: 0,
		alignSelf: "center",
	},
});
export default Wrapper;

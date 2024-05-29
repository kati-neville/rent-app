import React from "react";
import Wrapper from "./wrapper";
import Input from "@/components/input";
import Spacer from "@/components/spacer";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackList } from "@/navigation/auth-navigator";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const UserDetails = () => {
	const navigation: NavigationProp<AuthStackList> = useNavigation();

	return (
		<Wrapper
			title="Welcome to hoomie"
			description="Creating your new account"
			onPress={() => navigation.navigate("UserPhone")}>
			<KeyboardAwareScrollView
				bounces={false}
				showsVerticalScrollIndicator={false}>
				<Input placeholder="First name" />

				<Spacer space={16} />

				<Input placeholder="Last name" />

				<Spacer space={16} />
				<Input placeholder="Date of Birth" />

				<Spacer space={16} />

				<Input placeholder="Email" />
			</KeyboardAwareScrollView>
		</Wrapper>
	);
};

export default UserDetails;

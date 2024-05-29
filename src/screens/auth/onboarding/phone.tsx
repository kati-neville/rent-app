import React from "react";
import Wrapper from "./wrapper";
import Input from "@/components/input";
import Spacer from "@/components/spacer";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackList } from "@/navigation/auth-navigator";

const UserDetails = () => {
	const navigation: NavigationProp<AuthStackList> = useNavigation();

	return (
		<Wrapper
			title="Hi, Nana!"
			description="Please add your number"
			onPress={() => navigation.navigate("VerifyPhone")}>
			<Input placeholder="Phone number" />
		</Wrapper>
	);
};

export default UserDetails;

import React from "react";
import { Keyboard } from "react-native";
import OtpInput from "@/components/otp-input";
import Wrapper from "./wrapper";

const VerifyPhone = () => {
	return (
		<Wrapper
			title="Hi, Nana!"
			description="Enter your phone number"
			buttonText="Verify"
			onOutsidePress={() => Keyboard.dismiss()}>
			<OtpInput />
		</Wrapper>
	);
};

export default VerifyPhone;

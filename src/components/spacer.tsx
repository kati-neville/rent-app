import { View, Text } from "react-native";
import React from "react";
import { verticalScale } from "react-native-size-matters";

export default function Spacer({ space }: { space: number }) {
	return <View style={{ height: verticalScale(space) }}></View>;
}

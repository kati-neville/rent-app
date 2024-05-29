import React, { useRef } from "react";

import { SplashData } from "./data";
import Paginator from "./paginator";
import SliderItem from "./slider-item";
import { Button } from "@/components/button";
import Spacer from "@/components/spacer";
import { View, StyleSheet, FlatList, Animated } from "react-native";
import { scale } from "react-native-size-matters";
import { AuthStackList } from "@/navigation/auth-navigator";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const Slider = () => {
	const slidesRef = useRef<any>(null);
	const navigation: NavigationProp<AuthStackList> = useNavigation();

	const scrollX = useRef(new Animated.Value(0)).current;

	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

	return (
		<View style={styles.container}>
			<FlatList
				data={SplashData}
				renderItem={({ item }) => <SliderItem item={item} />}
				horizontal
				showsHorizontalScrollIndicator={false}
				bounces
				style={{ marginBottom: 10 }}
				pagingEnabled
				keyExtractor={item => item.step}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{
						useNativeDriver: false,
					}
				)}
				scrollEventThrottle={32}
				viewabilityConfig={viewConfig}
				ref={slidesRef}
			/>

			<Paginator data={SplashData} scrollX={scrollX} />

			<Spacer space={26} />

			<View style={{ paddingHorizontal: scale(28), width: "100%" }}>
				<Button
					text="Continue"
					onPress={() => navigation.navigate("GetStarted")}
				/>
			</View>

			<Spacer space={26} />
		</View>
	);
};

export default Slider;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
});

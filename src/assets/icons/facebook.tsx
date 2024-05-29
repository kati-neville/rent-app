import * as React from "react";
import Svg, {
	SvgProps,
	Circle,
	Path,
	Defs,
	LinearGradient,
	Stop,
} from "react-native-svg";

const SvgFacebook = (props: SvgProps) => (
	<Svg width={25} height={24} fill="none" {...props}>
		<Circle cx={12.5} cy={12} r={10.5} fill="url(#a)" />
		<Path
			fill="#fff"
			d="m16.41 15.211.467-2.963h-2.918v-1.923c0-.81.407-1.602 1.714-1.602H17V6.2S15.796 6 14.645 6c-2.404 0-3.974 1.42-3.974 3.989v2.259H8v2.963h2.671v7.165a10.856 10.856 0 0 0 3.288 0V15.21h2.451Z"
		/>
		<Defs>
			<LinearGradient
				id="a"
				x1={12.5}
				x2={12.5}
				y1={1.5}
				y2={22.438}
				gradientUnits="userSpaceOnUse">
				<Stop stopColor="#18ACFE" />
				<Stop offset={1} stopColor="#0163E0" />
			</LinearGradient>
		</Defs>
	</Svg>
);
export default SvgFacebook;

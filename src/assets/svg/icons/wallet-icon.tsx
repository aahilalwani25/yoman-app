import { COLORS } from "@/src/config/constants"
import * as React from "react"
import { scale, verticalScale } from "react-native-size-matters"
import Svg, { SvgProps, Path, Rect } from "react-native-svg"
const SvgWalletIcon = (props: SvgProps) => (
  <Svg
    width={scale(25)}
    height={verticalScale(24)}
    fill="none"
    {...props}
  >
    <Path
      stroke={COLORS.primary.color}
      strokeWidth={1.5}
      d="M27 8h-7a4 4 0 0 0 0 8h7m-15.4 7h5.8c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C27 18.44 27 16.76 27 13.4v-2.8c0-3.36 0-5.04-.654-6.324a6 6 0 0 0-2.622-2.622C22.44 1 20.76 1 17.4 1h-5.8c-3.36 0-6.04 0-7.324.654a6 6 0 0 0-2.622 2.622C1 5.56 1 7.24 1 10.6v2.8c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C5.56 23 8.24 23 11.6 23Z"
    />
    <Rect width={3} height={2} x={19} y={11} fill={COLORS.primary.color} rx={1} />
    <Rect width={8} height={2} x={5} y={5} fill={COLORS.primary.color} rx={1} />
  </Svg>
)
export default SvgWalletIcon

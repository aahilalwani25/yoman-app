import { COLORS } from "@/src/config/constants"
import * as React from "react"
import { scale, verticalScale } from "react-native-size-matters"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgShareIcon = (props: SvgProps) => (
  <Svg
    width={scale(24)}
    height={verticalScale(24)}
    fill="none"
    {...props}
  >
    <Path
      stroke={COLORS.primary.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.4 6.32 8.49-2.83c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.49c-1.9 5.71-5.02 5.71-6.92 0l-.84-2.52-2.52-.84c-5.71-1.9-5.71-5.01 0-6.92ZM10.11 13.65l3.58-3.59"
    />
  </Svg>
)
export default SvgShareIcon

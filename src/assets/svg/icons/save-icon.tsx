import { COLORS } from "@/src/config/constants"
import * as React from "react"
import { scale, verticalScale } from "react-native-size-matters"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgSaveIcon = (props: SvgProps) => (
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
      d="M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86C20.68 3.74 18.95 2 16.82 2Z"
    />
  </Svg>
)
export default SvgSaveIcon

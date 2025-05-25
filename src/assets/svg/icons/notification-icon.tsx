import * as React from "react"
import { scale, verticalScale } from "react-native-size-matters"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgNotificationIcon = (props: SvgProps) => (
  <Svg
    width={scale(12)}
    height={verticalScale(15)}
    className="self-center flex"
    fill="none"
    {...props}
  >
    <Path
      stroke="#757575"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 11.898c3.76 0 5.499-.482 5.667-2.418 0-1.934-1.213-1.81-1.213-4.183 0-1.854-1.757-3.964-4.454-3.964s-4.454 2.11-4.454 3.964c0 2.373-1.213 2.249-1.213 4.183.169 1.944 1.908 2.418 5.667 2.418Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#757575"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.593 13.905c-.91 1.01-2.329 1.022-3.247 0"
    />
  </Svg>
)
export default SvgNotificationIcon

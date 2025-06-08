import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"


interface Props extends SvgProps{
    focused:boolean
}

const SvgProfileIcon = (props: Props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.focused?"#F50":"#B2B2B2"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.537 18.052c-3.076 0-5.704-.48-5.704-2.396 0-1.918 2.611-3.688 5.704-3.688 3.077 0 5.704 1.753 5.704 3.67s-2.61 2.414-5.704 2.414ZM10.531 9.311a3.655 3.655 0 1 0-3.656-3.655 3.643 3.643 0 0 0 3.63 3.655h.026Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgProfileIcon

import { COLORS } from "@/src/config/constants";
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg";

interface Props extends SvgProps{
    focused:boolean
}

const SvgCartIcon = (props: Props) => (
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
      d="M13.761 17.917H6.805c-2.555 0-4.516-.923-3.959-4.638l.648-5.034C3.838 6.39 5.02 5.682 6.057 5.682h8.482c1.053 0 2.167.763 2.563 2.563l.649 5.034c.473 3.295-1.434 4.638-3.99 4.638Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.focused?COLORS.primary.light.color:"#B2B2B2"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.876 5.499a3.6 3.6 0 0 0-3.6-3.6 3.6 3.6 0 0 0-3.616 3.6M12.747 9.252h-.038M7.888 9.252H7.85"
    />
  </Svg>
)
export default SvgCartIcon

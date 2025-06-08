import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props extends SvgProps{
    focused:boolean
}
const SvgHomeIcon = (props: Props) => (
  <Svg
    
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill={props.focused?"#F50":"#B2B2B2"}
      d="M5.612 16.311v-2.548c0-.65.531-1.178 1.187-1.178h2.395c.314 0 .616.124.839.345.222.221.347.52.347.833v2.548c-.002.27.105.53.297.723.192.191.453.3.726.3h1.633a2.884 2.884 0 0 0 2.037-.833c.54-.535.844-1.262.844-2.02V7.223a2.06 2.06 0 0 0-.746-1.585L9.61 1.23a2.581 2.581 0 0 0-3.29.06L.89 5.636a2.062 2.062 0 0 0-.806 1.585v7.252a2.87 2.87 0 0 0 2.88 2.86H4.56c.566 0 1.026-.454 1.03-1.015l.022-.008Z"
    />
  </Svg>
)
export default SvgHomeIcon

import * as React from "react"
import { scale, verticalScale } from "react-native-size-matters"
import Svg, { SvgProps, Path } from "react-native-svg";


interface Props extends SvgProps{
    focused:boolean
}

const SvgSaveIcon = (props: Props) => (
    <Svg
        width={scale(24)}
        height={verticalScale(24)}
        fill="none"
        {...props}
    >
        <Path
            stroke="#F50"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M1.704 7.26c-.625-1.954.107-4.383 2.158-5.044 1.08-.348 2.411-.057 3.168.986.713-1.082 2.083-1.332 3.161-.986 2.051.66 2.787 3.09 2.162 5.044-.974 3.098-4.373 4.711-5.323 4.711-.95 0-4.319-1.577-5.326-4.71Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#F50"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.21 4.412c.704.073 1.144.63 1.118 1.413"
        />
    </Svg>
)
export default SvgSaveIcon

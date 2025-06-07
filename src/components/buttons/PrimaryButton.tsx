import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { GestureResponderEvent, Text } from 'react-native'
import { COLORS } from '@/src/config/constants'

interface Props {
    title: string
    onPress?: (event: GestureResponderEvent) => void
    backgroundColor?: string
    buttonWidth?: "sm" | "md" | "lg" | "xl" | "full"
    textColor?: string
    btnClassName?: string
    textClassName?: string
}

function PrimaryButton({ backgroundColor = COLORS.primary.light.color, textColor = "#ffffff", ...props }: Props) {
    const [btnWidth, setBtnWidth] = useState("w-32");

    useEffect(() => {
        if (props.buttonWidth) {
            switch (props.buttonWidth) {
                case "sm":
                    setBtnWidth("w-20");
                    break;
                case "md":
                    setBtnWidth("w-28");
                    break;
                case "lg":
                    setBtnWidth("w-40");
                    break;
                case "xl":
                    setBtnWidth("w-96");
                    break;
                case "full":
                    setBtnWidth("w-full");
                default:
                    setBtnWidth("w-32");
                    break;
            }
        }
    }, [props.buttonWidth])

    return (
        <Button onPress={props.onPress} className={`${btnWidth} rounded-full h-12 ${props.btnClassName}`} style={{ backgroundColor }}>
            <Text style={{ fontFamily: "PP-Mori", color: textColor }} className={props.textClassName}>{props.title?.toLocaleUpperCase()}</Text>
        </Button>
    )
}

export default PrimaryButton

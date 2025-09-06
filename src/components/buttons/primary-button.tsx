import React, { useEffect, useState } from 'react'
import { Button, ButtonText } from '../ui/button'
import { GestureResponderEvent, StyleSheet, Text, ViewStyle } from 'react-native'
import { COLORS } from '@/src/config/constants'
import { StyleProp } from 'react-native'

interface Props {
    title: string
    btnStyle?: StyleProp<ViewStyle>
    onPress?: (event: GestureResponderEvent) => void
    backgroundColor?: string
    buttonWidth?: "sm" | "md" | "lg" | "xl" | "full"
    textColor?: string
    btnClassName?: string
    textClassName?: string
    isDisabled?: boolean
}

function PrimaryButton({ backgroundColor = COLORS.primary.light.color, isDisabled=false, textColor = "#ffffff", ...props }: Props) {
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
                    break;
                default:
                    setBtnWidth("w-32");
                    break;
            }
        }
    }, [props.buttonWidth])

    return (
        <Button isDisabled={isDisabled} onPress={props.onPress} className={`${btnWidth} rounded-full h-12 ${props.btnClassName}`} style={[{ backgroundColor }, props.btnStyle]}>
            <ButtonText style={{ fontFamily: "PP-Mori", color: textColor }} className={props.textClassName}>{props.title?.toLocaleUpperCase()}</ButtonText>
        </Button>
    )
}

export default PrimaryButton

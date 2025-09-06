import React from 'react'
import { Input, InputField as In } from '../ui/input'
import { NativeSyntheticEvent, Text, TextInputChangeEventData, View } from 'react-native'

interface Props {
    placeholder: string
    onChange: ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void) | undefined
    onBlur: any
    label: string
}

function InputField({ ...props }: Props) {
    return (
        <View className='flex w-full gap-y-2'>
            <Text className='font-pp-mori-semibold'>{props.label}</Text>
            <Input className='rounded-md h-12'>
                <In
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    placeholderClassName='font-pp-mori'
                    className='font-pp-mori'
                />
            </Input>
        </View>
    )
}

export default InputField

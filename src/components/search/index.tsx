import React from 'react'
import { Input, InputField, InputSlot } from '../ui/input'
import { SearchIcon } from '../ui/icon'

interface Props {
    placeholder: string
    onChangeText?: ((text: string) => void) | undefined
}

function SearchInput({ ...props }: Props) {
    return (
        <Input className='w-80 rounded-full h-12 bg-[#F7F7F7]'>
            <SearchIcon color={'#B3B3B3'} fill={'transparent'} height={20} width={40}/>
            <InputField
                placeholder={props.placeholder}
                placeholderTextColor={'#757575'}

                className='font-pp-mori'
                onChangeText={props.onChangeText}
            />
        </Input>
    )
}

export default SearchInput

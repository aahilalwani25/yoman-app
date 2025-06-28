import React from 'react'
import { Input, InputField, InputSlot } from '../ui/input'
import { SearchIcon } from '../ui/icon'
import SearchResults from '../search-results'
import { VStack } from '../ui/vstack'
import { ProductResponse } from '@/src/modules/products/domain/products'
import { useRouter } from 'expo-router'

interface Props {
    placeholder: string
    onChangeText?: ((text: string) => void) | undefined
    searchedData: ProductResponse[]
    //searcText: string | null
}

function SearchInput({ ...props }: Props) {
    const router = useRouter();

    const onResultItemPress = (id: string) => {
        router.push(`/${id}`)
    }
    return (
        <VStack className='z-40 flex justify-start items-end relative'>

            <Input className='w-80 rounded-full h-12 bg-[#F7F7F7]'>
                <SearchIcon color={'#B3B3B3'} fill={'transparent'} height={20} width={40} />
                <InputField
                    placeholder={props.placeholder}
                    placeholderTextColor={'#757575'}
                    className='font-pp-mori'
                    onChangeText={props.onChangeText}
                />
            </Input>
            {(props.searchedData?.length > 0) ? (
                <SearchResults
                    onResultItemPress={onResultItemPress}
                    searchedData={props.searchedData} />
            ) : null
            }
        </VStack>
    )
}

export default SearchInput

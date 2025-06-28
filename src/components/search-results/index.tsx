import { FlashList } from '@shopify/flash-list';
import { ProductResponse } from '@/src/modules/products/domain/products'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';

interface Props {
    searchedData: ProductResponse[] | undefined
    onResultItemPress: (id:string)=>void
}

function SearchResults({ ...props }: Props) {

    const renderSearchItem = ({ item }: { item: ProductResponse }) => {
        return (
            <TouchableOpacity onPress={()=>props.onResultItemPress(item.id)} className='w-full h-10 justify-center'>
                <Text className='font-pp-mori text-black'>{item.title}</Text>
            </TouchableOpacity>
        )
    }


    return (
        <View className='h-40 items-center flex justify-center self-center absolute mt-14 z-40'>
            <FlashList
                data={props.searchedData}
                renderItem={renderSearchItem}
                estimatedItemSize={100}
                scrollEnabled
                className='w-80 h-full flex bg-[#F7F7F7]'
                contentContainerClassName='items-center justify-center'
                estimatedListSize={{ width: 200, height: 400 }}
            />
        </View>
    )
}

export default SearchResults

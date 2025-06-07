import { FlashList } from '@shopify/flash-list'
import React, { useCallback } from 'react'
import { ProductResponse } from '../../domain/products'
import ProductCard from '@/src/components/product-card'
import { View } from 'react-native'

interface Props {
    productData: ProductResponse[]
}


function GetAllProductsView({ ...props }: Props) {

    const renderProductData = useCallback(
        ({ item }: { item: ProductResponse }) => (
            <ProductCard {...item} />
        ), [props.productData])

    return (
        <FlashList
            data={props.productData}
            renderItem={renderProductData}
            estimatedListSize={{ width: 200, height: 200 }}
            estimatedItemSize={100}
            ItemSeparatorComponent={() => <View className='h-5 w-5' />}
            numColumns={2}
            className='flex w-full'
            showsVerticalScrollIndicator={false}
            contentContainerClassName='justify-between items-center'
        />
    )
}

export default GetAllProductsView

import { ProductResponse } from '@/src/modules/products/domain/products'
import React from 'react'
import { Image, Text, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';



function ProductCard({ ...props }: ProductResponse) {
  return (
    <View className='bg-[#F7F7F7] w-44 h-64 rounded-lg items-center justify-center'>
      <View className='w-36 h-32 flex items-center justify-center'>
        <Image src={props.image} width={scale(60)} height={verticalScale(70)} />
      </View>
      <View className='w-36'>
        <Text className='font-pp-mori'>{props.title}</Text>
        <Text className='font-pp-mori-semibold'>${props.price}</Text>
      </View>
    </View>
  )
}

export default ProductCard

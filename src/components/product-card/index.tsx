import { ProductResponse } from '@/src/modules/products/domain/products'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Rating } from 'react-native-ratings';
import { useRouter } from 'expo-router';


function ProductCard({ ...props }: ProductResponse) {
  const titleLength= props.title?.length;
  const router= useRouter();

  const navigateToProductDetail= ()=>{
    router.push(`/${props.id}`)
  }

  return (
    <TouchableOpacity onPress={navigateToProductDetail} className='bg-[#F7F7F7] w-44 h-64 rounded-lg items-center justify-center gap-2'>
      <View className='w-36 h-32 flex items-center justify-center'>
        <Image resizeMode='contain' className='object-contain' src={props.image} width={scale(70)} height={verticalScale(90)} />
      </View>
      <View className='w-36'>
        <Text className='font-pp-mori' style={style.titleText}>{props.title.slice(0,50)}{titleLength>50?"  ...See More":""}</Text>
        <Text className='font-pp-mori-semibold'>${props.price}</Text>
      </View>

      <View className='items-center justify-around w-full flex-row'>
        <Rating type='star' imageSize={10} ratingBackgroundColor='transparent' />
        <Text>{props.rating.rate}({props.rating.count})</Text>
      </View>
    </TouchableOpacity>
  )
}

const style= StyleSheet.create({
  titleText:{
    fontSize: moderateScale(12)
  }
})

export default ProductCard

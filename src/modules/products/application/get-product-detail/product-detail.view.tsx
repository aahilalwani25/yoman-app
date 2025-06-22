import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ProductResponse } from '../../domain/products'
import { Image } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { useTranslation } from 'react-i18next'
import { StarIcon } from '@/src/components/ui/icon'
import PrimaryButton from '@/src/components/buttons/primary-button'
import { COLORS } from '@/src/config/constants';
import ImageView from "react-native-image-viewing";

interface Props extends ProductResponse {
    isAdded: boolean
    addProductToCart: () => void
    removeProductFromCart: () => void
}

function ProductDetailView({ ...props }: Props) {

    const { t } = useTranslation();
    const [visible, setIsVisible] = useState(false);


    const toggleImageView= ()=>{
        setIsVisible(v=>!v)
    }

    return (
        <>
            <ScrollView className='bg-white flex flex-1 w-full h-full'>
                <View className='w-96 h-full self-center gap-5'>
                    <TouchableOpacity onPress={toggleImageView} className='w-full h-60 items-center justify-center flex'>
                        <Image
                            resizeMode='contain'
                            src={props.image}
                            width={scale(200)}
                            height={verticalScale(200)}
                            className='w-full h-full flex self-center mt-5' />
                    </TouchableOpacity>

                    <View className='gap-3'>
                        <Text style={{ fontSize: moderateScale(20) }} className='font-pp-mori-semibold text-[#303030]'>{props.title}</Text>
                        <View className='flex flex-row justify-between'>
                            <View className='flex flex-row gap-2'>
                                <Text className='font-pp-mori-semibold text-2xl text-orange-600'>${props.price}</Text>
                                <Text className='font-pp-mori text-gray-500 text-2xl'>|</Text>
                                <Text style={{ fontSize: moderateScale(10) }} className='font-pp-mori text-gray-500 flex self-center'>{t('includes-tax')}</Text>
                            </View>
                            <View className='flex flex-row gap-2'>
                                <StarIcon color={'#E8B931'} fill={'#E8B931'} width={20} height={20} />
                                <Text className='text-[#3F4343] text-2xl font-pp-mori-semibold'>{props?.rating?.rate}</Text>
                                <Text className='font-pp-mori text-gray-500 text-sm flex self-end pb-1'>({props?.rating?.count})</Text>
                            </View>
                        </View>
                    </View>

                    <View className='w-full h-auto items-center justify-center flex'>
                        <Text style={{ fontSize: moderateScale(15), lineHeight: 20 }} className='font-pp-mori'>{props.description}</Text>
                    </View>
                </View>
            </ScrollView>
            <View className='w-full h-40 flex items-center justify-center absolute' style={{ bottom: verticalScale(75) }}>
                <View className='flex gap-1 items-center justify-around'>
                    <PrimaryButton isDisabled={props.isAdded} onPress={props.addProductToCart} title={t('add-to-cart')} backgroundColor={COLORS.primary.light.text} buttonWidth='xl' />
                    <PrimaryButton title={t('buy-now')} buttonWidth='xl' />
                </View>
            </View>

            <ImageView
                images={[{uri:props.image}]}
                imageIndex={0}
                visible={visible}
                onRequestClose={toggleImageView}
            />
        </>
    )
}

export default ProductDetailView

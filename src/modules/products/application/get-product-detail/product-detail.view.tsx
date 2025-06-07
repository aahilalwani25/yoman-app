import React from 'react'
import { Text, View } from 'react-native'
import { ProductResponse } from '../../domain/products'
import { Image } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import { useTranslation } from 'react-i18next'
import { Rating } from 'react-native-ratings'
import { StarIcon } from '@/src/components/ui/icon'
import PrimaryButton from '@/src/components/buttons/PrimaryButton'
import { COLORS } from '@/src/config/constants'

function ProductDetailView({ ...props }: ProductResponse) {

    const { t } = useTranslation();

    return (
        <View className='w-full h-full bg-white'>
            <View className='w-96 h-full self-center gap-5'>
                <View className='w-full h-96 items-center justify-center flex'>
                    <Image
                        resizeMode='contain'
                        src={props.image}
                        width={scale(200)}
                        height={verticalScale(200)}
                        className='w-full h-full flex self-center' />
                </View>

                <View className='gap-3'>
                    <Text className='font-pp-mori-semibold text-2xl text-[#303030]'>{props.title}</Text>
                    <View className='flex flex-row justify-between'>
                        <View className='flex flex-row gap-2'>
                            <Text className='font-pp-mori-semibold text-2xl text-orange-600'>${props.price}</Text>
                            <Text className='font-pp-mori text-gray-500 text-2xl'>|</Text>
                            <Text className='font-pp-mori text-gray-500 text-sm flex self-center'>{t('includes-tax')}</Text>
                        </View>
                        <View className='flex flex-row gap-2'>
                            <StarIcon color={'#E8B931'} fill={'#E8B931'} width={20} height={20} />
                            <Text className='text-[#3F4343] text-2xl font-pp-mori-semibold'>{props?.rating?.rate}</Text>
                            <Text className='font-pp-mori text-gray-500 text-sm flex self-end pb-1'>({props?.rating?.count})</Text>
                        </View>
                    </View>
                </View>

                <View className='w-full h-auto items-center justify-center flex'>
                    <Text className='font-pp-mori text-lg'>{props.description}</Text>
                </View>

                <View className='flex items-center justify-around h-40 bottom-28 absolute'>
                    <PrimaryButton title={t('add-to-cart')} btnClassName='!h-16' backgroundColor={COLORS.primary.light.text} buttonWidth='xl' />
                    <PrimaryButton title={t('buy-now')} btnClassName='!h-16' buttonWidth='xl' />
                </View>
            </View>
        </View>
    )
}

export default ProductDetailView

import PrimaryButton from '@/src/components/buttons/primary-button'
import { Box } from '@/src/components/ui/box'
import { HStack } from '@/src/components/ui/hstack'
import { VStack } from '@/src/components/ui/vstack'
import { ProductCart, ProductCartState } from '@/src/redux/cart/state'
import { FlashList } from '@shopify/flash-list'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Image, ScrollView, Text, View } from 'react-native'
import { DELIVERY_CHARGES } from './checkout.constants'

interface Props {
    checkoutData: ProductCartState
    proceedToPaymentHandler: () => void
    paymentCost: number
    tax: number
}

function CheckoutView({ ...props }: Props) {

    const { t } = useTranslation();

    const renderCheckoutItem = ({ item }: { item: ProductCart }) => {
        return (
            <HStack className='w-96 h-32 bg-white rounded-lg items-center'>
                <Image source={{ uri: item.image }} width={100} height={100} resizeMode='contain' className='w-20 h-20' />
                <VStack className='w-56 h-full p-2 gap-10' space='lg'>
                    <Text className='font-pp-mori text-black'>{item.title}</Text>
                </VStack>

                <VStack className='h-full p-2 self-end items-end' space='lg'>
                    <Text className='font-pp-mori text-black'>{item.amount.toFixed(2)}</Text>
                    <Text> x {item.quantity}</Text>
                    <Text className='font-pp-mori-semibold text-lg text-orange-600'>${(item.amount * item.quantity).toFixed(2)}</Text>
                </VStack>
            </HStack>
        )
    }
    return (
        <View className='w-full h-full'>
            <View className='w-full h-20 bg-white items-center justify-center'>
                <Text className='font-pp-mori-semibold text-2xl'>{t('checkout')}</Text>
            </View>
            <ScrollView className='flex flex-1'>
                <View className='w-96 self-center pt-20'>
                    <FlashList
                        data={props.checkoutData.products}
                        className='flex'
                        estimatedListSize={{ width: 200, height: 200 }}
                        estimatedItemSize={100}
                        ItemSeparatorComponent={() => <View className='h-5 w-5' />}
                        contentContainerClassName='items-center justify-center self-center'
                        renderItem={renderCheckoutItem}
                    />
                </View>

            </ScrollView>
            <Box className='w-full gap-3 h-52 bg-white bottom-28 absolute rounded-t-2xl justify-center flex'>
                <HStack className='w-96 self-center items-center justify-between'>
                    <Text className='font-pp-mori-semibold text-lg'>{t('delivery-charges')}: </Text>
                    <Text className='font-pp-mori-semibold text-2xl text-orange-600'>${DELIVERY_CHARGES}</Text>
                </HStack>

                <HStack className='w-96 self-center items-center justify-between'>
                    <Text className='font-pp-mori-semibold text-lg'>{t('tax')} (2%): </Text>
                    <Text className='font-pp-mori-semibold text-2xl text-orange-600'>${props.tax}</Text>
                </HStack>

                <HStack className='w-96 self-center items-center justify-between'>
                    <Text className='font-pp-mori-semibold text-2xl'>{t('total')}: </Text>
                    <Text className='font-pp-mori-semibold text-2xl text-orange-600'>${props.paymentCost}</Text>
                </HStack>
                <VStack className='w-96 flex self-center items-center justify-center'>
                    <PrimaryButton buttonWidth='xl' textClassName='text-center' onPress={props.proceedToPaymentHandler} title={t('proceed-to-payment')} />
                </VStack>
            </Box>
        </View>
    )
}

export default CheckoutView

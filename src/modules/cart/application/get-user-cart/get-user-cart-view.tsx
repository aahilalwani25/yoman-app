import PrimaryButton from '@/src/components/buttons/primary-button';
import { Box } from '@/src/components/ui/box';
import { HStack } from '@/src/components/ui/hstack';
import { VStack } from '@/src/components/ui/vstack';
import { ProductCart } from '@/src/redux/cart/state';
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import SvgDeleteIcon from '@/src/assets/svg/icons/trash-icon';


interface Props {
  totalQuantity: number
  products: ProductCart[]
  totalAmount: number
  deleteItemFromCart: (productId: string) => void
  incrementQuantityIntoCart: (productId: string) => void
  decrementQuantityFromCart: (productId: string) => void
  proceedToCheckoutHandler: () => void
}

function GetUserCartView({ ...props }: Props) {

  const { t } = useTranslation();

  function DeleteAction(prog: SharedValue<number>, drag: SharedValue<number>, productId: string) {
    const styleAnimation = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: drag.value + 50 }],
      };
    });

    return (

      <Reanimated.View style={styleAnimation} className='w-20 h-full bg-red-600 rounded-r-lg pr-5'>
        <TouchableOpacity onPress={()=>{
          props.deleteItemFromCart(productId)}
        } className='w-full h-full flex items-end justify-center'>
          <SvgDeleteIcon color={"white"} />
        </TouchableOpacity>
      </Reanimated.View>
    );
  }


  const renderCartItem = ({ item }: { item: ProductCart }) => {
    return (
      <ReanimatedSwipeable friction={2}
        enableTrackpadTwoFingerGesture
        //rightThreshold={100} 
        renderRightActions={(prog,drag)=>DeleteAction(prog,drag,item.productId)}>

        <HStack className='w-96 h-32 bg-white rounded-lg items-center'>
          <Image source={{ uri: item.image }} width={100} height={100} resizeMode='contain' className='w-20 h-20' />
          <VStack className='w-56 h-full p-2 gap-10' space='lg'>
            <Text className='font-pp-mori text-black'>{item.title}</Text>
            <HStack className='w-full h-full' space='md'>
              <TouchableOpacity
                onPress={() => props.decrementQuantityFromCart(item.productId)}
                className='w-5 h-5 rounded-full items-center justify-center flex'
                style={{ backgroundColor: 'rgba(255, 85, 0, 0.1)' }}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => props.incrementQuantityIntoCart(item.productId)}
                className='w-5 h-5 rounded-full items-center justify-center flex'
                style={{ backgroundColor: 'rgba(255, 85, 0, 0.1)' }}>
                <Text>+</Text>
              </TouchableOpacity>
            </HStack>
          </VStack>

          <VStack className='h-full p-2 self-end items-end' space='lg'>
            <Text className='font-pp-mori text-black'>{item.amount.toFixed(2)}</Text>
            <Text> x {item.quantity}</Text>
            <Text className='font-pp-mori-semibold text-lg text-orange-600'>${(item.amount * item.quantity).toFixed(2)}</Text>
          </VStack>
        </HStack>
      </ReanimatedSwipeable>
    )
  }

  return (
    <GestureHandlerRootView>
      <ScrollView className='flex flex-1'>
        <View className='w-96 self-center pt-20'>
          <FlashList
            data={props.products}
            className='flex'
            estimatedListSize={{ width: 200, height: 200 }}
            estimatedItemSize={100}
            ItemSeparatorComponent={() => <View className='h-5 w-5' />}
            contentContainerClassName='items-center justify-center self-center'
            renderItem={renderCartItem}
          />
        </View>

      </ScrollView>
      <Box className='w-full gap-3 h-32 bg-white bottom-28 absolute rounded-t-2xl justify-center flex'>
        <View className='w-96 self-center items-center'>
          <Text>* Swipe to right to delete any item</Text>
        </View>
        <HStack className='w-96 self-center items-center justify-between'>
          <HStack>
            <Text className='font-pp-mori-semibold text-2xl'>{t('total')}: </Text>
            <Text className='font-pp-mori-semibold text-2xl text-orange-600'>${props.totalAmount.toFixed(2)}</Text>
          </HStack>
          <PrimaryButton title={t('checkout')} />
        </HStack>
      </Box>
    </GestureHandlerRootView>
  )
}

export default GetUserCartView

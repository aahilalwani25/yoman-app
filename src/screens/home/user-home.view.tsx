import SvgNotificationIcon from '@/src/assets/svg/icons/notification-icon';
import SearchInput from '@/src/components/search'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Image, ScrollView, Text, View } from 'react-native'
import { FlashList } from '@shopify/flash-list';
import { Categories, ProductResponse } from '@/src/modules/products/domain/products';
import GetAllProductContainer from '@/src/modules/products/application/get-all-products/get-all-products.container';

interface Props {
  productData: ProductResponse[]
  categories: Categories[]
  setSearchText: (value:string)=>void
  searchedData: ProductResponse[] | undefined
}
;
function UserHomeView({ ...props }: Props) {
  const { t } = useTranslation();

  const renderProductCategories = useCallback(
    ({ item }: { item: Categories }) => (
      <View className='border border-[#D9D9D9] h-10 w-fit px-10 rounded-full justify-center items-center flex'>
        <Text className='font-pp-mori font-semibold'>{item?.toUpperCase()}</Text>
      </View>
    ), [props.categories]);

  const itemSeperator = useCallback(
    () => (<View className='h-2 w-2' />)
  ,[])

  return (
    <View className='h-full w-screen flex bg-white'>
      <ScrollView className='w-96 flex h-full self-center' showsVerticalScrollIndicator={false}>
        <View className='w-full self-center flex flex-row items-center justify-around pt-10 relative'>
          <SearchInput
            placeholder={t('search-products')}
            searchedData={props.searchedData!}
            onChangeText={(text) => props.setSearchText(text)} />
          <View className='w-12 h-12 bg-[#F7F7F7] rounded-full justify-center items-center z-0'>
            {/* notification dot */}
            <View className='bg-red-600 w-3 h-3 rounded-full z-10 right-0 absolute top-0' />
            {/* notification icon */}
            <SvgNotificationIcon />
          </View>
        </View>

        <View className='h-fit w-full self-center items-center gap-0 z-20'>
          <Image resizeMode='contain' className='z-0 object-contain w-full h-auto' width={100} height={100} source={require('@/src/assets/images/sale-banner.png')} />
          <Text className='font-pp-mori text-[10px] z-10 -top-3'>{t('valid-from-date')}</Text>
        </View>

        <View className='w-full pl-8 h-20 items-center flex justify-center self-center'>
          <FlashList
            data={props?.categories!}
            ItemSeparatorComponent={itemSeperator}
            //className='flex gap-20'
            contentContainerClassName='items-center flex justify-center'
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderProductCategories}
            estimatedItemSize={10}
            estimatedListSize={{ width: 100, height: 100 }}
          />
        </View>

        <View className='gap-10'>
          <View className='flex w-full h-auto self-center'>
            <View>
              <Text className='font-pp-mori-semibold text-lg'>{t('hot-sales')}</Text>
            </View>
          </View>
          <GetAllProductContainer productData={props.productData} />
        </View>
      </ScrollView>
    </View>
  )
}

export default UserHomeView

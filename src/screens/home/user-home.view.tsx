import SvgNotificationIcon from '@/src/assets/svg/icons/notification-icon';
import SearchInput from '@/src/components/search'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Image, StatusBar, Text, View } from 'react-native'
import { FlashList } from '@shopify/flash-list';
import { Categories, ProductResponse } from '@/src/modules/products/domain/products';

interface Props {
  productData: ProductResponse[]
  categories: Categories[]
}
;
function UserHomeView({ ...props }: Props) {
  const { t } = useTranslation();

  const renderProductCategories = //useCallback(
    ({ item }: { item: Categories }) => (
    <View className='border border-[#D9D9D9] h-10 w-fit px-10 rounded-full justify-center items-center flex'>
      <Text className='font-pp-mori font-semibold'>{item?.toUpperCase()}</Text>
    </View>
  )
  //, [props.categories]);


  const itemSeperator= //useCallback(
    ()=>(<View className='h-2 w-2'/>)
    //,[])

  return (
    <View className='h-full w-screen flex bg-white dark:bg-black'>
      <StatusBar />
      <View className='w-96 self-center h-28 flex flex-row items-center justify-between'>
        <SearchInput placeholder={t('search-products')} />
        <View className='w-12 h-12 bg-[#F7F7F7] rounded-full justify-center items-center z-0'>
          {/* notification dot */}
          <View className='bg-red-600 w-3 h-3 rounded-full z-10 right-0 absolute top-0' />
          {/* notification icon */}
          <SvgNotificationIcon />
        </View>
      </View>

      <View className='h-fit w-full items-center gap-0'>
        <Image className='z-0' source={require('@/src/assets/images/sale-banner.png')} />
        <Text className='font-pp-mori text-[10px] z-10 -top-3'>{t('valid-from-date')}</Text>
      </View>

      <View className='w-full h-96'>
        <FlashList
          data={props?.categories!}
          ItemSeparatorComponent={itemSeperator}
          className='flex gap-20'
          horizontal
          renderItem={renderProductCategories}
          estimatedItemSize={10}
          estimatedListSize={{width:100,height:100}}
        />
      </View>
    </View>
  )
}

export default UserHomeView

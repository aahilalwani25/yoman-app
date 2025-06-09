import React from 'react'
import { FlashList } from '@shopify/flash-list'
import { HStack } from '../ui/hstack';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import SvgSaveIcon from "@/src/assets/svg/icons/save-icon";
import SvgWalletIcon from "@/src/assets/svg/icons/wallet-icon";
import SvgShareIcon from '@/src/assets/svg/icons/share-icon';
import SvgSettingsIcon from '@/src/assets/svg/icons/settings-icon';

export const profileOptions = [
  {
    icon: <SvgSaveIcon />,
    title: "your-favourites"
  },
  {
    icon: <SvgWalletIcon />,
    title: "payment",
  },
  {
    icon: <SvgShareIcon />,
    title: "tell-your-friends"
  },
  {
    icon: <SvgSettingsIcon />,
    title: "settings"
  }
]


function ProfileOptionsContainer() {

  const { t } = useTranslation();

  const renderProfileOptions = ({ item }: {
    item: {
      icon: React.JSX.Element;
      title: string;
    }
  }) => {

    return (
      <HStack className='w-full items-center flex' space={"lg"}>
        {item.icon}
        <Text className='font-pp-mori text-lg'>{t(item.title)}</Text>
      </HStack>
    )
  };


  return (
    <FlashList
      className='w-full h-40'
      data={profileOptions}
      renderItem={renderProfileOptions}
      estimatedItemSize={100}
      ItemSeparatorComponent={() => <View className='w-20 h-2' />}
      contentContainerClassName='flex items-center justify-center'
      estimatedListSize={{ width: 100, height: 100 }} />
  )
}

export default ProfileOptionsContainer

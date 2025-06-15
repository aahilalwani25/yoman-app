import { Tabs } from 'expo-router'
import React, { useCallback } from 'react'
import { COLORS } from '@/src/config/constants'
import { Text, View } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import SvgHomeIcon from '@/src/assets/svg/icons/home-icon'
import SvgCartIcon from '@/src/assets/svg/icons/cart-icon'
import SvgProfileIcon from '@/src/assets/svg/icons/profile-icon'
import SvgSaveIcon from '@/src/assets/svg/icons/save-icon'
import { capitalizeFirstWord } from '@/src/utils/capitalize-first-letter'

const tabs={
  home:{
    name:"home",
    href:'(home)'
  },
  cart:{
    name:"cart",
    href:'(cart)'
  },
  profile:{
    name:"profile",
    href:'(profile)'
  },
  save: {
    name:"save",
    href:'(save)'
  }
}

function Layout() {

  const TabBarItem = //useCallback(
    ({ name, focused }: { name: string, focused: boolean }) => {
    let iconComponent: React.JSX.Element | null = null;
    switch (name) {
      case tabs.home.name:
        iconComponent = <SvgHomeIcon focused={focused} />;
        break;
      case tabs.cart.name:
        iconComponent = <SvgCartIcon focused={focused} />;
        break;
      case tabs.save.name:
        iconComponent = <SvgSaveIcon />
        break;
      case tabs.profile.name:
        iconComponent = <SvgProfileIcon focused={focused} />
        break;
      default:
        console.error("no such icon exist in tab. please recheck name")
    }
    return (
      <View className={`${focused ? "w-32" : "w-20"} h-10 flex flex-row items-center justify-center rounded-full mt-5`}
        style={{
          backgroundColor: focused ? 'rgba(255, 85, 0, 0.1)' : 'transparent',
        }}
      >
        {iconComponent} <Text className={`font-pp-mori-semibold`}>{focused ? capitalizeFirstWord(name) : ""}</Text>
      </View>
    )
  }//,[]);


  return (
    <Tabs initialRouteName='(home)' screenOptions={{
      headerShown: false,
      tabBarPosition: "bottom",
      tabBarHideOnKeyboard: true,
      tabBarInactiveTintColor: 'grey',
      tabBarActiveTintColor: COLORS.primary.color,
      tabBarStyle: { position: 'absolute', borderRadius: 20, height: verticalScale(90) },
    }}>
      <Tabs.Screen name={tabs.home.href}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <TabBarItem name={tabs.home.name} focused={focused}/>
          ),
        }} />
      <Tabs.Screen name={tabs.cart.href}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <TabBarItem name={tabs.cart.name} focused={focused} />
          ),
        }} />
      <Tabs.Screen name={tabs.profile.href}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <TabBarItem name={tabs.profile.name} focused={focused} />
          ),
        }} />
    </Tabs>
  )
}

export default Layout

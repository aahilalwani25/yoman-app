import { Tabs } from 'expo-router'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { COLORS } from '@/src/config/constants'
import { Text, View } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import SvgHomeIcon from '@/src/assets/svg/icons/home-icon'
import SvgCartIcon from '@/src/assets/svg/icons/cart-icon'
import SvgProfileIcon from '@/src/assets/svg/icons/profile-icon'
import SvgSaveIcon from '@/src/assets/svg/icons/save-icon'
import { capitalizeFirstWord } from '@/src/utils/capitalize-first-letter'


const TabBarItem = ({ name, focused, color }: { name: string, focused: boolean, color: string }) => {
  let iconComponent: React.JSX.Element | null = null;
  switch (name) {
    case "home":
      iconComponent = <SvgHomeIcon focused={focused} />;
      break;
    case "cart":
      iconComponent = <SvgCartIcon focused={focused} />;
      break;
    case "save":
      iconComponent = <SvgSaveIcon focused={focused} />
      break;
    case "profile":
      iconComponent = <SvgProfileIcon focused={focused} />
      break;
    default:
      console.error("no such icon exist in tab. please recheck name")
  }
  return (
    <View className={`${focused ? "w-32" : "w-20"} h-10 flex flex-row items-center justify-center rounded-full mt-10`}
      style={{
        backgroundColor: focused ? 'rgba(255, 85, 0, 0.1)' : 'transparent',
      }}
    >
      {iconComponent} <Text className={`font-pp-mori-semibold text-[${COLORS.primary.color}]`}>{focused ? capitalizeFirstWord(name) : ''}</Text>
    </View>
  )
};

function Layout() {
  return (
    <Tabs initialRouteName='(home)' screenOptions={{
      headerShown: false,
      tabBarPosition: "bottom",
      tabBarHideOnKeyboard: true,
      tabBarInactiveTintColor: 'grey',
      tabBarActiveTintColor: COLORS.primary.color,
      tabBarStyle: { position: 'absolute', borderRadius: 20, height: verticalScale(100) },
    }}>
      <Tabs.Screen name='(home)'
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarItem name="home" focused={focused} color={color} />
          ),
        }} />
      <Tabs.Screen name='(cart)'
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarItem name="cart" focused={focused} color={color} />
          ),
        }} />
      <Tabs.Screen name='(profile)'
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarItem name="profile" focused={focused} color={color} />
          ),
        }} />
    </Tabs>
  )
}

export default Layout

import { Tabs } from 'expo-router'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { COLORS } from '@/src/config/constants'

function Layout() {
  return (
    <Tabs initialRouteName='(home)' screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarInactiveTintColor: 'grey',
      tabBarActiveTintColor: COLORS.primary.color,
      tabBarActiveBackgroundColor:"",
      tabBarStyle: { position: 'absolute' },
    }}>
      <Tabs.Screen name='(home)'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }} />
      <Tabs.Screen name='(cart)'
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cart-plus" size={24} color={color} />
          ),
        }} />
      <Tabs.Screen name='(profile)'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }} />
    </Tabs>
  )
}

export default Layout

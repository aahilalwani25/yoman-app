import { Stack } from 'expo-router'
import React from 'react'

function Layout() {
  return (
    <Stack screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='index'/>
        <Stack.Screen name='checkout'/>
    </Stack>
  )
}

export default Layout

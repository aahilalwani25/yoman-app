import { Stack } from 'expo-router'
import React from 'react'

function Layout() {
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name='products'/>
        <Stack.Screen name='product-details'/>
    </Stack>
  )
}

export default Layout

import Header from '@/src/components/header'
import { Stack } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

function RootLayout() {
  return (
    <Stack screenOptions={{
      header:(props)=>(
        <Header/>
      )
    }}>
      <Stack.Screen name='home'/>
    </Stack>
  )
}

export default RootLayout
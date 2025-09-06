import { Stack } from 'expo-router'
import React from 'react'

function AuthStack() {
    return (
        <Stack screenOptions={{ headerShown: false, statusBarAnimation: 'slide', statusBarBackgroundColor: "black" }}>
            <Stack.Screen name='(regitster)/index' />
            <Stack.Screen name='(login)/index' />
        </Stack>
    )
}

export default AuthStack

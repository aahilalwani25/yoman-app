import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Image, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters'


function Home() {
  return (
    <LinearGradient colors={['#CE048C', '#4D0A8E']} className='w-screen h-screen items-center justify-center flex'>
      <Image
        style={style.imageContainer}
        source={require('@/src/assets/images/onboarding.png')} />
    </LinearGradient>
  )
}

const style= StyleSheet.create({
  imageContainer:{
    width: scale(300), height: verticalScale(500)
  }
})

export default Home;
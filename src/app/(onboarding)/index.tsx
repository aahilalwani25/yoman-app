import React, { useCallback } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Image, StyleSheet, Text, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters'
import {useTranslation} from 'react-i18next'
import PrimaryButton from '@/src/components/buttons/PrimaryButton';
import { COLORS } from '@/src/config/constants';
import { useRouter } from 'expo-router';

function OnboardingPage() {
  const { t } = useTranslation();
  const router= useRouter();

  const redirectTo= useCallback(()=>{
    router.push('(dashboard)')
  },[]);

  return (
    <LinearGradient colors={['#CE048C', '#4D0A8E']} className='w-screen h-screen items-center justify-center flex gap-10'>
      <Image
        style={style.imageContainer}
        source={require('@/src/assets/images/onboarding.png')} />
      <Text style={{fontFamily:"PP-Mori"}} className='text-white font-thin'>{t("valid-from-date")}</Text>
      <View>
        <PrimaryButton buttonWidth='xl' backgroundColor='white' textColor={COLORS.primary.light.color} title={t('login')}/>
        <PrimaryButton onPress={redirectTo} buttonWidth='xl' backgroundColor='transparent' textColor={'white'} title={t('skip')}/>
      </View>
    </LinearGradient>
  )
}

const style= StyleSheet.create({
  imageContainer:{
    width: scale(300), height: verticalScale(500)
  },
})

export default OnboardingPage;
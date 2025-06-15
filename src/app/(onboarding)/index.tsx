import React, { useCallback } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Image, StyleSheet, Text, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters'
import { useTranslation } from 'react-i18next'
import PrimaryButton from '@/src/components/buttons/primary-button';
import { COLORS } from '@/src/config/constants';
import { useRouter } from 'expo-router';

function OnboardingPage() {
  const { t } = useTranslation();
  const router = useRouter();

  const redirectTo = useCallback(() => {
    router.push('(dashboard)/home')
  },[]);

  return (
    <LinearGradient colors={['#CE048C', '#4D0A8E']} className='w-screen h-full items-center justify-center flex'>
      <View>
        <View style={style.imageContainer}>
          <Image
            className='w-full h-full object-fill'
            resizeMode='contain'
            source={require('@/src/assets/images/onboarding.png')} />
        </View>
        <Text style={{ fontFamily: "PP-Mori" }} className='text-white font-thin text-center text-sm'>{t("valid-from-date")}</Text>
      </View>
      <View className="flex justify-center items-center">
        <PrimaryButton buttonWidth='xl' backgroundColor='white' textColor={COLORS.primary.light.color} title={t('login')} />
        <PrimaryButton onPress={redirectTo} buttonWidth='xl' backgroundColor='transparent' textColor={'white'} title={t('skip')} />
      </View>
    </LinearGradient>
  )
}

const style = StyleSheet.create({
  imageContainer: {
    width: scale(350),
    height: verticalScale(540),
    alignSelf: 'center',
  },
})

export default OnboardingPage;
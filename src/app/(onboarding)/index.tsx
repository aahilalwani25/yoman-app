import React, { useCallback } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Image, StyleSheet, Text, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters'
import { useTranslation } from 'react-i18next'
import PrimaryButton from '@/src/components/buttons/PrimaryButton';
import { COLORS } from '@/src/config/constants';
import { useRouter } from 'expo-router';

function OnboardingPage() {
  const { t } = useTranslation();
  const router = useRouter();

  const redirectTo = useCallback(() => {
    router.push('(dashboard)')
  }, []);

  return (
    <LinearGradient colors={['#CE048C', '#4D0A8E']} className='w-screen h-full items-center justify-center flex gap-10'>
      <View>
        <View style={style.imageContainer}>
          <Image
            className='w-full h-full object-fill'
            source={require('@/src/assets/images/onboarding.png')} />
        </View>
        <Text style={{ fontFamily: "PP-Mori" }} className='text-white font-thin text-center text-sm'>{t("valid-from-date")}</Text>
      </View>
      <View>
        <PrimaryButton buttonWidth='xl' backgroundColor='white' textColor={COLORS.primary.light.color} title={t('login')} />
        <PrimaryButton onPress={redirectTo} buttonWidth='xl' backgroundColor='transparent' textColor={'white'} title={t('skip')} />
      </View>
    </LinearGradient>
  )
}

const style = StyleSheet.create({
  imageContainer: {
    width: scale(280),
    height: verticalScale(520),
    alignSelf: 'center',
  },
})

export default OnboardingPage;
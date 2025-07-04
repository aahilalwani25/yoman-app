import { Avatar, AvatarBadge, AvatarFallbackText } from '@/src/components/ui/avatar'
import React from 'react'
import { Text, View } from 'react-native'
import { UserInfoResponse } from '../../domain/user'
import { VStack } from '@/src/components/ui/vstack'
import { HStack } from '@/src/components/ui/hstack'
import { Heading } from '@/src/components/ui/heading'
import { useTranslation } from 'react-i18next'
import { COLORS } from '@/src/config/constants'
import ProfileOptionsContainer from '@/src/components/profile-options'
import PrimaryButton from '@/src/components/buttons/primary-button'
import { verticalScale } from 'react-native-size-matters'


function GetUserProfileView({ ...props }: UserInfoResponse) {
    const fullName = props.firstName + ' ' + props.lastName;

    const { t } = useTranslation();

    return (
        <View className='w-full h-full bg-white items-center'>
            <VStack space='4xl' className='w-96 pt-10 h-full'>
                {/* profile pic, name, and email */}
                <HStack className='w-full flex items-center' space='2xl'>
                    <Avatar size='xl'>
                        <AvatarFallbackText>{fullName}</AvatarFallbackText>
                        <AvatarBadge size='xl' />
                    </Avatar>

                    <VStack>
                        <Heading className='font-pp-mori text-black'>{fullName}</Heading>
                        <Text className='font-pp-mori text-md text-gray-400'>{props.email}</Text>
                    </VStack>
                </HStack>

                {/* stats for orders and wallet */}
                <HStack className='border border-x-white border-y-gray-400 h-20'>
                    <View className='w-1/2 border border-r-gray-400 border-y-white border-l-white h-full items-center justify-center flex'>
                        <Heading style={{ color: COLORS.primary.color }}>$120.00</Heading>
                        <Text className='font-pp-mori-semibold'>{t('wallet')}</Text>
                    </View>
                    <View className='w-1/2 border border-l-transparent border-y-white border-r-white h-full items-center justify-center flex'>
                        <Heading style={{ color: COLORS.primary.color }}>12</Heading>
                        <Text className='font-pp-mori-semibold'>{t('orders')}</Text>
                    </View>
                </HStack>

                {/* settings options */}
                <View className='h-44'>
                    <ProfileOptionsContainer />
                </View>

                <View style={{bottom: verticalScale(100), position:'absolute'}} className='w-full'>
                    <PrimaryButton title='LOG OUT' backgroundColor='red' onPress={() => { }} textColor='white' buttonWidth='xl' />
                </View>
            </VStack>
        </View>
    )
}

export default GetUserProfileView

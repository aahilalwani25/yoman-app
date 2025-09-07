import { Card } from '@/src/components/ui/card'
import React from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'
import { Image, KeyboardAvoidingView, Text, View } from 'react-native'
import { registerSchema } from './register.schema'
import z from 'zod/v3'
import InputField from '@/src/components/input'
import { useTranslation } from 'react-i18next'
import PrimaryButton from '@/src/components/buttons/primary-button'
import SocialAuthButton from '@/src/components/buttons/social-auth-button'
import { COLORS } from '@/src/config/constants'
import { Link, useRouter } from 'expo-router'

interface Props {
    form: UseFormReturn<z.infer<typeof registerSchema>>
    handleGoogleSignin: () => void
}

function RegisterView({ ...props }: Props) {

    const { t } = useTranslation();
    const router= useRouter();
    return (
        <View className='h-screen w-screen items-center justify-center'>
            <KeyboardAvoidingView>
                <Card className='h-auto py-10 w-96 flex items-center !rounded-lg gap-y-6'>
                    <Image
                        source={require("@/src/assets/splash-icon.png")}
                        width={10}
                        height={10}
                        className='w-28 h-28'
                    />

                    <Controller
                        control={props.form.control}
                        name="firstName"
                        render={({ field }) => (
                            <>
                                <InputField
                                    placeholder={t("register-form.form.firstName.placeholder")}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    label={t("register-form.form.firstName.label")}
                                />
                            </>
                        )}
                    />

                    <Controller
                        control={props.form.control}
                        name="lastName"
                        render={({ field }) => (
                            <>
                                <InputField
                                    placeholder={t("register-form.form.lastName.placeholder")}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    label={t("register-form.form.lastName.label")}
                                />
                            </>
                        )}
                    />

                    <Controller
                        control={props.form.control}
                        name="email"
                        render={({ field }) => (
                            <>
                                <InputField
                                    placeholder={t("register-form.form.email.placeholder")}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    label={t("register-form.form.email.label")}
                                />
                            </>
                        )}
                    />

                    <Controller
                        control={props.form.control}
                        name="password"
                        render={({ field }) => (
                            <>
                                <InputField
                                    placeholder={t("register-form.form.password.placeholder")}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    label={t("register-form.form.password.label")}
                                />
                            </>
                        )}
                    />

                    <PrimaryButton buttonWidth="full" title={t("login")} />

                    <Text className='font-pp-mori'>OR</Text>

                    <SocialAuthButton onPress={props.handleGoogleSignin} social='google' title='Signin with Google' />

                    <View className='flex flex-row gap-x-1'>
                        <Text className='font-pp-mori'>Already have an account?</Text>
                        <Link href={('/(auth)/(login)')}>
                            <Text className={`font-pp-mori !text-[${COLORS.primary.light.color}]`}>Login</Text>
                        </Link>
                    </View>
                </Card>
            </KeyboardAvoidingView>
        </View>
    )
}

export default RegisterView

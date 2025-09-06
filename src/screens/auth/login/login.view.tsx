import { Card } from '@/src/components/ui/card'
import React from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'
import { Image, KeyboardAvoidingView, Text, View } from 'react-native'
import { loginSchema } from './login.schema'
import z from 'zod/v3'
import InputField from '@/src/components/input'
import { useTranslation } from 'react-i18next'
import PrimaryButton from '@/src/components/buttons/primary-button'

interface Props {
    form: UseFormReturn<z.infer<typeof loginSchema>>
}

function LoginView({ ...props }: Props) {

    const { t } = useTranslation();
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
                        name="email"
                        render={({ field }) => (
                            <>
                                <InputField
                                    placeholder={t("login-form.form.email.placeholder")}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    label={t("login-form.form.email.label")}
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
                                    placeholder={t("login-form.form.password.placeholder")}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    label={t("login-form.form.password.label")}
                                />
                            </>
                        )}
                    />

                    <PrimaryButton buttonWidth="full" title={t("login")} />

                    <Text className='font-pp-mori'>OR</Text>

                    
                </Card>
            </KeyboardAvoidingView>
        </View>
    )
}

export default LoginView

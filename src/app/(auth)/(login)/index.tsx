import { Card } from '@/src/components/ui/card'
import React from 'react'
import { Image, View } from 'react-native'
import { Controller, useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import LoginContainer from '@/src/screens/auth/login/login.container';

function LoginScreen() {

  return (
    <LoginContainer/>
  )
}

export default LoginScreen

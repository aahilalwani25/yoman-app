import React from 'react'
import LoginView from './login.view'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from './login.schema'
//import { signinWithGoogle } from '@/src/providers/google.auth.provider'

function LoginContainer() {

  const form = useForm({
    resolver: zodResolver(loginSchema)
  });

  const handleGoogleSignin = async () => {
    // const response = await signinWithGoogle();
    // console.log(response)
  }
  return (
    <LoginView
      handleGoogleSignin={handleGoogleSignin}
      form={form} />
  )
}

export default LoginContainer

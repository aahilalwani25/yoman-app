import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from './register.schema'
import { signinWithGoogle } from '@/src/providers/google-auth.provider'
import RegisterView from './register.view'

function RegisterContainer() {

  const form = useForm({
    resolver: zodResolver(registerSchema)
  });

  const handleGoogleSignin = async () => {
    const response = await signinWithGoogle();
    console.log(response)
  }
  return (
    <RegisterView
      handleGoogleSignin={handleGoogleSignin}
      form={form} />
  )
}

export default RegisterContainer

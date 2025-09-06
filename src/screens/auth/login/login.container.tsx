import React from 'react'
import LoginView from './login.view'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from './login.schema'

function LoginContainer() {

  const form = useForm({
    resolver: zodResolver(loginSchema)
  })
  return (
    <LoginView form={form} />
  )
}

export default LoginContainer

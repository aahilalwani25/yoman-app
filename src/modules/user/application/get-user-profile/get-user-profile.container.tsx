import React from 'react'
import GetUserProfileView from './get-user-profile.view'
import { useQuery } from '@tanstack/react-query'
import { getUserProfile } from '../../domain/user.action'
import { outputs } from '@/src/config/outputs'

function GetUserProfileContainer() {

    
      const {data}= useQuery({
        queryKey:['get-user'],
        queryFn: getUserProfile(outputs.userOutput)
      })

  return (
    <GetUserProfileView {...data!}/>
  )
}

export default GetUserProfileContainer

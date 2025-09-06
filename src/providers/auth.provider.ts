import { createContext, useEffect, useState } from "react";
import { userSlice } from "../redux/user/action";

import React from 'react'
import { useAppSelector } from "../redux/hooks";

function AuthProvider() {
    const userState = useAppSelector(state => state?.userReducer);

    useEffect(() => {
        if (userState.email && userState.password) {
            //relogin
        }
    }, [userState])

    
}

export default AuthProvider

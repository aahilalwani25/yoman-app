//import { useAuthContext } from '@/src/providers/auth.provider';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
    duration: 1000,
    fade: true,
});

interface Props {
    isFontsLoading: boolean
    children: React.ReactNode,
    error: Error | null
}

export const AnimatedSplashLoading = ({ children, isFontsLoading, error }: Props) => {
    //const { isLoading: isAuthLoading } = useAuthContext()

    //use this use effect if there is login/signup feature
    // useEffect(() => {
    //     if (!isFontsLoading && !isAuthLoading) {
    //         setTimeout(() => SplashScreen.hide(), 200)
    //     }
    // }, [isFontsLoading, isAuthLoading])

    useEffect(() => {
        if (isFontsLoading || error) {
            SplashScreen.hideAsync();
        }
    }, [isFontsLoading, error]);

    //use this if condition if there is authentication
    // if (isAuthLoading || isFontsLoading) {
    //     return null
    // }

    if (!isFontsLoading && !error) {
        return null;
    }

    return children
}


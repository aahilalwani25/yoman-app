import '@/src/global.css';
import { Stack } from "expo-router";
import React from "react";
import { GluestackUIProvider } from "@/src/components/ui/gluestack-ui-provider";
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistor } from '../redux/store';
import { useFonts } from 'expo-font'
import { AnimatedSplashLoading } from '../components/animated.splashscreen.loading';
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { languageResources } from "@/src/languages/language.resources";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function RootLayout() {
  const [loaded, error] = useFonts({
    "PP-Mori": require("@/src/assets/fonts/pp-mori/PPMori-Regular.otf"),
    "PP-Mori-Semibold": require('@/src/assets/fonts/pp-mori/PPMori-SemiBold.otf'),
    // SpecialElite: require('@/src/assets/fonts/special-elite/SpecialElite-Regular.ttf'),
    // Rokitt: require('@/src/assets/fonts/rokitt/Rokkitt-VariableFont_wght.ttf'),
    // Poppins: require('@/src/assets/fonts/poppins/Poppins-Regular.ttf'),
    // Rokitt_ExtraBold: require('@/src/assets/fonts/rokitt/Rokkitt-ExtraBold.ttf')
  });

  const queryClient= new QueryClient()

  i18next.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',   //if package is searching for a key that is not available in json file, then fall back to eng
    resources: languageResources
  })

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider mode={"light"}>
        <PersistGate persistor={persistor}>
          <AnimatedSplashLoading isFontsLoading={loaded} error={error}>
            <Stack screenOptions={{ headerShown: false, statusBarAnimation: 'slide', statusBarBackgroundColor: "black" }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="(onboarding)" />
              <Stack.Screen name='(dashboard)' />
            </Stack>
          </AnimatedSplashLoading>
        </PersistGate>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}

export default RootLayout;

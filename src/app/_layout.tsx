import '@/src/global.css';
import { Stack } from "expo-router";
import React from "react";
import { GluestackUIProvider } from "@/src/components/ui/gluestack-ui-provider";
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistor } from '../redux/store';

function RootLayout() {

  return (
    <GluestackUIProvider mode={"light"}>
      <PersistGate persistor={persistor}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(onboarding)" />
          <Stack.Screen name='(dashboard)' />
        </Stack>
      </PersistGate>
    </GluestackUIProvider>
  );
}

export default RootLayout;

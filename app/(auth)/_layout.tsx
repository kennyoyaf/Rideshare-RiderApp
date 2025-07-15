import { Stack } from "expo-router";
import React from "react";

const ScreenLayout: React.FC = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="enableLocation" options={{ headerShown: false }} />
        <Stack.Screen name="setNewPassword" options={{ headerShown: false }} />
        <Stack.Screen name="SignIn/sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="SignUp/sign-up" options={{ headerShown: false }} />
        <Stack.Screen
          name="SignUp/otpVerify"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp/setPassword"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignUp/profile" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default ScreenLayout;

import { Stack } from "expo-router";
import React from "react";

const ScreenLayout: React.FC = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="onboarding/onBoarding-2"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="onboarding/onBoarding-3"
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  );
};

export default ScreenLayout;

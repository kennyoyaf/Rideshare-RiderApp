import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import React from "react";

import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function IndexScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      {/* Center Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/auth/Welcome Screen.png")}
          style={styles.whereLogo}
          resizeMode="contain"
        />
        <View style={{ marginTop: 50, alignItems: "center" }}>
          <Text
            style={{
              marginBottom: 15,
              fontWeight: "medium",
              fontSize: 24,
              textAlign: "center",
              lineHeight: 30,
              color: "#414141",
            }}
          >
            Anywhere you are
          </Text>
          <Text style={styles.eceetechText}>
            Sell houses easily with the help of Listenoryx and to make this line
            big I am writing more.
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 70,
        }}
      >
        <CustomButton title="Create an account" handlePress={() => {}} />
        <CustomButton title="Log In" handlePress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
  },
  whereLogo: {
    marginTop: 30,
  },
  bottomLogoContainer: {},
  eceetechLogo: {},
  eceetechText: {
    fontWeight: "medium",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 90,
    color: "#A0A0A0",
  },
});

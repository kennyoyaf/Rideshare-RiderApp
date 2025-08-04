import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import React from "react";

import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function WelcomeScreen() {
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
        <View style={{ marginTop: 10, alignItems: "center" }}>
          <Text
            style={{
              marginBottom: 10,
              fontWeight: "medium",
              fontSize: 24,
              textAlign: "center",
              lineHeight: 30,
              color: "#414141",
            }}
          >
            Welcome
          </Text>
          <Text style={styles.eceetechText}>
            Have a better sharing experience
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: Platform.OS === "android" ? 50 : 30,
        }}
      >
        <CustomButton
          title="Create an account"
          handlePress={() => {
            router.push("/(auth)/SignUp/sign-up");
          }}
          containerStyles={styles.greenContainer}
          textStyles={styles.whiteText}
        />
        <CustomButton
          title="Log In"
          handlePress={() => {
            router.push("/(auth)/SignIn/sign-in");
          }}
          containerStyles={styles.transparentContainer}
          textStyles={styles.greenText}
        />
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
    height: Platform.OS === "android" ? 250 : 270,
  },
  eceetechText: {
    fontWeight: "medium",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 50,
    color: "#A0A0A0",
  },
  greenContainer: {
    width: "90%",
    backgroundColor: "#008955",
    marginBottom: 20,
    borderRadius: 8,
  },
  whiteText: { color: "#FFFFFF" },
  transparentContainer: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderColor: "#008955",
    borderWidth: 1,
    borderRadius: 8,
  },
  greenText: {
    color: "#008955",
  },
});

import { useRouter } from "expo-router";
import React from "react";

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SecondOnboardingScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.skipButton}>
        <TouchableOpacity>
          <Text style={{ fontWeight: "regular", fontSize: 14 }}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Center Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/images/onBoarding/At anytime.png")}
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
            At anytime
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
        <View
          style={{
            backgroundColor: "#B9E5D1",
            width: 90,
            height: 90,
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            borderTopColor: "#08B783",
          }}
        >
          {/* <View style={styles.darkerAccent} /> */}
          <View
            style={{
              backgroundColor: "#FFFFFF",
              width: 80,
              height: 80,
              borderRadius: "50%",
              alignItems: "center",
              justifyContent: "center",
              margin: 20,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#08B783",
                width: 70,
                height: 70,
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
                margin: 20,
              }}
              onPress={() => router.push("/(screens)/onboarding/onBoarding-3")}
            >
              <Image
                source={require("../../../assets/images/onBoarding/right-arrow.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
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
  skipButton: {
    alignItems: "flex-end",
    marginBottom: 30,
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
  // darkerAccent: {
  //   position: "absolute",
  //   top: 5,
  //   right: 5,
  //   width: 40,
  //   height: 40,
  //   borderRadius: "50%",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#008B65",
  //   transform: [{ rotate: "45deg" }],
  // },
});

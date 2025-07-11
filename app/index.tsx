import React from "react";

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function IndexScreen() {
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
          source={require("../assets/images/onBoarding/Anywhere you are.png")}
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

      <View>
        <View>
          <Image
            source={require("../assets/images/onBoarding/right-arrow.png")}
            resizeMode="contain"
          />
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
  },
});

import CustomButton from "@/components/CustomButton";
import { useCurrentLocation } from "@/hooks/useLocation";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const { location, errorMsg, loading, getCurrentLocation } =
    useCurrentLocation();

  const router = useRouter();

  const handleLocation = async () => {
    const success = await getCurrentLocation();

    if (success) {
      router.push("/(auth)/welcome");
    }
  };

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top", "right", "left", "bottom"]}
    >
      <ImageBackground
        source={require("../../assets/images/auth/Map.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.outerContainer}>
          <View style={styles.scrollViewContent}>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{
                  backgroundColor: "#E2F5ED",
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#B9E5D1",
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#52C498",
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#08B783",
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 20,
                      }}
                    >
                      <Image
                        source={require("../../assets/images/auth/map-pin.png")}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 24,
                    fontWeight: "medium",
                    marginBottom: 15,
                    marginTop: 50,
                    color: "#414141",
                  }}
                >
                  Enable your location
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: "medium",
                    marginBottom: 30,
                    color: "#A0A0A0",
                  }}
                >
                  Choose your location to start find the request around you
                </Text>
              </View>
              <CustomButton
                title={loading ? "Getting location..." : "Use my location"}
                handlePress={handleLocation}
                containerStyles={styles.buttonContainer}
              />
              <CustomButton
                title="Skip for now"
                handlePress={() => {
                  router.push("/(auth)/welcome");
                }}
                containerStyles={styles.transparentContainer}
                textStyles={styles.transparentText}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  outerContainer: {
    backgroundColor: "hsla(0, 0%, 25.5%, 0.5)",
    height: "100%",
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    alignItems: "center",
    minHeight: "100%",
    flex: 1,
  },
  scrollViewContent: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    height: Platform.OS === "android" ? "65%" : "55%",
    width: Platform.OS === "android" ? "80%" : "85%",
    borderRadius: 12,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  headerMainText: {
    color: "#1D1617",
    fontSize: 16,
    textAlign: "center",
  },
  headerInnerText: {
    color: "rgb(57, 127, 152)",
    fontSize: 20,
    paddingBottom: 20,
  },
  logo: {
    width: 115,
    height: 35,
  },
  headerText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "600",
    marginTop: 20,
  },
  buttonContainer: {
    // marginTop: 16,
    width: 300,
    backgroundColor: "#008955",
    borderRadius: 10,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "medium",
  },
  transparentContainer: {
    marginTop: 16,
    width: 300,
    backgroundColor: "transparent",
    fontSize: 16,
    fontWeight: "medium",
  },
  transparentText: {
    color: "#B8B8B8",
  },
});

export default SignIn;

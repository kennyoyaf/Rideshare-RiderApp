import CustomButton from "@/components/CustomButton";
import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OtpVerify() {
  const { signOut } = useAuth();
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <CustomButton
          title="Sign Out"
          handlePress={async () => {
            await signOut();
            router.replace("/(auth)/SignUp/sign-up"); // update this path to your actual login page
          }}
          containerStyles={styles.greenContainer}
          textStyles={styles.whiteText}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", padding: 24 },
  greenContainer: {
    width: "100%",
    backgroundColor: "#008955",
    marginTop: 40,
    borderRadius: 8,
  },
  whiteText: { color: "#FFFFFF" },
});

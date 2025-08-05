import CustomButton from "@/components/CustomButton";
import { useAuth } from "@clerk/clerk-expo";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OtpVerify() {
  const { signOut } = useAuth();
  const router = useRouter();

  const [otp, setOtp] = useState(Array(5).fill(""));
  const inputsRef = useRef<TextInput[]>([]);
  const { phone } = useLocalSearchParams<{ phone: string }>();

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 4) {
      inputsRef.current[index + 1]?.focus(); // only focus if next input exists
    }
  };

  const handleBackspace = (text: string, index: number) => {
    if (!text && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const code = otp.join("");
    console.log("OTP submitted:", code);
    if (code.length === 5) {
      router.push("/(auth)/SignUp/setPassword");
    }
  };

  const handleResend = () => {
    console.log("Resend OTP");
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Image
              source={require("../../../assets/images/auth/angle-left.png")}
            />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          <View style={styles.verificationContainer}>
            <Text style={styles.heading}>Phone verification</Text>
            <Text style={styles.subText}>Enter your OTP code</Text>

            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.otpInput}
                  keyboardType="numeric"
                  maxLength={1}
                  value={digit}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={({ nativeEvent }) => {
                    if (nativeEvent.key === "Backspace") {
                      handleBackspace(digit, index);
                    }
                  }}
                  ref={(ref) => {
                    if (ref) inputsRef.current[index] = ref;
                  }}
                />
              ))}
            </View>

            <Text style={styles.resendInfo}>
              Didn’t receive code?
              <Link href="/" style={styles.resendLink}>
                Resend again
              </Link>
            </Text>

            <CustomButton
              title="Sign Out"
              handlePress={async () => {
                await signOut();
                router.replace("/(auth)/SignUp/sign-up");
              }}
              containerStyles={styles.greenContainer}
              textStyles={styles.whiteText}
            />
          </View>
        </ScrollView>

        {/* Fixed Verify button at bottom */}
        <View style={styles.fixedBottom}>
          <CustomButton
            title="Verify"
            handlePress={handleSubmit}
            containerStyles={styles.submitButton}
            textStyles={styles.submitText}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  backText: {
    fontWeight: "400",
    fontSize: 16,
    paddingLeft: 3,
    color: "#414141",
  },
  verificationContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  heading: {
    fontSize: 24,
    color: "#414141",
    fontWeight: "bold",
    marginBottom: 10,
  },
  subText: {
    color: "#A0A0A0",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 10,
  },
  otpInput: {
    width: 50,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D0D0D0",
    borderRadius: 10,
    color: "#414141",
    fontSize: 20,
    textAlign: "center",
  },
  resendInfo: {
    color: "#5A5A5A",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  resendLink: {
    color: "#008955",
  },
  greenContainer: {
    width: "100%",
    backgroundColor: "#008955",
    marginTop: 40,
    borderRadius: 8,
  },
  whiteText: {
    color: "#FFFFFF",
  },
  submitButton: {
    backgroundColor: "#008955",
    width: "100%",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
  },
  submitText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  fixedBottom: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#FFFFFF",
  },
});

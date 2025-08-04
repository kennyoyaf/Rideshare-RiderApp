import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { useOAuth } from "@clerk/clerk-expo";
import Checkbox from "expo-checkbox";
import * as Linking from "expo-linking";
import { Link, useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React, { useCallback, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CountryPicker, { CountryCode } from "react-native-country-picker-modal";
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaView } from "react-native-safe-area-context";

// Warm up browser for smoother OAuth UX
export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

interface Country {
  cca2: CountryCode;
  callingCode: string[];
}

export default function SignInScreen({}) {
  useWarmUpBrowser();
  const router = useRouter();

  const { startOAuthFlow: startGoogleOAuth } = useOAuth({
    strategy: "oauth_google",
  });
  const { startOAuthFlow: startFacebookOAuth } = useOAuth({
    strategy: "oauth_facebook",
  });
  const { startOAuthFlow: startAppleOAuth } = useOAuth({
    strategy: "oauth_apple",
  });

  const [countryCode, setCountryCode] = useState<CountryCode>("GB");
  const [callingCode, setCallingCode] = useState("44");
  const [phone, setPhone] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const onSelect = (country: Country): void => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  const handleOAuth = useCallback(
    async (startOAuthFlowFn: ReturnType<typeof useOAuth>["startOAuthFlow"]) => {
      try {
        setLoading(true);
        const { createdSessionId, setActive } = await startOAuthFlowFn({
          redirectUrl: Linking.createURL("/(auth)/SignUp/otpVerify", {
            scheme: "rideshareriderapp",
          }),
        });
        if (createdSessionId) {
          setActive!({ session: createdSessionId });
        }
      } catch (err) {
        console.error("OAuth error:", JSON.stringify(err, null, 2));
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20, width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Image
            source={require("../../../assets/images/auth/angle-left.png")}
          />
          <Text
            style={{
              fontWeight: "regular",
              fontSize: 16,
              paddingLeft: 5,
              color: "#414141",
            }}
          >
            Back
          </Text>
        </TouchableOpacity>

        <Text style={styles.header}>
          Sign up with your email or phone number
        </Text>

        <FormField
          placeholder="Name"
          value={() => {}}
          otherStyles={styles.inputStyles}
        />
        <FormField
          placeholder="Email"
          value={() => {}}
          otherStyles={styles.inputStyles}
        />

        <View style={styles.phoneContainer}>
          <CountryPicker
            countryCode={countryCode}
            withCallingCode
            withFlag
            withFilter
            withAlphaFilter
            onSelect={onSelect}
          />
          <Text style={styles.callingCode}>+{callingCode}</Text>
          <TextInput
            style={styles.input}
            placeholder="Mobile number"
            placeholderTextColor="#ccc"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <View style={{ paddingVertical: 20, zIndex: 1000 }}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Gender"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            textStyle={styles.dropdownText}
            placeholderStyle={styles.placeholder}
            labelStyle={styles.label}
          />
        </View>

        <View style={styles.checkboxBox}>
          <Checkbox
            style={[styles.checkbox, { borderRadius: 999 }]}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#43A048" : undefined}
          />
          <Text style={styles.checkboxBoxText}>
            By signing up, you agree to the{" "}
            <Text style={{ color: "#08B783" }}>Terms of service</Text> and{" "}
            <Text style={{ color: "#08B783" }}>Privacy policy</Text>.
          </Text>
        </View>

        <CustomButton
          title="Sign Up"
          handlePress={() => {}}
          containerStyles={styles.greenContainer}
          textStyles={styles.whiteText}
          disabled={loading}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Image source={require("../../../assets/images/auth/Line 1.png")} />
          <Text
            style={{ fontSize: 16, fontWeight: "medium", color: "#B8B8B8" }}
          >
            or
          </Text>
          <Image source={require("../../../assets/images/auth/Line 1.png")} />
        </View>

        <CustomButton
          title="Sign up with Gmail"
          handlePress={() => handleOAuth(startGoogleOAuth)}
          containerStyles={styles.whiteContainer}
          textStyles={styles.blackText}
          isLoading={loading}
          iconSource={require("../../../assets/images/auth/Gmail.png")}
        />
        <CustomButton
          title="Sign up with Facebook"
          handlePress={() => handleOAuth(startFacebookOAuth)}
          containerStyles={styles.whiteContainer}
          textStyles={styles.blackText}
          isLoading={loading}
          iconSource={require("../../../assets/images/auth/Facebook.png")}
        />
        <CustomButton
          title="Sign up with Apple"
          handlePress={() => handleOAuth(startAppleOAuth)}
          containerStyles={styles.whiteContainer}
          textStyles={styles.blackText}
          isLoading={loading}
          iconSource={require("../../../assets/images/auth/Apple.png")}
        />
        <View>
          <Text
            style={{ textAlign: "center", color: "#5A5A5A", marginTop: 20 }}
          >
            Already have an account?
            <Link href={"/(auth)/SignIn/sign-in"} style={{ color: "#008955" }}>
              Sign in
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", padding: 24 },
  header: {
    color: "#414141",
    fontSize: 18,
    marginBottom: 20,
    marginTop: 30,
    fontWeight: "600",
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    marginTop: 20,
  },
  callingCode: { color: "#414141", marginHorizontal: 6 },
  input: { flex: 1, color: "#414141" },
  inputStyles: { borderRadius: 20 },
  dropdown: {
    backgroundColor: "#FFFFFF",
    borderColor: "#D0D0D0",
    borderRadius: 10,
    height: 60,
    paddingHorizontal: 10,
    zIndex: 1000,
  },
  dropdownContainer: {
    backgroundColor: "#FAFAFA",
    borderColor: "#B0B0B0",
    borderRadius: 10,
    zIndex: 1000,
  },
  dropdownText: { color: "#D0D0D0", fontSize: 16 },
  placeholder: { color: "#D0D0D0", fontWeight: "medium", fontSize: 16 },
  label: { fontWeight: "bold", color: "#D0D0D0" },
  checkboxBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  checkboxBoxText: { marginRight: 10, color: "#B8B8B8" },
  checkbox: { marginRight: 10, borderColor: "#43A048" },
  greenContainer: {
    width: "100%",
    backgroundColor: "#008955",
    marginTop: 20,
    borderRadius: 8,
  },
  whiteContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D0D0D0",
    marginTop: 20,
    borderRadius: 8,
  },
  blackText: { color: "#414141" },
  whiteText: { color: "#FFFFFF" },
});

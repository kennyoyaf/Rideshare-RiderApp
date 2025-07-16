import FormField from "@/components/FormField";
import DropDownPicker from "react-native-dropdown-picker";
// import { Picker } from "@react-native-picker/picker";
import CustomButton from "@/components/CustomButton";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import type { CountryCode } from "react-native-country-picker-modal";
import CountryPicker from "react-native-country-picker-modal";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  const [countryCode, setCountryCode] = useState<CountryCode>("GB");
  const [callingCode, setCallingCode] = useState("44");
  const [phone, setPhone] = useState("");
  // const [selectedLanguage, setSelectedLanguage] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);
  const [isChecked, setChecked] = useState(false);
  const router = useRouter();

  interface Country {
    cca2: CountryCode;
    callingCode: string[];
  }

  const onSelect = (country: Country): void => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={require("../../../assets/images/auth/angle-left.png")} />
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
      </View>
      <Text style={styles.header}>Sign up with your email or phone number</Text>

      <View>
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
        <View style={{ paddingVertical: 20 }}>
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
          <Text
            style={[
              styles.checkboxBoxText,
              // { fontFamily: "Inter-regular", fontSize: 16 },
            ]}
          >
            By signing up. you agree to the{" "}
            <Text style={{ color: "#08B783" }}>Terms of service</Text> and{" "}
            <Text style={{ color: "#08B783" }}>Privacy policy.</Text>
          </Text>
        </View>
        <CustomButton
          title="Sign Up"
          handlePress={() => {
            router.push("/(auth)/SignUp/otpVerify");
          }}
          containerStyles={styles.greenContainer}
          textStyles={styles.whiteText}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 20,
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 24,
  },
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
  callingCode: {
    color: "#414141",
    marginHorizontal: 6,
  },
  input: {
    flex: 1,
    color: "#414141",
  },
  inputStyles: {
    borderRadius: 20,
  },
  dropdown: {
    backgroundColor: "#FFFFFF",
    borderColor: "#D0D0D0",
    borderRadius: 10,
    height: 60,
    paddingHorizontal: 10,
  },
  dropdownContainer: {
    backgroundColor: "#FAFAFA",
    borderColor: "#B0B0B0",
    borderRadius: 10,
  },
  dropdownText: {
    color: "#D0D0D0",
    fontSize: 16,
  },
  placeholder: {
    color: "#D0D0D0",
    fontWeight: "medium",
    fontSize: 16,
  },
  label: {
    fontWeight: "bold",
    color: "#D0D0D0",
  },
  checkboxBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  checkboxBoxText: {
    marginRight: 10,
    color: "#B8B8B8",
  },
  checkbox: {
    marginRight: 10,
    borderColor: "#43A048",
  },
  greenContainer: {
    width: "100%",
    backgroundColor: "#008955",
    marginTop: 40,
    borderRadius: 8,
  },
  whiteText: { color: "#FFFFFF" },
});

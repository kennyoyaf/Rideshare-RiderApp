// CustomButton.tsx
import { CustomButtonProps } from "@/lib/typeof";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading = false,
  buttonColor = "#007AFF",
  showIcon = false,
  iconSource,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      style={[
        styles.button,
        { backgroundColor: buttonColor },
        containerStyles,
        isLoading && { opacity: 0.5 },
      ]}
    >
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color="#000"
          style={{ marginRight: 8 }}
        />
      ) : null}
      <View style={styles.content}>
        {iconSource && (
          <Image source={iconSource} style={styles.icon} resizeMode="contain" />
        )}
        <Text style={[styles.text, textStyles]}>{title}</Text>
        {showIcon && (
          <MaterialIcons name="arrow-forward" size={30} color="#fff" />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    minHeight: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    paddingRight: 8,
  },
  icon: {
    width: 24, // adjust size as needed
    height: 24,
    marginRight: 8,
  },
});

export default CustomButton;

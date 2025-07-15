// CustomButton.tsx
import { CustomButtonProps } from "@/lib/typeof";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading = false,
  buttonColor = "#007AFF",
  showIcon = false,
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
      <View style={styles.content}>
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
    minHeight: 62,
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
});

export default CustomButton;

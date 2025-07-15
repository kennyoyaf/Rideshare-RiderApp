import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import { FormFieldProps } from '@/lib/typeof';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
  numberOfLines = 1, // Default to single-line input
  multiline = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [fontsLoaded] = useFonts({
    'Inter-regular': require('../assets/fonts/Inter_400Regular.ttf'),
    'Inter-medium': require('../assets/fonts/Inter_500Medium.ttf'),
    'Inter-semiBold': require('../assets/fonts/Inter_600SemiBold.ttf'),
    'Inter-extraBold': require('../assets/fonts/Inter_800ExtraBold.ttf'),
    'Montserrat-regular': require('../assets/fonts/Montserrat_400Regular.ttf'),
    'Montserrat-medium': require('../assets/fonts/Montserrat_500Medium.ttf'),
    'Montserrat-semiBold': require('../assets/fonts/Montserrat_600SemiBold.ttf')
  });

  return (
    <View style={[styles.container, otherStyles]}>
      <Text
        style={[styles.title, { fontFamily: 'Inter-medium', fontSize: 16 }]}
      >
        {title}
      </Text>
      <View
        style={[
          styles.inputContainer,
          multiline && { height: numberOfLines * 24 }
        ]}
      >
        <TextInput
          style={[styles.textInput]}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#797979"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          numberOfLines={numberOfLines}
          multiline={multiline}
          textAlignVertical={multiline ? 'top' : 'center'}
          {...props}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    marginBottom: 10
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    width: '100%',
    height: 50,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Roboto-SemiBold'
  },
  icon: {
    width: 24,
    height: 24
  }
});

export default FormField;

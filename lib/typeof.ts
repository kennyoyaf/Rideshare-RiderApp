import { ImageSourcePropType } from "react-native";

export interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerStyles?: any;
  textStyles?: any;
  isLoading?: boolean;
  buttonColor?: string;
  showIcon?: boolean;
  disabled?: boolean;
  iconSource?: ImageSourcePropType;
}

export interface FormFieldProps {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles?: any;
  keyboardType: string;
  numberOfLines: number; // Default to single-line input
  multiline: boolean;
}
export interface UserInfo {
  id: string;
  name: string | null;
  email: string | null;
  photo: string | null;
  familyName: string | null;
  givenName: string | null;
}

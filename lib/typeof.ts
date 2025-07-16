export interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerStyles?: any;
  textStyles?: any;
  isLoading?: boolean;
  buttonColor?: string;
  showIcon?: boolean;
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

// export interface ShippingAddress {
//   fullName: string;
//   address: string;
//   city: string;
//   postalCode: string;
//   country: string;
// }

// export interface CartItem {
//   id: string;
//   img: any;
//   price: number;
//   cancelledPrice: number;
//   description: string;
//   h2: string;
//   quantity: number;
// }

// export interface CartState {
//   items: CartItem[];
//   // shippingAddress: ShippingAddress;
//   // paymentMethod: string;
// }

// export interface CalculationBtnsProps {
//   item: CartItem;
// }

// export interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// export interface UserState {
//   userInfo: { user: User; accessToken: string } | null;
// }

// export interface ProductItem {
//   id: string;
//   img: any;
//   price: number;
//   cancelledPrice: number;
//   description: string;
//   h2: string;
//   quantity: number;
// }

// export interface OfferItem {
//   id: number;
//   img: any;
//   offerName: string;
//   offerPercent: string;
// }
// export interface DurationItem {
//   id: number;
//   img: any;
//   monthDuration: string;
// }

// export interface SectionData {
//   title: string;
//   type: string;
//   data: ProductItem[] | OfferItem[] | DurationItem[]; // You can have either Product or Offer items in each section
// }

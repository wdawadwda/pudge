import { Linking } from "react-native";

export const handlePhonePress = (phoneNumber: string) => {
  if (phoneNumber) {
    const cleanedPhoneNumber = phoneNumber.replace(/\s/g, "");
    Linking.openURL(`tel:${cleanedPhoneNumber}`);
  }
};

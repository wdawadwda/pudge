import { View, Text, StyleSheet } from "react-native";
import {
  backgroundColorSecond3,
  textAlertColor,
  textColor,
} from "../../../entities/const/style/globalDark.style";

export const ServerResponse = ({
  message,
  error,
}: {
  message: string;
  error: string;
}) => {
  const responseStyle = message ? styles.mesWrapSuccess : styles.mesWrapError;
  const textStyle = message ? styles.textSuccess : styles.textError;
  const responseMessage = message || error;

  return (
    <View style={responseStyle}>
      <Text style={textStyle}>{responseMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mesWrapSuccess: {
    backgroundColor: backgroundColorSecond3,
    padding: 10,
    marginVertical: 10,
  },
  mesWrapError: {
    backgroundColor: textAlertColor,
    padding: 10,
    marginVertical: 10,
  },
  textSuccess: {
    color: textColor,
  },
  textError: {
    color: textColor,
  },
});

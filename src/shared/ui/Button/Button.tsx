import { Pressable, StyleSheet, Text } from "react-native";
import {
  backgroundColorSecond3,
  textColor,
} from "../../../entities/const/style/globalDark.style";
import { ButtonProps } from "./button.type";

export const Button = ({ children, onPress, style, disabled }: ButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          opacity: pressed ? 0.6 : 1,
        },
        style,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: backgroundColorSecond3,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: textColor,
  },
  disabled: {
    opacity: 0.5,
  },
});

import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as globalStyles from "../../../entities/styles/global.style";
import { fontsStyles } from "../../../../App";
import { AntDesign } from "@expo/vector-icons";
import {
  backgroundColorSecond3,
  backgroundColorSecond4,
} from "../../../entities/const/style/globalDark.style";
import { ExpandProps } from "./expand.type";

export const Expand = ({ children, theme, label }: ExpandProps) => {
  const [isTableVisible, setTableVisibility] = useState(false);
  const textColor = isTableVisible
    ? backgroundColorSecond4
    : backgroundColorSecond3;

  const toggleTableVisibility = () => {
    setTableVisibility(!isTableVisible);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={toggleTableVisibility}
      >
        <Text
          style={[
            theme === "dark"
              ? globalStyles.darkStyles.text1
              : globalStyles.lightStyles.text1,
            fontsStyles.subtitle,
            { color: textColor },
          ]}
        >
          {isTableVisible ? (
            <>
              {label}
              <AntDesign
                name="arrowdown"
                size={25}
                color={backgroundColorSecond4}
              />
            </>
          ) : (
            <>
              {label}
              <AntDesign
                name="arrowright"
                size={25}
                color={backgroundColorSecond3}
              />
            </>
          )}
        </Text>
      </TouchableOpacity>

      {isTableVisible && children}
    </View>
  );
};

const styles = StyleSheet.create({
  toggleButton: {
    padding: 10,
  },
});

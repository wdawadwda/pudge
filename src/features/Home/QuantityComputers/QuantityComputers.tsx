import { View, Text, StyleSheet } from "react-native";
import * as styles from "../../../entities/styles/global.style";
import { fontsStyles } from "../../../../App";
import { QuantityComputersProps } from "./quantityComputers.type";

export const QuantityComputers = ({
  quantityComputers,
  theme,
}: QuantityComputersProps) => {
  return (
    <View style={quantityStyles.container}>
      <Text
        style={[
          theme === "dark" ? styles.darkStyles.text1 : styles.lightStyles.text1,
          fontsStyles.subtitle2,
          quantityStyles.strong,
        ]}
      >
        Кол-во компьютеров:
      </Text>
      <View style={quantityStyles.list}>
        <View style={quantityStyles.listItem}>
          <Text
            style={[
              theme === "dark"
                ? styles.darkStyles.text2
                : styles.lightStyles.text2,
              fontsStyles.subtitle2,
            ]}
          >
            VIP
          </Text>
          <Text
            style={[
              theme === "dark"
                ? styles.darkStyles.text
                : styles.lightStyles.text,
              fontsStyles.subtitle2,
              quantityStyles.strong,
            ]}
          >
            {quantityComputers.vip === "0" ? "—" : quantityComputers.vip}
          </Text>
        </View>
        <View style={quantityStyles.listItem}>
          <Text
            style={[
              theme === "dark"
                ? styles.darkStyles.text2
                : styles.lightStyles.text2,
              fontsStyles.subtitle2,
            ]}
          >
            Comfort
          </Text>
          <Text
            style={[
              theme === "dark"
                ? styles.darkStyles.text
                : styles.lightStyles.text,
              fontsStyles.subtitle2,
              quantityStyles.strong,
            ]}
          >
            {quantityComputers.comfort === "0"
              ? "—"
              : quantityComputers.comfort}
          </Text>
        </View>
        <View style={quantityStyles.listItem}>
          <Text
            style={[
              theme === "dark"
                ? styles.darkStyles.text2
                : styles.lightStyles.text2,
              fontsStyles.subtitle2,
            ]}
          >
            Bootcamp
          </Text>
          <Text
            style={[
              theme === "dark"
                ? styles.darkStyles.text
                : styles.lightStyles.text,
              fontsStyles.subtitle2,
              quantityStyles.strong,
            ]}
          >
            {quantityComputers.bootcamp === "0"
              ? "—"
              : quantityComputers.bootcamp}
          </Text>
        </View>
        <View style={quantityStyles.listItem}>
          <Text
            style={[
              theme === "dark"
                ? styles.darkStyles.text2
                : styles.lightStyles.text2,
              fontsStyles.subtitle2,
            ]}
          >
            PS5
          </Text>
          <Text
            style={[
              theme === "dark"
                ? styles.darkStyles.text
                : styles.lightStyles.text,
              fontsStyles.subtitle2,
              quantityStyles.strong,
            ]}
          >
            {quantityComputers.ps === "0" ? "—" : quantityComputers.ps}
          </Text>
        </View>
      </View>
    </View>
  );
};

const quantityStyles = StyleSheet.create({
  container: {
    padding: 10,
  },
  list: {
    marginTop: 5,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  strong: {
    fontWeight: "bold",
  },
});

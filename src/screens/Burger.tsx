import { useNavigation } from "@react-navigation/core";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { selectTheme } from "../store/theme/theme.selectors";
import { useSelector } from "react-redux";

export default function Burger() {
  const navigation = useNavigation();
  const theme = useSelector(selectTheme);
  return (
    <View
      style={[
        theme === "dark" ? darkStyles.container : lightStyles.container,
        styles.container,
      ]}
    >
      <Pressable onPress={() => navigation.navigate("Shoes" as never)}>
        <Text style={[theme === "dark" ? darkStyles.text : lightStyles.text]}>
          Shoes
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "100%",
    aspectRatio: 1,
  },
});
const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
  text: {
    color: "white",
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  text: {
    color: "black",
  },
});

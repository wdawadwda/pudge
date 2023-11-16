import { StyleSheet } from "react-native";
import * as stylesConstDark from "../const/style/globalDark";
import * as stylesConstLight from "../const/style/globalLight";

export const fontsStyles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 25,
    fontWeight: "normal",
  },
  text: {
    fontSize: 15,
    fontWeight: "normal",
  },
});

export const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: stylesConstDark.backgroundColor,
  },
  text: {
    color: stylesConstDark.textColor,
  },
});

export const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: stylesConstLight.backgroundColor,
  },
  text: {
    color: stylesConstLight.textColor,
  },
});

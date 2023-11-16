import { StyleSheet } from "react-native";
import * as stylesConstDark from "../const/style/globalDark";
import * as stylesConstLight from "../const/style/globalLight";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "100%",
    aspectRatio: 1,
  },
  text: {},
});

export const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: stylesConstDark.backgroundColor,
  },
  text: {
    color: stylesConstLight.textColor,
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

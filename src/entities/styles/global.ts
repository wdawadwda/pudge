import { StyleSheet } from "react-native";
import * as stylesConstDark from "../const/style/globalDark";
import * as stylesConstLight from "../const/style/globalLight";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
  },
});


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

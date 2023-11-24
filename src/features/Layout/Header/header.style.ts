import * as stylesConstDark from "../../../entities/const/style/globalDark.style";
import { StyleSheet } from "react-native";

export const stylesHeader = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: stylesConstDark.backgroundColorSecond3,
  },
  logo: {
    width: 70,
    height: 70,
  },
});

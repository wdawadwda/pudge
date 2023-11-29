import { StyleSheet } from "react-native";
import { backgroundColor2 } from "../../entities/const/style/globalLight.style";
import { backgroundColor2 as darkBackgroundColor2 } from "../../entities/const/style/globalDark.style";
import { backgroundColorSecond4 } from "../../entities/const/style/globalDark.style";

export const tableStyles = StyleSheet.create({
  m: {
    padding: 0,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
  },
  tableContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
  },
  headerRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  headerCell: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  firstCell: {
    flex: 1,
    alignItems: "flex-start",
  },
  body: {
    flexDirection: "column",
  },
  bodyRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    height: 50,
  },
  bodyRowDark: {
    borderColor: darkBackgroundColor2,
  },
  bodyRowLight: {
    borderColor: backgroundColor2,
  },
  bodyCell: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 10,
  },
  button: {
    borderRadius: 0,
  },
  selectedButton: {
    backgroundColor: backgroundColorSecond4,
  },
});

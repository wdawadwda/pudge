import { StyleSheet } from "react-native";
import { backgroundColorSecond3 } from "../../entities/const/style/globalDark.style";

export const homeClubs = StyleSheet.create({
  homeClubsWrapper: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    width: "100%",
    marginBottom: 50,
    marginTop: 10,
    borderBottomStyle: "solid",
    borderBottomColor: backgroundColorSecond3,
    borderBottomWidth: 2,
    borderTopStyle: "solid",
    borderTopColor: backgroundColorSecond3,
    borderTopWidth: 2,
  },
  img: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  btn: {
    marginBottom: 10,
  },
});

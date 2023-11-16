import { Image, StyleSheet, Text, View } from "react-native";
import { Theme } from "../../../navigation/Navigation";
import { Button } from "../../../shared/ui/Button/Button";
import { ToggleTheme } from "../../../features/ToggleTheme/ToggleTheme";
import * as stylesConstDark from "../../../entities/const/style/globalDark";
import { darkStyles, lightStyles } from "../../../entities/styles/global";

interface HeaderProps {
  theme: Theme;
}
export const Header = ({ theme }: HeaderProps) => {
  return (
    <View
      style={[
        theme === "dark" ? darkStyles.container : lightStyles.container,
        styles.container,
      ]}
    >
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      <Button>
        <Text>Забронировать</Text>
      </Button>
      <ToggleTheme theme={theme} />
    </View>
  );
};

const styles = StyleSheet.create({
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

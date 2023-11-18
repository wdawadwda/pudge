import { Image, Text, View } from "react-native";
import { Theme } from "../../../navigation/Navigation";
import { Button } from "../../../shared/ui/Button/Button";
import { ToggleTheme } from "../../../features/ToggleTheme/ToggleTheme";

import { darkStyles, lightStyles } from "../../../entities/styles/global";
import { stylesHeader } from "./header.style";

interface HeaderProps {
  theme: Theme;
}
export const Header = ({ theme }: HeaderProps) => {
  return (
    <View
      style={[
        theme === "dark" ? darkStyles.container : lightStyles.container,
        stylesHeader.container,
      ]}
    >
      <Image source={require("../../../assets/logo.png")} style={stylesHeader.logo} />
      <Button>
        <Text>Забронировать</Text>
      </Button>
      <ToggleTheme theme={theme} />
    </View>
  );
};


import { View } from "react-native";
import { Button } from "../../shared/ui/Button/Button";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { themeActions } from "../../store/theme/theme.slice";
import { Theme } from "../../navigation/Navigation";
import * as stylesConstDark from "../../entities/const/style/globalDark.style";
import * as stylesConstLight from "../../entities/const/style/globalLight.style";

interface ToggleThemeProps {
  theme: Theme;
}
export const ToggleTheme = ({ theme }: ToggleThemeProps) => {
  const dispatch = useDispatch();

  const toggleThemeHandler = () => {
    dispatch(themeActions.toggleTheme());
  };

  return (
    <View>
      <Button
        style={{
          backgroundColor:
            theme === "dark"
              ? stylesConstDark.backgroundColor
              : stylesConstLight.backgroundColor,
          padding: 10,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "flex-start",
        }}
        onPress={toggleThemeHandler}
      >
        {theme === "dark" ? (
          <Feather name="sun" size={25} color="#fff" />
        ) : (
          <Feather name="moon" size={25} color="black" />
        )}
      </Button>
    </View>
  );
};

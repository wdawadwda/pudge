import { Image, View } from "react-native";
import { ToggleTheme } from "../../../features/ToggleTheme/ToggleTheme";
import { useSelector } from "react-redux";
import { darkStyles, lightStyles } from "../../../entities/styles/global.style";
import { stylesHeader } from "./header.style";
import { HeaderProps } from "./header.type";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { OpenMapsLink } from "../../../shared/ui/Button/OpenMapsLink/OpenMapsLink";
import { selectMainMapData, selectMainMapStatus } from "../../../store/content/content.selectors";
import Loader from "../../../shared/ui/Loader/Loader";

export const Header = ({ theme }: HeaderProps) => {
  const navigation = useNavigation();
  const map = useSelector(selectMainMapData);
  const status = useSelector(selectMainMapStatus);

  return (
    <View
      style={[
        theme === "dark" ? darkStyles.container : lightStyles.container,
        stylesHeader.container,
      ]}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Home" as never)}>
        <Image
          source={require("../../../assets/logo.png")}
          style={stylesHeader.logo}
        />
      </TouchableOpacity>
      {status === "loading" ? (
        <Loader />
      ) : (
        <OpenMapsLink mapUrl={map.mainMap}></OpenMapsLink>
      )}
      <ToggleTheme theme={theme} />
    </View>
  );
};

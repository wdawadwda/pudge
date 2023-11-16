import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { imgHome } from "../data/data";
import { type HomeScreenNavigationProp } from "~/navigation/navigation.type";
import { useNavigation } from "@react-navigation/native";
import { selectTheme } from "../store/theme/theme.selectors";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../store/theme/theme.slice";
import { Theme } from "../navigation/Navigation";
import { darkStyles } from "../entities/styles/global";
import { lightStyles } from "../entities/styles/global";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../shared/ui/Button/Button";

export default function Home({ theme }: { theme: Theme }) {
  const navigation = useNavigation();
  // const theme = useSelector(selectTheme);
  console.log(theme);
  const dispatch = useDispatch();
  const toggleThemeHandler = () => {
    dispatch(themeActions.toggleTheme());
  };
  return (
    <SafeAreaView
      style={[
        theme === "dark" ? darkStyles.container : lightStyles.container,
        styles.container,
      ]}
    >
      <ScrollView
        style={[
          theme === "dark" ? darkStyles.container : lightStyles.container,
          styles.container,
        ]}
      >
        <Button onPress={() => navigation.navigate("Shoes" as never)}>
          <Text>Shoes</Text>
        </Button>
        <Text
          style={[
            theme === "dark" ? darkStyles.text : lightStyles,
            styles.text,
          ]}
        >
          HI
        </Text>
        <Button onPress={toggleThemeHandler}>
          <Text>Toggle Theme</Text>
        </Button>
        <Text
          style={[
            theme === "dark" ? darkStyles.text : lightStyles,
            styles.text,
          ]}
        >
          HI
        </Text>
        <Text
          style={[
            theme === "dark" ? darkStyles.text : lightStyles,
            styles.text,
          ]}
        >
          HI
        </Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
        <Text style={styles.text}>HI</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "100%",
    aspectRatio: 1,
  },
  text: {},
});

// const darkStyles = StyleSheet.create({
//   container: {
//     backgroundColor: "#000",
//   },
//   text: {
//     color: "white",
//   },
// });

// const lightStyles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//   },
//   text: {
//     color: "red",
//   },
// });

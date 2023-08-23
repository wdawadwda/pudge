import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import { imgHome } from "../data/data";
import { type HomeScreenNavigationProp } from "~/navigation/navigation.type";
import { useNavigation } from "@react-navigation/native";
import { selectTheme } from "../store/theme/theme.selectors";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../store/theme/theme.slice";

export default function Home() {
  const navigation = useNavigation();
  const theme = useSelector(selectTheme);
  console.log(theme);
  const dispatch = useDispatch();
  const toggleThemeHandler = () => {
    dispatch(themeActions.toggleTheme());
  };
  return (
    <ScrollView
      style={[
        theme === "dark" ? darkStyles.container : lightStyles.container,
        styles.container,
      ]}
    >
      <Pressable onPress={() => navigation.navigate("Shoes" as never)}>
        <Text
          style={[
            theme === "dark" ? darkStyles.text : lightStyles,
            styles.text,
          ]}
        >
          Shoes
        </Text>
      </Pressable>
      <Text
        style={[theme === "dark" ? darkStyles.text : lightStyles, styles.text]}
      >
        HI
      </Text>
      <Pressable onPress={toggleThemeHandler}>
        <Text
          style={[
            theme === "dark" ? darkStyles.text : lightStyles,
            styles.text,
          ]}
        >
          Toggle Theme
        </Text>
      </Pressable>
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

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
  text: {
    color: "white",
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

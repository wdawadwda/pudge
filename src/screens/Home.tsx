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
import {
  darkStyles,
  fontsStyles,
  lightStyles,
} from "../entities/styles/global";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../shared/ui/Button/Button";
import { Feather } from "@expo/vector-icons";
import { ToggleTheme } from "../features/ToggleTheme/ToggleTheme";
import { Layout } from "../features/Layout/Layout";
import { useEffect, useState } from "react";

export default function Home({ theme }: { theme: Theme }) {
  const navigation = useNavigation();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://backend.pudge.by/main-map/')
      .then((response) => response.json())
      .then((data) => {
        console.log('Полученные данные:', data);
        setData(data);
      })
      .catch((error) => {
        console.error('Ошибка запроса:', error);
      });
  }, []);
  return (
    <Layout theme={theme}>
      <ScrollView
        style={[
          theme === "dark" ? darkStyles.container : lightStyles.container,
          styles.container,
        ]}
      >
        <Button onPress={() => navigation.navigate("Shoes" as never)}>
          <Text>Shoes</Text>
        </Button>
        {data && (
          <Text
            style={[
              theme === 'dark' ? darkStyles.text : lightStyles,
              styles.text,
            ]}
          >
            {data.mainMap}
          </Text>
        )}

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
            theme === "dark" ? darkStyles.text : lightStyles.text,
            fontsStyles.title,
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
    </Layout>
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

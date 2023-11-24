import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import Home from "./src/screens/Home/Home";
import Shoes from "./src/screens/Shoes";
import { Navigation } from "./src/navigation/Navigation";
import { Provider, useDispatch } from "react-redux";
import { store } from "./src/store/store";
import { themeActions } from "./src/store/theme/theme.slice";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./src/fonts/Roboto-Bold.ttf"),
    "PlayfairDisplay-VariableFont_wght": require("./src/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.container}>
        <View style={styles.container}>
          <Navigation />
        </View>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1 },
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight на случай если SafeAreaView не работает корректно
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});

export const fontsStyles = StyleSheet.create({
  title: {
    fontSize: 50,
    textAlign: "center",
    marginBottom: 25,
    textTransform: "uppercase",
    fontFamily: "Roboto-Bold",
  },
  subtitle: {
    fontSize: 25,
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 15,
    fontFamily: "PlayfairDisplay-VariableFont_wght",
  },
  subtitle2: {
    fontSize: 25,
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 15,
    fontFamily: "Roboto-Regular",
  },
  text: {
    fontSize: 15,
    fontFamily: "PlayfairDisplay-VariableFont_wght",
  },
  text2: {
    fontSize: 15,
    fontFamily: "Roboto-Regular",
  },
});

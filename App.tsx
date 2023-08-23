import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import Home from "./src/screens/Home";
import Shoes from "./src/screens/Shoes";
import { Navigation } from "./src/navigation/Navigation";
import { Provider, useDispatch } from "react-redux";
import { store } from "./src/store/store";
import { themeActions } from "./src/store/theme/theme.slice";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
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

import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./Header/Header";
import { StyleSheet, View } from "react-native";
import { ReactNode } from "react";
import { Theme } from "../../navigation/Navigation";
import { darkStyles, lightStyles } from "../../entities/styles/global";

interface LayoutProps {
  children: ReactNode;
  theme: Theme;
}

export const Layout = ({ children, theme }: LayoutProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={[
          styles.container,
          theme === "dark" ? darkStyles.container : lightStyles.container,
        ]}
      >
        <Header theme={theme} />
        <View style={styles.content}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
  },
});

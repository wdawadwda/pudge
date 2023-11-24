import { ScrollView, Text } from "react-native";
import { Layout } from "../../features/Layout/Layout";
import { Theme } from "../../store/theme/theme.type";
import * as styles from "../../entities/styles/global.style";

export default function News({ theme }: { theme: Theme }) {
  return (
    <Layout theme={theme}>
      <ScrollView
        style={[
          theme === "dark"
            ? styles.darkStyles.container
            : styles.lightStyles.container,
          styles.styles.container,
        ]}
      >
        <Text style={{ color: "red" }}>News</Text>
      </ScrollView>
    </Layout>
  );
}

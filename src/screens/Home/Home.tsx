import { ScrollView } from "react-native";
import * as styles from "../../entities/styles/global.style";
import { Layout } from "../../features/Layout/Layout";
import { Theme } from "../../store/theme/theme.type";
import HomeClubs from "../../features/Home/HomeClubs";
import NewsSlider from "../../features/Home/NewsSlider/NewsSlider";

export default function Home({ theme }: { theme: Theme }) {
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
        <NewsSlider theme={theme} />
        <HomeClubs theme={theme} />
      </ScrollView>
    </Layout>
  );
}

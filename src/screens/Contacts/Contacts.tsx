import { ScrollView } from "react-native";
import { Layout } from "../../features/Layout/Layout";
import { Theme } from "../../store/theme/theme.type";
import * as styles from "../../entities/styles/global.style";
import ContactsSection from "../../features/Contacts/Contacts";

export default function Contacts({ theme }: { theme: Theme }) {
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
        <ContactsSection theme={theme} />
      </ScrollView>
    </Layout>
  );
}

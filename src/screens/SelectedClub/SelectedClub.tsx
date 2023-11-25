import { ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Layout } from "../../features/Layout/Layout";
import { Theme } from "../../store/theme/theme.type";
import { PriceTable } from "../../features/Clubs/Price";
import { Expand } from "../../shared/ui/Expand/Expand";
import { BackButton } from "../../shared/ui/Button/BackButton/BackButton";
import { useSelector } from "react-redux";
import { selectClub } from "../../store/content/content.selectors";
import Loader from "../../shared/ui/Loader/Loader";
import { ContactsClub } from "../../features/Clubs/ContactsClub";
import * as globalStyles from "../../entities/styles/global.style";
import { fontsStyles } from "../../../App";
import { ComputerSpec } from "../../features/Clubs/ComputerSpec/ComputerSpec";

export default function SelectedClub({ theme }: { theme: Theme }) {
  const clubData = useSelector(selectClub);
  const navigation = useNavigation();

  if (!clubData) {
    return <Loader />;
  }

  return (
    <Layout theme={theme}>
      <ScrollView>
        <BackButton onPress={() => navigation.goBack()} />
        <Text
          style={[
            theme === "dark"
              ? globalStyles.darkStyles.text1
              : globalStyles.lightStyles.text1,
            fontsStyles.title,
          ]}
        >
          {clubData.name}
        </Text>
        <ContactsClub clubData={clubData} theme={theme} />
        <Expand label={"Цены"} theme={theme}>
          <PriceTable clubData={clubData} theme={theme} />
        </Expand>
        <Expand label={"Железо"} theme={theme}>
          <ComputerSpec clubData={clubData} theme={theme} />
        </Expand>
      </ScrollView>
    </Layout>
  );
}

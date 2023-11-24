import { ScrollView } from "react-native";
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
        <ContactsClub clubData={clubData} theme={theme} />
        <Expand label={"Цены"} theme={theme}>
          <PriceTable clubData={clubData} theme={theme} />
        </Expand>
      </ScrollView>
    </Layout>
  );
}

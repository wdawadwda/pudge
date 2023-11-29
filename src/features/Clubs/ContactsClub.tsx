import { StyleSheet, Text, View } from "react-native";
import * as globalStyles from "../../entities/styles/global.style";
import { Theme } from "../../store/theme/theme.type";
import { TypeClubData } from "../../entities/const/clubsContent.type";
import { Button } from "../../shared/ui/Button/Button";
import Loader from "../../shared/ui/Loader/Loader";
import { fontsStyles } from "../../../App";
import { TypeBookingData } from "../../store/content/content.types";
import { contentActions } from "../../store/content/content.slice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { handlePhonePress } from "../../entities/const/utils/utils";

export const ContactsClub = ({
  clubData,
  theme,
}: {
  theme: Theme;
  clubData: TypeClubData | null;
}) => {
  if (!clubData) {
    return <Loader />;
  }
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleBooking = (data: TypeBookingData) => {
    dispatch(contentActions.setBookingData(data));
    navigation.navigate("Booking" as never);
  };

  return (
    <View style={[globalStyles.styles.container, styles.container]}>
      <Button
        onPress={(e) => {
          e.stopPropagation();
          handleBooking({
            email: clubData.contacts.email,
            name: clubData.name,
          });
        }}
      >
        Забронировать
      </Button>
      <Text
        style={[
          theme === "dark"
            ? globalStyles.darkStyles.text1
            : globalStyles.lightStyles.text1,
          fontsStyles.text2,
        ]}
        onPress={() => handlePhonePress(clubData.contacts.phone)}
      >
        {clubData.contacts.phone}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 50,
  },
});
